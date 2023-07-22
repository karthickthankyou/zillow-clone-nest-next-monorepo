import { gql } from 'graphql-request'

export const Properties = gql`
  query Properties {
    properties {
      id
      address
      bath
    }
  }
`

export const UserHomes = gql`
  query UserHomes(
    $where: UserHomeWhereInput
    $orderBy: [UserHomeOrderByWithRelationInput!]
    $cursor: UserHomeWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [UserHomeScalarFieldEnum!]
  ) {
    userHomes(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      id
      propertyId
    }
  }
`
