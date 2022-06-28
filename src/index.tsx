import React from 'react'
import { createRoot } from 'react-dom/client'

import Firebase from './services/firebase/firebase'
import Router from './pages/router'
import Theme from './theme/theme'

function App() {
  return (
    <Firebase>
      <Theme>
        <Router />
      </Theme>
    </Firebase>
  )
}

const container = document.getElementById('root') as any
const root = createRoot(container)

root.render(
  <>
    <App />
  </>,
)
