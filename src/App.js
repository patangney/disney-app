import React, { Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Header, Home } from './components/index.js'

function App () {
  return (
    <Fragment>
      <Router>
        <Header />
        <Home />
      </Router>
    </Fragment>
  )
}

export default App
