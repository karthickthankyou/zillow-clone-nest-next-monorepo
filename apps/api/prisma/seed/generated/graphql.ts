/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  {
    [SubKey in K]?: Maybe<T[SubKey]>
  }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  {
    [SubKey in K]: Maybe<T[SubKey]>
  }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
}

export type Agent = {
  __typename?: 'Agent'
  createdAt: Scalars['DateTime']
  messages: Array<GroupedMessages>
  properties: Array<Property>
  uid: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type AgentListRelationFilter = {
  every?: InputMaybe<AgentWhereInput>
  none?: InputMaybe<AgentWhereInput>
  some?: InputMaybe<AgentWhereInput>
}

export type AgentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type AgentOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  messages?: InputMaybe<MessageOrderByRelationAggregateInput>
  properties?: InputMaybe<PropertyOrderByRelationAggregateInput>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type AgentRelationFilter = {
  is?: InputMaybe<AgentWhereInput>
  isNot?: InputMaybe<AgentWhereInput>
}

export enum AgentScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type AgentWhereInput = {
  AND?: InputMaybe<Array<AgentWhereInput>>
  NOT?: InputMaybe<Array<AgentWhereInput>>
  OR?: InputMaybe<Array<AgentWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  messages?: InputMaybe<MessageListRelationFilter>
  properties?: InputMaybe<PropertyListRelationFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type AgentWhereUniqueInput = {
  uid?: InputMaybe<Scalars['String']>
}

export type BedPrice = {
  __typename?: 'BedPrice'
  avg: Scalars['Int']
  beds: Scalars['String']
  count: Scalars['Int']
  id: Scalars['Int']
  locationStatsId: Scalars['Int']
  sqftAvg: Scalars['Int']
}

export type BedPriceListRelationFilter = {
  every?: InputMaybe<BedPriceWhereInput>
  none?: InputMaybe<BedPriceWhereInput>
  some?: InputMaybe<BedPriceWhereInput>
}

export type BedPriceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type BedPriceOrderByWithRelationInput = {
  avg?: InputMaybe<SortOrder>
  beds?: InputMaybe<SortOrder>
  count?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  locationStats?: InputMaybe<LocationStatsOrderByWithRelationInput>
  locationStatsId?: InputMaybe<SortOrder>
  sqftAvg?: InputMaybe<SortOrder>
}

export enum BedPriceScalarFieldEnum {
  Avg = 'avg',
  Beds = 'beds',
  Count = 'count',
  Id = 'id',
  LocationStatsId = 'locationStatsId',
  SqftAvg = 'sqftAvg',
}

export type BedPriceWhereInput = {
  AND?: InputMaybe<Array<BedPriceWhereInput>>
  NOT?: InputMaybe<Array<BedPriceWhereInput>>
  OR?: InputMaybe<Array<BedPriceWhereInput>>
  avg?: InputMaybe<IntFilter>
  beds?: InputMaybe<StringFilter>
  count?: InputMaybe<IntFilter>
  id?: InputMaybe<IntFilter>
  locationStats?: InputMaybe<LocationStatsRelationFilter>
  locationStatsId?: InputMaybe<IntFilter>
  sqftAvg?: InputMaybe<IntFilter>
}

export type BedPriceWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>
  not?: InputMaybe<Scalars['Boolean']>
}

export type Buyer = {
  __typename?: 'Buyer'
  createdAt: Scalars['DateTime']
  interests: Array<UserHome>
  messages: Array<GroupedMessages>
  uid: Scalars['String']
  updatedAt: Scalars['DateTime']
  views: Array<View>
}

export type BuyerOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  interests?: InputMaybe<UserHomeOrderByRelationAggregateInput>
  messages?: InputMaybe<MessageOrderByRelationAggregateInput>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  views?: InputMaybe<ViewOrderByRelationAggregateInput>
}

export type BuyerRelationFilter = {
  is?: InputMaybe<BuyerWhereInput>
  isNot?: InputMaybe<BuyerWhereInput>
}

