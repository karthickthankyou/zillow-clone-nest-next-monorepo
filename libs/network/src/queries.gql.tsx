import { gql } from 'graphql-request'

export const Properties = gql`
  query Properties(
    $where: PropertyWhereInput
    $orderBy: [PropertyOrderByWithRelationInput!]
    $cursor: WhereUniqueInputNumber
    $take: Int
    $skip: Int
    $distinct: [PropertyScalarFieldEnum!]
  ) {
    properties(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      id
      address
      bath
    }
  }
`

export const PropertiesDetailed = gql`
  query SearchPropertiesDetailed(
    $where: PropertyWhereInput
    $orderBy: [PropertyOrderByWithRelationInput!]
    $cursor: WhereUniqueInputNumber
    $take: Int
    $skip: Int
    $distinct: [PropertyScalarFieldEnum!]
  ) {
    properties(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      id
      address
      bath
      beds
      price
      sqft
      plan
      imgs
      published
    }
  }
`

export const Property = gql`
  query Property($where: PropertyWhereUniqueInput) {
    property(where: $where) {
      id
      bath
      address
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
      type
    }
  }
`

export const LocationStats = gql`
  query LocationStats(
    $where: LocationStatsWhereInput
    $orderBy: [LocationStatsOrderByWithRelationInput!]
    $cursor: WhereUniqueInputNumber
    $take: Int
    $skip: Int
    $distinct: [LocationStatsScalarFieldEnum!]
  ) {
    locationStats(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      id
      lat
      lng
      priceSqft
      totalHomes
      type
    }
  }
`

export const LocationStat = gql`
  query LocationStat($where: LocationStatsWhereUniqueInput) {
    locationStat(where: $where) {
      id
      lat
      lng
      priceSqft
      totalHomes
      type
    }
  }
`
