import React, { Fragment } from 'react'
import AppRouter from './router/AppRouter.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Header, Home } from './components/index.js'

function App () {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </Fragment>
  )
}

export default App