export enum BuyerScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type BuyerWhereInput = {
  AND?: InputMaybe<Array<BuyerWhereInput>>
  NOT?: InputMaybe<Array<BuyerWhereInput>>
  OR?: InputMaybe<Array<BuyerWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  interests?: InputMaybe<UserHomeListRelationFilter>
  messages?: InputMaybe<MessageListRelationFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  views?: InputMaybe<ViewListRelationFilter>
}

export type BuyerWhereUniqueInput = {
  uid?: InputMaybe<Scalars['String']>
}

export type CreateAgentInput = {
  uid: Scalars['String']
}

export type CreateBedPriceInput = {
  avg: Scalars['Int']
  beds: Scalars['String']
  count: Scalars['Int']
  locationStatsId: Scalars['Int']
  sqftAvg: Scalars['Int']
}

export type CreateBuyerInput = {
  uid: Scalars['String']
}

export type CreateLocationStatsInput = {
  lat: Scalars['Int']
  lng: Scalars['Int']
  priceSqft: Scalars['Int']
  totalHomes: Scalars['Int']
  type?: InputMaybe<LocationStatsType>
}

export type CreateMessageInput = {
  agentUid?: InputMaybe<Scalars['String']>
  buyerUid?: InputMaybe<Scalars['String']>
  message: Scalars['String']
  propertyId: Scalars['Int']
  sellerUid?: InputMaybe<Scalars['String']>
}

export type CreatePropertyInput = {
  address: Scalars['String']
  bath?: InputMaybe<Scalars['Int']>
  beds?: InputMaybe<Scalars['Int']>
  city: Scalars['String']
  description?: InputMaybe<Scalars['String']>
  facts?: InputMaybe<Scalars['String']>
  features?: InputMaybe<Scalars['String']>
  imgs: Array<Scalars['String']>
  lat: Scalars['Int']
  lng: Scalars['Int']
  lotSize: Scalars['Int']
  plan: Scalars['Int']
  price: Scalars['Int']
  priceSqft?: InputMaybe<Scalars['Int']>
  published: Scalars['Boolean']
  sellerUid: Scalars['String']
  sqft: Scalars['Int']
  state: Scalars['String']
  style?: InputMaybe<Style>
  yearBuilt: Scalars['Int']
  zipcode: Scalars['String']
}

export type CreateSellerInput = {
  uid: Scalars['String']
}

export type CreateUserHomeInput = {
  buyerUid: Scalars['String']
  propertyId: Scalars['Int']
  type: UserHomeType
}

export type CreateViewInput = {
  buyerUid: Scalars['String']
  propertyId: Scalars['Int']
}

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  notIn?: InputMaybe<Array<Scalars['String']>>
}

export type EnumStyleFilter = {
  equals?: InputMaybe<Style>
  in?: InputMaybe<Array<Style>>
  not?: InputMaybe<Style>
  notIn?: InputMaybe<Array<Style>>
}

export type GroupedMessages = {
  __typename?: 'GroupedMessages'
  messages: Array<Message>
  propertyId: Scalars['Int']
}

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Scalars['Int']>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  not?: InputMaybe<Scalars['Int']>
  notIn?: InputMaybe<Scalars['Int']>
}

export type LocationStats = {
  __typename?: 'LocationStats'
  id: Scalars['Int']
  lat: Scalars['Int']
  lng: Scalars['Int']
  priceSqft: Scalars['Int']
  totalHomes: Scalars['Int']
  type?: Maybe<LocationStatsType>
}

export type LocationStatsOrderByWithRelationInput = {
  bedsPrice?: InputMaybe<BedPriceOrderByRelationAggregateInput>
  id?: InputMaybe<SortOrder>
  lat?: InputMaybe<SortOrder>
  lng?: InputMaybe<SortOrder>
  priceSqft?: InputMaybe<SortOrder>
  totalHomes?: InputMaybe<SortOrder>
  type?: InputMaybe<SortOrder>
}

export type LocationStatsRelationFilter = {
  is?: InputMaybe<LocationStatsWhereInput>
  isNot?: InputMaybe<LocationStatsWhereInput>
}

