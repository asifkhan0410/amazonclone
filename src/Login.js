import React, {useState} from 'react'
import './Login.css'
import { Link ,useHistory } from 'react-router-dom'
import { auth } from './firebase';

function Login() {
    const history= useHistory();
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');

    const signIn = e => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error=>alert(error.messgae))
    }
    return (
        <div className="login">
            <Link to='/login'>
                <img 
                className="login_logo"
                src="https://i0.wp.com/freepngimages.com/wp-content/uploads/2016/10/amazon-logo.png?fit=1000%2C527"
                alt=""/>
            </Link>
            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type="submit" onClick={signIn} className="login_signin">Sign In</button>
                </form>
                <p>By Sign in you agree to the Amazon Clone Conditions of use & Sale
                    Please see our Privacy notes, our Cookies Notice and our interest-based Ads Notice.
                </p>
                <button onClick={register} className="login_register">Create Your Account</button>
            </div>            
        </div>
    )
}

export default Login
