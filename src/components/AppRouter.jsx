import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../pages/notFound/NotFound'
import Home from '../pages/home/Home'

import { routes } from './../router/routes'

const AppRouter = () => {
  return (
    <Routes>
        {
            routes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                    exact={route.exact}
                />
            ))
        }
        <Route path='/' element={<Home />} exact={true} />
        <Route path='*' element={<NotFound />} exact={true}/>
    </Routes>
  )
}

export default AppRouter
