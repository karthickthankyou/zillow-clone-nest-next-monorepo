import React from 'react'
import { MapProvider as ReactMapGlProvider } from 'react-map-gl'

export const MapProvider = ({
  children,
  className,
}: {
  children: any
  className?: string
}) => (
  <ReactMapGlProvider>
    <div className={className}>{children}</div>
  </ReactMapGlProvider>
)
