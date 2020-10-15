import React,{useState} from 'react'
import "./css/Login.css"
import {Link,useHistory} from "react-router-dom"
import { Button, TextField } from '@material-ui/core'
import { auth } from '../firebase'
function Login() {
    const history=useHistory()
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    console.log(email,password)
    const login=(e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
        .then((auth)=>{
            history.push("/")

        })
        .catch(e=>alert(e.message))
    }

    const register=(e)=>{
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{

        })
        .catch((e)=>alert(e.message))
    }
    return (
        <div className="login">
       
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>
            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                <h5>E-mail</h5>
                    <input type='text'  value={email} onChange={(e)=> setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
                <Button type="submit" 
                onClick={login}
                className="login_signInButton"> Sign In</Button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <Button 
                onClick={register}
                className="login_registerButton">Create Your Amazon Account</Button>
            </div>
        </div>
    )
}

export default Login
