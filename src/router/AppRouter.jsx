import React, { Fragment} from 'react'
import { Routes, Route } from 'react-router-dom'
import {Home, Details} from './components/index.js'

const AppRouter = () => {
  return (
    <Fragment>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
        </Routes>
    </Fragment>
  )
}

export default AppRouter