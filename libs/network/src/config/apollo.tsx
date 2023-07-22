import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { useAppSelector } from '@zillow/store'
import { selectUser } from '@zillow/store/user'
import { ReactNode } from 'react'
import jwtDecode from 'jwt-decode'
import {
  LoginDocument,
  LoginMutation,
  LoginMutationVariables,
} from '@zillow/generated/types'

export interface IApolloProviderProps {
  children: ReactNode
}

export const ApolloProvider = ({ children }: IApolloProviderProps) => {
  const user = useAppSelector(selectUser)
  //   Create an http link
  const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql',
  })

  const authLink = setContext(async (_, { headers }) => {
    if (!user.token) {
      return {
        headers,
      }
    }
    // return the headers to the context so httpLink can read them
    const decoded: any = jwtDecode(user.token || '')

    console.log('Auth running...', decoded, new Date(decoded?.exp * 1000))

    return {
      headers: {
        ...headers,
        authorization: user.token ? `Bearer ${user.token}` : '',
      },
    }
  })

  // Create an Apollo Client instance
  const apolloClient = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  })

  return <Provider client={apolloClient}>{children}</Provider>
}

export async function createAuthenticatedClient() {
  const apolloClient = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  })

  const { data } = await apolloClient.mutate<
    LoginMutation,
    LoginMutationVariables
  >({
    mutation: LoginDocument,
    variables: {
      credentials: { email: 'admin@email.com', password: '123456' },
    },
  })

  const idToken = data?.login.idToken

  const authLink = setContext(async (_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: idToken ? `Bearer ${idToken}` : '',
      },
    }
  })

  const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql',
  })

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })
}
