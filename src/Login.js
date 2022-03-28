import React, { useState } from 'react'
import "./Login.css"
import {Link, useHistory} from "react-router-dom"
import { auth } from './firebase';



function Login() {

  const history = useHistory();

  const [email,setEmail] =useState('');
  const [password,setPassword] =useState('');
  const signin =e =>{
    e.preventDefault();

    //firebase code

    auth.signInWithEmailAndPassword(email,password)
    .then(auth =>{
      history.push('/');
    })

    .catch(error => alert(error.message));

  }

  const signUp = e =>{
    e.preventDefault();

    

    // more firebase code

    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
      console.log(auth);
      //if user is created successfully then push to home page
      if(auth){
        history.push("/");
      }
    })
    .catch(error => alert(error.message))
  }

  return (
    <div className="login">
        <Link to = "/">

        <img className="login_logo" src="/images/MyAzon.png"/>
        </Link>

        <div className='login_container'>
          <h1 >Sign-in</h1>
          <form>
          <h5>Email</h5>
          <input type="text" value={email} onChange={e => setEmail(
            e.target.value
          )}></input>
          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
          <button type="submit"className='login_signin' onClick={signin}>Sign In</button>
          </form>
          <p>By signing in, you agree to MyAzon's conditions of use</p>
          <button className='login_signup' onClick={signUp}>Don't have an account? Sign Up</button>
        </div>
        </div>
  )
}

export default Login