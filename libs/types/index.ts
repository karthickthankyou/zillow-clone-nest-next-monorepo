import { ReactNode } from 'react'
export type Role = 'admin' | 'seller'

export type GetUserType = {
  uid: string
  displayName: string
  email: string
  emailVerified: boolean
  phoneNumber: string
  roles: Role[]
}

export type NotificationType = {
  id: string
  message: ReactNode
  type?: 'success' | 'error' | 'info' | 'warning'
  position?:
    | 'top-right'
    | 'top-left'
    | 'top-center'
    | 'bottom-right'
    | 'bottom-left'
    | 'bottom-center'
}

export type AddressSearchType = {
  address: string
  city: string
  state: string
  postcode: string
  latitude: number
  longitude: number
}

export type Viewport = {
  latitude: number
  longitude: number
  zoom: number
}

export type MapSearch = {
  displayName: string
} & Viewport

export type Bounds = [[number, number], [number, number]]

export type PlaceTypesType =
  | 'region'
  | 'postcode'
  | 'district'
  | 'place'
  | 'locality'
  | 'neighborhood'
  | 'address'
  | 'poi'

export type MenuType = {
  [key: string]: {
    title: string
    menu: { subtitle: string; url: string }[]
  }[]
}
