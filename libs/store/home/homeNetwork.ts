import { useEffect } from 'react'
import {
  usePropertiesQuery,
  useSearchPropertiesDetailedQuery,
  useLocationStatQuery,
  SortOrder,
  useLocationStatsQuery,
} from '@zillow-org/network/src/generated'
import { useAppDispatch, useAppSelector } from '..'

import {
  setCities,
  setHomes,
  setStates,
  selectCitiesFilters,
  selectHomeFilters,
  selectStatesFilters,
  setHomesDetailed,
} from './homeSlice'

export const useFetchHomesMap = () => {
  const dispatch = useAppDispatch()
  const filterVariables = useAppSelector(selectHomeFilters)

  const { data, loading, error } = usePropertiesQuery({
    variables: filterVariables,
  })

  useEffect(() => {
    dispatch(setHomes({ data, loading, error }))
  }, [data, dispatch, error, loading])
}

export const useFetchCitiesMap = () => {
  const dispatch = useAppDispatch()
  const filterVariables = useAppSelector(selectCitiesFilters)

  const { data, loading, error } = useLocationStatsQuery({
    variables: filterVariables,
  })

  useEffect(() => {
    dispatch(setCities({ data, loading, error }))
  }, [data, dispatch, error, loading])
}

export const useFetchStatesMap = () => {
  const dispatch = useAppDispatch()
  const filterVariables = useAppSelector(selectStatesFilters)

  const { data, loading, error } = useLocationStatsQuery({
    variables: filterVariables,
  })

  useEffect(() => {
    dispatch(setStates({ data, loading, error }))
  }, [data, dispatch, error, loading])
}

export const useGetHighlightedHomeData = (
  highlightedHomeId: number | null | undefined,
) => {
  const highlightedHomeDetails = usePropertiesQuery({
    variables: {},
  })

  return highlightedHomeDetails
}

export const useGetHighlightedRegionData = (
  highlightedRegionId: number | null | undefined,
) => {
  const highlightedRegionDetails = useLocationStatQuery({
    variables: {
      where: {
        id: highlightedRegionId,
      },
    },
  })
  return highlightedRegionDetails
}

export const useHomesDetailed = () => {
  const variables = useAppSelector(selectHomeFilters)
  const { data, loading, error } = useSearchPropertiesDetailedQuery({
    variables: {
      ...variables,
      orderBy: {
        plan: SortOrder.Desc,
      },
    },
  })

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setHomesDetailed({ data, loading, error }))
  }, [data, dispatch, error, loading])
}
