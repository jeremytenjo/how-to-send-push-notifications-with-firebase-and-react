import React from 'react'
import { ReactLocation, Router as ReactLocationRouter } from 'react-location'

import RootLayout from './root.layout'
import HomeRoutes from './HomePage/routes'
import NotFoundPageRoutes from './NotFoundPage/routes'

const location = new ReactLocation()

const routes = [...HomeRoutes, ...NotFoundPageRoutes]

export default function Router() {
  return (
    <RootLayout>
      <ReactLocationRouter location={location} routes={routes} />
    </RootLayout>
  )
}
