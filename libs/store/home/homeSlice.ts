/* eslint-disable no-param-reassign */
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import produce, { castDraft } from 'immer'
import { filterDefaultValues } from '@zillow-org/ui/src/organisms/SearchHomesFilter/filterUtils'
import {
  PropertyQuery,
  PropertiesQuery,
  PropertiesQueryVariables,
  LocationStatsQuery,
  LocationStatQuery,
  LocationStatsQueryVariables,
  InputMaybe,
  PropertyWhereInput,
  SearchPropertiesDetailedQuery,
  LocationStatsWhereInput,
  LocationStatsType,
  UserHomeType,
  Style,
} from '@zillow-org/network/src/generated'
import { QueryResultPartial } from '@zillow-org/network'
import { RootState } from '..'
import { showCities, showHomes, showStates } from '@zillow-org/types/static'

export interface HomeSliceType {
  homesFilter?: Partial<typeof filterDefaultValues>
  homes: QueryResultPartial<PropertiesQuery, object>
  homesDetailed: QueryResultPartial<SearchPropertiesDetailedQuery, object>
  cities: QueryResultPartial<LocationStatsQuery, object>
  states: QueryResultPartial<LocationStatsQuery, object>
  hoverStates: {
    highlightedHomeId?: PropertiesQuery['properties'][0]['id'] | null
    highlightedCityId?: LocationStatQuery['locationStat']['id'] | null
    highlightedStateId?: LocationStatQuery['locationStat']['id'] | null
    highlightedHome?: PropertyQuery['property'] | null
    highlightedCity?: LocationStatQuery['locationStat'] | null
    highlightedState?: LocationStatQuery['locationStat'] | null
  }
}
export const initialState: HomeSliceType = {
  homesFilter: {},
  homes: {
    loading: false,
  },
  homesDetailed: {
    loading: false,
  },
  cities: {
    loading: false,
  },
  states: {
    loading: false,
  },
  hoverStates: {
    highlightedHomeId: null,
    highlightedCityId: null,
    highlightedStateId: null,
    highlightedHome: null,
    highlightedCity: null,
    highlightedState: null,
  },
}

// Find this link to know how we avoided putting ts-ignore
// https://immerjs.github.io/immer/typescript/

const homeSlice = createSlice({
  name: 'Home',
  initialState,
  reducers: {
    setHomesFilter: (
      state,
      action: PayloadAction<HomeSliceType['homesFilter']>,
    ) => {
      state.homesFilter = action.payload
    },
    setHomes: (state, action: PayloadAction<HomeSliceType['homes']>) => {
      state.homes = castDraft(action.payload)
    },
    setHomesDetailed: (
      state,
      action: PayloadAction<HomeSliceType['homesDetailed']>,
    ) => {
      state.homesDetailed = castDraft(action.payload)
    },
    setCities: (state, action: PayloadAction<HomeSliceType['cities']>) => {
      state.cities = castDraft(action.payload)
    },
    setStates: (state, action: PayloadAction<HomeSliceType['states']>) => {
      state.states = castDraft(action.payload)
    },
    setHighlightedHomeId: (
      state,
      action: PayloadAction<HomeSliceType['hoverStates']['highlightedHomeId']>,
    ) => {
      state.hoverStates.highlightedHomeId = action.payload
    },
    setHighlightedCityId: (
      state,
      action: PayloadAction<HomeSliceType['hoverStates']['highlightedCityId']>,
    ) => {
      state.hoverStates.highlightedCityId = action.payload
    },
    setHighlightedStateId: (
      state,
      action: PayloadAction<HomeSliceType['hoverStates']['highlightedStateId']>,
    ) => {
      state.hoverStates.highlightedStateId = action.payload
    },
  },
})

export const {
  setHomesFilter,
  setHomes,
  setHomesDetailed,
  setCities,
  setStates,
  setHighlightedHomeId,
  setHighlightedCityId,
  setHighlightedStateId,
} = homeSlice.actions