export enum LocationStatsScalarFieldEnum {
  Id = 'id',
  Lat = 'lat',
  Lng = 'lng',
  PriceSqft = 'priceSqft',
  TotalHomes = 'totalHomes',
  Type = 'type',
}

export enum LocationStatsType {
  City = 'city',
  State = 'state',
}

export type LocationStatsWhereInput = {
  AND?: InputMaybe<Array<LocationStatsWhereInput>>
  NOT?: InputMaybe<Array<LocationStatsWhereInput>>
  OR?: InputMaybe<Array<LocationStatsWhereInput>>
  bedsPrice?: InputMaybe<BedPriceListRelationFilter>
  id?: InputMaybe<IntFilter>
  lat?: InputMaybe<IntFilter>
  lng?: InputMaybe<IntFilter>
  priceSqft?: InputMaybe<IntFilter>
  totalHomes?: InputMaybe<IntFilter>
  type?: InputMaybe<LocationStatsType>
}

export type LocationStatsWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type Message = {
  __typename?: 'Message'
  agent?: Maybe<Agent>
  agentUid?: Maybe<Scalars['String']>
  buyer?: Maybe<Buyer>
  buyerUid?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  message: Scalars['String']
  property: Property
  propertyId: Scalars['Int']
  seller?: Maybe<Seller>
  sellerUid?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

export type MessageListRelationFilter = {
  every?: InputMaybe<MessageWhereInput>
  none?: InputMaybe<MessageWhereInput>
  some?: InputMaybe<MessageWhereInput>
}

export type MessageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type MessageOrderByWithRelationInput = {
  agent?: InputMaybe<AgentOrderByWithRelationInput>
  agentUid?: InputMaybe<SortOrder>
  buyer?: InputMaybe<BuyerOrderByWithRelationInput>
  buyerUid?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  message?: InputMaybe<SortOrder>
  property?: InputMaybe<PropertyOrderByWithRelationInput>
  propertyId?: InputMaybe<SortOrder>
  seller?: InputMaybe<SellerOrderByWithRelationInput>
  sellerUid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum MessageScalarFieldEnum {
  AgentUid = 'agentUid',
  BuyerUid = 'buyerUid',
  CreatedAt = 'createdAt',
  Id = 'id',
  Message = 'message',
  PropertyId = 'propertyId',
  SellerUid = 'sellerUid',
  UpdatedAt = 'updatedAt',
}

export type MessageWhereInput = {
  AND?: InputMaybe<Array<MessageWhereInput>>
  NOT?: InputMaybe<Array<MessageWhereInput>>
  OR?: InputMaybe<Array<MessageWhereInput>>
  agent?: InputMaybe<AgentRelationFilter>
  agentUid?: InputMaybe<StringFilter>
  buyer?: InputMaybe<BuyerRelationFilter>
  buyerUid?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  message?: InputMaybe<StringFilter>
  property?: InputMaybe<PropertyRelationFilter>
  propertyId?: InputMaybe<IntFilter>
  seller?: InputMaybe<SellerRelationFilter>
  sellerUid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type MessageWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createAgent: Agent
  createBedPrice: BedPrice
  createBuyer: Buyer
  createLocationStats: LocationStats
  createMessage: Message
  createProperty: Property
  createSeller: Seller
  createUserHome: UserHome
  createView: View
  removeAgent: Agent
  removeBedPrice: BedPrice
  removeBuyer: Buyer
  removeLocationStats: LocationStats
  removeMessage: Message
  removeProperty: Property
  removeSeller: Seller
  removeUserHome: UserHome
  removeView: View
  updateAgent: Agent
  updateBedPrice: BedPrice
  updateBuyer: Buyer
  updateLocationStats: LocationStats
  updateProperty: Property
  updateSeller: Seller
  updateUserHome: UserHome
  updateView: View
}

export type MutationCreateAgentArgs = {
  createAgentInput: CreateAgentInput
}

export type MutationCreateBedPriceArgs = {
  createBedPriceInput: CreateBedPriceInput
}

export type MutationCreateBuyerArgs = {
  createBuyerInput: CreateBuyerInput
}

export type MutationCreateLocationStatsArgs = {
  createLocationStatsInput: CreateLocationStatsInput
}

export type MutationCreateMessageArgs = {
  createMessageInput: CreateMessageInput
}

export type MutationCreatePropertyArgs = {
  createPropertyInput: CreatePropertyInput
}

export type MutationCreateSellerArgs = {
  createSellerInput: CreateSellerInput
}

export type MutationCreateUserHomeArgs = {
  createUserHomeInput: CreateUserHomeInput
}

export type MutationCreateViewArgs = {
  createViewInput: CreateViewInput
}

export type MutationRemoveAgentArgs = {
  where?: InputMaybe<AgentWhereUniqueInput>
}

export type MutationRemoveBedPriceArgs = {
  where?: InputMaybe<BedPriceWhereUniqueInput>
}

export type MutationRemoveBuyerArgs = {
  where?: InputMaybe<BuyerWhereUniqueInput>
}

export type MutationRemoveLocationStatsArgs = {
  where?: InputMaybe<LocationStatsWhereUniqueInput>
}

export type MutationRemoveMessageArgs = {
  where?: InputMaybe<MessageWhereUniqueInput>
}

export type MutationRemovePropertyArgs = {
  where?: InputMaybe<PropertyWhereUniqueInput>
}

export type MutationRemoveSellerArgs = {
  where?: InputMaybe<SellerWhereUniqueInput>
}

export type MutationRemoveUserHomeArgs = {
  where?: InputMaybe<UserHomeWhereUniqueInput>
}

export type MutationRemoveViewArgs = {
  where?: InputMaybe<ViewWhereUniqueInput>
}

export type MutationUpdateAgentArgs = {
  updateAgentInput: UpdateAgentInput
}

export type MutationUpdateBedPriceArgs = {
  updateBedPriceInput: UpdateBedPriceInput
}

export type MutationUpdateBuyerArgs = {
  updateBuyerInput: UpdateBuyerInput
}

export type MutationUpdateLocationStatsArgs = {
  updateLocationStatsInput: UpdateLocationStatsInput
}

export type MutationUpdatePropertyArgs = {
  updatePropertyInput: UpdatePropertyInput
}

export type MutationUpdateSellerArgs = {
  updateSellerInput: UpdateSellerInput
}

export type MutationUpdateUserHomeArgs = {
  updateUserHomeInput: UpdateUserHomeInput
}

export type MutationUpdateViewArgs = {
  updateViewInput: UpdateViewInput
}

export type Property = {
  __typename?: 'Property'
  address: Scalars['String']
  agents: Array<Agent>
  bath?: Maybe<Scalars['Int']>
  beds?: Maybe<Scalars['Int']>
  city: Scalars['String']
  createdAt: Scalars['DateTime']
  description?: Maybe<Scalars['String']>
  facts?: Maybe<Scalars['String']>
  features?: Maybe<Scalars['String']>
  id: Scalars['Int']
  imgs: Array<Scalars['String']>
  lat: Scalars['Int']
  lng: Scalars['Int']
  lotSize: Scalars['Int']
  messages: Array<Message>
  plan: Scalars['Int']
  price: Scalars['Int']
  priceSqft?: Maybe<Scalars['Int']>
  published: Scalars['Boolean']
  seller: Seller
  sellerUid: Scalars['String']
  sqft: Scalars['Int']
  state: Scalars['String']
  style?: Maybe<Style>
  updatedAt: Scalars['DateTime']
  userHomes: Array<UserHome>
  views: Array<View>
  yearBuilt: Scalars['Int']
  zipcode: Scalars['String']
}

export type PropertyListRelationFilter = {
  every?: InputMaybe<PropertyWhereInput>
  none?: InputMaybe<PropertyWhereInput>
  some?: InputMaybe<PropertyWhereInput>
}

export type PropertyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type PropertyOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>
  agents?: InputMaybe<AgentOrderByRelationAggregateInput>
  bath?: InputMaybe<SortOrder>
  beds?: InputMaybe<SortOrder>
  city?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  facts?: InputMaybe<SortOrder>
  features?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  imgs?: InputMaybe<SortOrder>
  lat?: InputMaybe<SortOrder>
  lng?: InputMaybe<SortOrder>
  lotSize?: InputMaybe<SortOrder>
  messages?: InputMaybe<MessageOrderByRelationAggregateInput>
  plan?: InputMaybe<SortOrder>
  price?: InputMaybe<SortOrder>
  priceSqft?: InputMaybe<SortOrder>
  published?: InputMaybe<SortOrder>
  seller?: InputMaybe<SortOrder>
  sellerUid?: InputMaybe<SortOrder>
  sqft?: InputMaybe<SortOrder>
  state?: InputMaybe<SortOrder>
  style?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  userHomes?: InputMaybe<UserHomeOrderByRelationAggregateInput>
  views?: InputMaybe<ViewOrderByRelationAggregateInput>
  yearBuilt?: InputMaybe<SortOrder>
  zipcode?: InputMaybe<SortOrder>
}

export type PropertyRelationFilter = {
  is?: InputMaybe<PropertyWhereInput>
  isNot?: InputMaybe<PropertyWhereInput>
}

export enum PropertyScalarFieldEnum {
  Address = 'address',
  Bath = 'bath',
  Beds = 'beds',
  City = 'city',
  CreatedAt = 'createdAt',
  Description = 'description',
  Facts = 'facts',
  Features = 'features',
  Id = 'id',
  Imgs = 'imgs',
  Lat = 'lat',
  Lng = 'lng',
  LotSize = 'lotSize',
  Plan = 'plan',
  Price = 'price',
  PriceSqft = 'priceSqft',
  Published = 'published',
  SellerUid = 'sellerUid',
  Sqft = 'sqft',
  State = 'state',
  Style = 'style',
  UpdatedAt = 'updatedAt',
  YearBuilt = 'yearBuilt',
  Zipcode = 'zipcode',
}

export type PropertyWhereInput = {
  AND?: InputMaybe<Array<PropertyWhereInput>>
  NOT?: InputMaybe<Array<PropertyWhereInput>>
  OR?: InputMaybe<Array<PropertyWhereInput>>
  address?: InputMaybe<StringFilter>
  agents?: InputMaybe<AgentListRelationFilter>
  bath?: InputMaybe<IntFilter>
  beds?: InputMaybe<IntFilter>
  city?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  description?: InputMaybe<StringFilter>
  facts?: InputMaybe<StringFilter>
  features?: InputMaybe<StringFilter>
  id?: InputMaybe<IntFilter>
  imgs?: InputMaybe<StringListFilter>
  lat?: InputMaybe<IntFilter>
  lng?: InputMaybe<IntFilter>
  lotSize?: InputMaybe<IntFilter>
  messages?: InputMaybe<MessageListRelationFilter>
  plan?: InputMaybe<IntFilter>
  price?: InputMaybe<IntFilter>
  priceSqft?: InputMaybe<IntFilter>
  published?: InputMaybe<BoolFilter>
  seller?: InputMaybe<SellerRelationFilter>
  sellerUid?: InputMaybe<StringFilter>
  sqft?: InputMaybe<IntFilter>
  state?: InputMaybe<StringFilter>
  style?: InputMaybe<EnumStyleFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  userHomes?: InputMaybe<UserHomeListRelationFilter>
  views?: InputMaybe<ViewListRelationFilter>
  yearBuilt?: InputMaybe<IntFilter>
  zipcode?: InputMaybe<StringFilter>
}

export type PropertyWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type Query = {
  __typename?: 'Query'
  agent: Agent
  agents: Array<Agent>
  bedPrice: BedPrice
  bedPrices: Array<BedPrice>
  buyer: Buyer
  buyers: Array<Buyer>
  locationStat: LocationStats
  locationStats: Array<LocationStats>
  message: Message
  messages: Array<Message>
  properties: Array<Property>
  property: Property
  seller: Seller
  sellers: Array<Seller>
  userHome: UserHome
  userHomes: Array<UserHome>
  view: View
  views: Array<View>
}

export type QueryAgentArgs = {
  where?: InputMaybe<AgentWhereUniqueInput>
}

export type QueryAgentsArgs = {
  cursor?: InputMaybe<WhereUniqueInputUid>
  distinct?: InputMaybe<Array<AgentScalarFieldEnum>>
  orderBy?: InputMaybe<Array<AgentOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AgentWhereInput>
}

export type QueryBedPriceArgs = {
  where?: InputMaybe<BedPriceWhereUniqueInput>
}

export type QueryBedPricesArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<BedPriceScalarFieldEnum>>
  orderBy?: InputMaybe<Array<BedPriceOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<BedPriceWhereInput>
}

