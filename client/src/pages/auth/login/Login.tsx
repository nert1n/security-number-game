import React, { useState } from 'react';
import cl from '../Auth.module.scss'
import { Link } from 'react-router-dom';
import { login } from '@/actions/user';
import { useAppDispatch } from '@/redux/hooks/hooks';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useAppDispatch()

  return (
    <div className={cl.auth}>
      <div className='container'>
        <div className={cl.auth__holder}>
          <h1 className={cl.auth__name}>Login profile</h1>
          <div className={cl.auth__inputs}>
            <input className={cl.auth__input} value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder='Email' />
            <input className={cl.auth__input} value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder='Password' />
          </div>
          <button className={cl.auth__button} onClick={() => dispatch(login(email, password))}>Login</button>
          <Link to={'/registration'}>I don't have account</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;