/** Selectors */
export const selectHomesMap = (state: RootState) => state.home.homes
export const selectHomesDetailed = (state: RootState) =>
  state.home.homesDetailed
export const selectCitiesMap = (state: RootState) => state.home.cities
export const selectStatesMap = (state: RootState) => state.home.states

export const selectMapFetching = createSelector(
  [selectHomesMap, selectCitiesMap, selectStatesMap],
  (homes, cities, states) => homes.loading || cities.loading || states.loading,
)

type HomesDetailedType = NonNullable<
  HomeSliceType['homesDetailed']['data']
>['properties'][number] & { wishlisted?: boolean }

export type HomesWishlisted = HomeSliceType['homesDetailed'] & {
  data?:
    | (Omit<HomeSliceType['homesDetailed']['data'], 'homes'> & {
        homes: Array<HomesDetailedType>
      })
    | undefined
}

export const selectMapError = createSelector(
  [selectHomesMap, selectCitiesMap, selectStatesMap],
  (homes, cities, states) => homes.error || cities.error || states.error,
)

export const selectHighlightedHomeId = (state: RootState) =>
  state.home.hoverStates.highlightedHomeId
export const selectHighlightedCityId = (state: RootState) =>
  state.home.hoverStates.highlightedCityId
export const selectHighlightedStateId = (state: RootState) =>
  state.home.hoverStates.highlightedStateId

export const selectMapWhere = (state: RootState): PropertyWhereInput => {
  const [ne, sw] = state.map.bounds as [number, number][]
  return {
    lat: {
      gt: ne[1],
      lt: sw[1],
    },
    lng: {
      gt: ne[0],
      lt: sw[0],
    },
  }
}

export const selectHomeFilters = createSelector(
  [
    selectMapWhere,
    (state: RootState) => state.map.viewport.zoom,
    (state: RootState) => state.home.homesFilter,
  ],
  (whereCondition, zoom, filter): Omit<PropertiesQueryVariables, 'query'> => {
    const { beds, bath, sqft, price, yearBuilt, homeType } = filter!
    const bedsInt = Number.isNaN(+beds!) ? 0 : +beds!
    const bathInt = Number.isNaN(+bath!) ? 0 : +bath!

    const homesWhere: PropertyWhereInput = {
      ...whereCondition,
    }

    if (beds) homesWhere.beds = { gte: bedsInt }
    if (bath) homesWhere.bath = { gte: bathInt }
    if (sqft) homesWhere.sqft = { gte: sqft[0], lte: sqft[1] }
    if (price) homesWhere.price = { gte: price[0], lte: price[1] }
    if (yearBuilt)
      homesWhere.yearBuilt = { gte: yearBuilt[0], lte: yearBuilt[1] }
    if (homeType) homesWhere.style = { in: homeType }

    const homesLimit = showHomes(zoom) ? 50 : 0

    return { where: homesWhere, take: homesLimit }
  },
)

export const selectCitiesFilters = createSelector(
  [selectMapWhere, (state: RootState) => state.map.viewport.zoom],
  (whereCondition, zoom): Omit<LocationStatsQueryVariables, 'query'> => {
    const where: InputMaybe<LocationStatsWhereInput> = {
      lat: whereCondition.lat,
      lng: whereCondition.lng,
      type: LocationStatsType.City,
      totalHomes: { gt: 5 },
    }

    return {
      where,
      take: showCities(zoom) ? 50 : 0,
    }
  },
)

export const selectStatesFilters = createSelector(
  [selectMapWhere, (state: RootState) => state.map.viewport.zoom],
  (whereCondition, zoom): Omit<LocationStatsQueryVariables, 'query'> => {
    const where: InputMaybe<LocationStatsWhereInput> = {
      lat: whereCondition.lat,
      lng: whereCondition.lng,
      type: LocationStatsType.State,
    }

    return {
      where,
      take: showStates(zoom) ? 50 : 0,
    }
  },
)

export default homeSlice.reducer
