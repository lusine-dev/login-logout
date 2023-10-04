import React  from "react"
import { Routes, Route } from "react-router"
import { useContext } from "react/cjs/react.development"
import { AuthContext } from "../context"
import { privateRoutes, publicRoutes } from "../router/routes"
import Loader from "../UI/loader/Loader"

const AppRouter = () => {

  const {isAuth, isLoading} = useContext(AuthContext)

  if(isLoading) {
    return <Loader />
  }

  return (
      isAuth ?
        <Routes>
          {privateRoutes.map(route => 
            <Route 
              element={<route.element />} 
              path={route.path}
              exact={route.exact}
              key={route.path}
            />
          )}
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route => 
          <Route 
            element={<route.element />} 
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        )}
      </Routes>
    )
}

export default AppRouter;