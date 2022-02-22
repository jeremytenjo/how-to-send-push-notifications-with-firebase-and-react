import React from 'react'
import ReactDOM from 'react-dom'

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

ReactDOM.render(<App />, document.getElementById('root'))