export type QueryBuyerArgs = {
  where?: InputMaybe<BuyerWhereUniqueInput>
}

export type QueryBuyersArgs = {
  cursor?: InputMaybe<WhereUniqueInputUid>
  distinct?: InputMaybe<Array<BuyerScalarFieldEnum>>
  orderBy?: InputMaybe<Array<BuyerOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<BuyerWhereInput>
}

export type QueryLocationStatArgs = {
  where?: InputMaybe<LocationStatsWhereUniqueInput>
}

export type QueryLocationStatsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<LocationStatsScalarFieldEnum>>
  orderBy?: InputMaybe<Array<LocationStatsOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<LocationStatsWhereInput>
}

export type QueryMessageArgs = {
  where?: InputMaybe<MessageWhereUniqueInput>
}

export type QueryMessagesArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<MessageWhereInput>
}

export type QueryPropertiesArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<PropertyScalarFieldEnum>>
  orderBy?: InputMaybe<Array<PropertyOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PropertyWhereInput>
}

export type QueryPropertyArgs = {
  where?: InputMaybe<PropertyWhereUniqueInput>
}

export type QuerySellerArgs = {
  where?: InputMaybe<SellerWhereUniqueInput>
}

export type QuerySellersArgs = {
  cursor?: InputMaybe<WhereUniqueInputUid>
  distinct?: InputMaybe<Array<SellerScalarFieldEnum>>
  orderBy?: InputMaybe<Array<SellerOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<SellerWhereInput>
}

