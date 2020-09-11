import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth, fDatabase } from './firebase';

function Login() {

    const history = useHistory();

    //const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();        
        
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })        
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();        

        auth
        .createUserWithEmailAndPassword(email, password)                
        .then((auth) => {
            console.log(auth);
                if (auth){
                    //writeUserData()
                    history.push('/')
                }
            })        
        .catch(error => alert(error.message))
    }

    //TODO: pegar nome do user e exibir no Header ao invés do email! 

    // function writeUserData(userId, name, email) {
    //     fDatabase
    //     .ref('users/' + userId).set({
    //         username: name,
    //         email: email
    //     });
    // }

    return (
        <div className='login'>
            
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt=''
                />
            </Link>      

            <div className="login__container">
                <h1>Sign In</h1>
                
                <form>
                    {/* 
                    <h5>Name</h5>
                    <input type='text'value={name} onChange={e => setName(e.target.value)}/>                    
                    */}

                    <h5>Email</h5>
                    <input type='text'value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password'value={password} onChange={e => setPassword(e.target.value)}/>

                    <button className='login__signInButton' type='submit' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    blablabla conditions & BS
                </p>

                <button className='login__registerButton' onClick={register}>Create your Account</button>

            </div>      

        </div>
    )
}

export default Login
