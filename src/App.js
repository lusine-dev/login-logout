import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import "./styles/App.css";
import Navbar from "./UI/navbar/Navbar";

function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect( () => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      setIsLoading
    }}>
        <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>

  );
}

export default App;
