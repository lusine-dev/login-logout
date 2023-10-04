import React from "react";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../context";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="write your login" />
                <MyInput type="password" placeholder="write your password" />
                <MyButton>Login</MyButton>
            </form>
        </div>
    )
}

export default Login;