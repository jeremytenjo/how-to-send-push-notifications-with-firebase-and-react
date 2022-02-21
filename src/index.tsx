import React from 'react'
import ReactDOM from 'react-dom'
import { UseInstallPromptProvider } from '@useweb/use-install-prompt'

import Firebase from './services/firebase/firebase'
import Router from './pages/router'
import Theme from './theme/theme'

function App() {
  return (
    <UseInstallPromptProvider>
      <Firebase>
        <Theme>
          <Router />
        </Theme>
      </Firebase>
    </UseInstallPromptProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