export type QueryUserHomeArgs = {
  where?: InputMaybe<UserHomeWhereUniqueInput>
}

export type QueryUserHomesArgs = {
  cursor?: InputMaybe<UserHomeWhereUniqueInput>
  distinct?: InputMaybe<Array<UserHomeScalarFieldEnum>>
  orderBy?: InputMaybe<Array<UserHomeOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<UserHomeWhereInput>
}

export type QueryViewArgs = {
  where?: InputMaybe<ViewWhereUniqueInput>
}

export type QueryViewsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<ViewScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ViewOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ViewWhereInput>
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type Seller = {
  __typename?: 'Seller'
  createdAt: Scalars['DateTime']
  messages: Array<GroupedMessages>
  properties: Array<Property>
  uid: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type SellerOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  messages?: InputMaybe<MessageOrderByRelationAggregateInput>
  properties?: InputMaybe<PropertyOrderByRelationAggregateInput>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type SellerRelationFilter = {
  is?: InputMaybe<SellerWhereInput>
  isNot?: InputMaybe<SellerWhereInput>
}

export enum SellerScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type SellerWhereInput = {
  AND?: InputMaybe<Array<SellerWhereInput>>
  NOT?: InputMaybe<Array<SellerWhereInput>>
  OR?: InputMaybe<Array<SellerWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  messages?: InputMaybe<MessageListRelationFilter>
  properties?: InputMaybe<PropertyListRelationFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type SellerWhereUniqueInput = {
  uid?: InputMaybe<Scalars['String']>
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<Scalars['String']>
  notIn?: InputMaybe<Array<Scalars['String']>>
  startsWith?: InputMaybe<Scalars['String']>
}

export type StringListFilter = {
  equals?: InputMaybe<Array<Scalars['String']>>
  has?: InputMaybe<Scalars['String']>
  hasEvery?: InputMaybe<Array<Scalars['String']>>
  hasSome?: InputMaybe<Array<Scalars['String']>>
  isEmpty?: InputMaybe<Scalars['Boolean']>
}

export enum Style {
  Apartment = 'Apartment',
  Condo = 'Condo',
  Coop = 'Coop',
  FarmRanch = 'FarmRanch',
  LotLand = 'LotLand',
  MobileManufactured = 'MobileManufactured',
  MultiFamily = 'MultiFamily',
  SingleFamilyHome = 'SingleFamilyHome',
  Townhouse = 'Townhouse',
  Unknown = 'Unknown',
}

export type UpdateAgentInput = {
  uid: Scalars['String']
}

export type UpdateBedPriceInput = {
  avg?: InputMaybe<Scalars['Int']>
  beds?: InputMaybe<Scalars['String']>
  count?: InputMaybe<Scalars['Int']>
  id: Scalars['Int']
  locationStatsId?: InputMaybe<Scalars['Int']>
  sqftAvg?: InputMaybe<Scalars['Int']>
}

export type UpdateBuyerInput = {
  uid: Scalars['String']
}

export type UpdateLocationStatsInput = {
  id: Scalars['Int']
  lat?: InputMaybe<Scalars['Int']>
  lng?: InputMaybe<Scalars['Int']>
  priceSqft?: InputMaybe<Scalars['Int']>
  totalHomes?: InputMaybe<Scalars['Int']>
  type?: InputMaybe<LocationStatsType>
}

export type UpdatePropertyInput = {
  address?: InputMaybe<Scalars['String']>
  bath?: InputMaybe<Scalars['Int']>
  beds?: InputMaybe<Scalars['Int']>
  city?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  facts?: InputMaybe<Scalars['String']>
  features?: InputMaybe<Scalars['String']>
  id: Scalars['Int']
  imgs?: InputMaybe<Array<Scalars['String']>>
  lat?: InputMaybe<Scalars['Int']>
  lng?: InputMaybe<Scalars['Int']>
  lotSize?: InputMaybe<Scalars['Int']>
  plan?: InputMaybe<Scalars['Int']>
  price?: InputMaybe<Scalars['Int']>
  priceSqft?: InputMaybe<Scalars['Int']>
  published?: InputMaybe<Scalars['Boolean']>
  sellerUid?: InputMaybe<Scalars['String']>
  sqft?: InputMaybe<Scalars['Int']>
  state?: InputMaybe<Scalars['String']>
  style?: InputMaybe<Style>
  yearBuilt?: InputMaybe<Scalars['Int']>
  zipcode?: InputMaybe<Scalars['String']>
}

export type UpdateSellerInput = {
  uid: Scalars['String']
}

export type UpdateUserHomeInput = {
  buyerUid?: InputMaybe<Scalars['String']>
  buyerUid_propertyId?: InputMaybe<UserHomeBuyerUidPropertyIdCompoundUniqueInput>
  propertyId?: InputMaybe<Scalars['Int']>
  type?: InputMaybe<UserHomeType>
}

export type UpdateViewInput = {
  buyerUid?: InputMaybe<Scalars['String']>
  id: Scalars['Int']
  propertyId?: InputMaybe<Scalars['Int']>
}

export type UserHome = {
  __typename?: 'UserHome'
  buyer: Property
  buyerUid: Scalars['String']
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  property: Property
  propertyId: Scalars['Int']
  type: UserHomeType
  updatedAt: Scalars['DateTime']
}

export type UserHomeBuyerUidPropertyIdCompoundUniqueInput = {
  buyerUid?: InputMaybe<Scalars['String']>
  propertyId?: InputMaybe<Scalars['Int']>
}

export type UserHomeListRelationFilter = {
  every?: InputMaybe<UserHomeWhereInput>
  none?: InputMaybe<UserHomeWhereInput>
  some?: InputMaybe<UserHomeWhereInput>
}

export type UserHomeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type UserHomeOrderByWithRelationInput = {
  buyer?: InputMaybe<BuyerOrderByWithRelationInput>
  buyerUid?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  property?: InputMaybe<PropertyOrderByWithRelationInput>
  propertyId?: InputMaybe<SortOrder>
  type?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum UserHomeScalarFieldEnum {
  BuyerUid = 'buyerUid',
  CreatedAt = 'createdAt',
  PropertyId = 'propertyId',
  Type = 'type',
  UpdatedAt = 'updatedAt',
}

export enum UserHomeType {
  RemovedFromWishlist = 'REMOVED_FROM_WISHLIST',
  Wishlisted = 'WISHLISTED',
}

export type UserHomeWhereInput = {
  AND?: InputMaybe<Array<UserHomeWhereInput>>
  NOT?: InputMaybe<Array<UserHomeWhereInput>>
  OR?: InputMaybe<Array<UserHomeWhereInput>>
  buyer?: InputMaybe<BuyerRelationFilter>
  buyerUid?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  property?: InputMaybe<PropertyRelationFilter>
  propertyId?: InputMaybe<IntFilter>
  type?: InputMaybe<UserHomeType>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type UserHomeWhereUniqueInput = {
  buyerUid_propertyId?: InputMaybe<UserHomeBuyerUidPropertyIdCompoundUniqueInput>
}

export type View = {
  __typename?: 'View'
  buyer: Property
  buyerUid: Scalars['String']
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  property: Property
  propertyId: Scalars['Int']
  updatedAt: Scalars['DateTime']
}

export type ViewListRelationFilter = {
  every?: InputMaybe<ViewWhereInput>
  none?: InputMaybe<ViewWhereInput>
  some?: InputMaybe<ViewWhereInput>
}

export type ViewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ViewOrderByWithRelationInput = {
  buyer?: InputMaybe<BuyerOrderByWithRelationInput>
  buyerUid?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  property?: InputMaybe<PropertyOrderByWithRelationInput>
  propertyId?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum ViewScalarFieldEnum {
  BuyerUid = 'buyerUid',
  CreatedAt = 'createdAt',
  Id = 'id',
  PropertyId = 'propertyId',
  UpdatedAt = 'updatedAt',
}

export type ViewWhereInput = {
  AND?: InputMaybe<Array<ViewWhereInput>>
  NOT?: InputMaybe<Array<ViewWhereInput>>
  OR?: InputMaybe<Array<ViewWhereInput>>
  buyer?: InputMaybe<BuyerRelationFilter>
  buyerUid?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  property?: InputMaybe<PropertyRelationFilter>
  propertyId?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ViewWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type WhereUniqueInputNumber = {
  id?: InputMaybe<Scalars['Int']>
}

export type WhereUniqueInputUid = {
  uid?: InputMaybe<Scalars['String']>
}

export type PropertiesQueryVariables = Exact<{ [key: string]: never }>

export type PropertiesQuery = {
  __typename?: 'Query'
  properties: Array<{
    __typename?: 'Property'
    id: number
    address: string
    bath?: number | null
  }>
}

export type UserHomesQueryVariables = Exact<{
  where?: InputMaybe<UserHomeWhereInput>
  orderBy?: InputMaybe<
    Array<UserHomeOrderByWithRelationInput> | UserHomeOrderByWithRelationInput
  >
  cursor?: InputMaybe<UserHomeWhereUniqueInput>
  take?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  distinct?: InputMaybe<
    Array<UserHomeScalarFieldEnum> | UserHomeScalarFieldEnum
  >
}>

export type UserHomesQuery = {
  __typename?: 'Query'
  userHomes: Array<{ __typename?: 'UserHome'; id: number; propertyId: number }>
}

export const PropertiesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Properties' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'properties' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'bath' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PropertiesQuery, PropertiesQueryVariables>
export const UserHomesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'UserHomes' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'UserHomeWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'UserHomeOrderByWithRelationInput',
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cursor' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'UserHomeWhereUniqueInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'distinct' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'UserHomeScalarFieldEnum' },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userHomes' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cursor' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cursor' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'distinct' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'distinct' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'propertyId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserHomesQuery, UserHomesQueryVariables>
