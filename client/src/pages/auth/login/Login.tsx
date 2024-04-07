import React, { useState } from 'react';
import cl from '../Auth.module.scss'
import { Link } from 'react-router-dom';
import { login } from '@/actions/user';
import { useAppDispatch } from '@/redux/hooks/hooks';
import Google_icon from '@/assets/img/google-icon.svg';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useAppDispatch()

  return (
    <div className={cl.auth}>
      <div className='container'>
        <div className={cl.auth__holder}>
          <h1 className={cl.auth__name}>Login</h1>
          <Link className={cl.auth__google} to='/'><Google_icon />Login with google</Link>
          <p className={cl.auth__or}>or</p>
          <div className={cl.auth__inputs}>
            <input className={cl.auth__input} value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder='Email' />
            <div className={cl.auth__password}>
              <input className={cl.auth__input} value={password} onChange={(e) => {
                setPassword(e.target.value);
              }} type="password" placeholder="Password" />
              <Link className={cl.auth__recovery} to='/login/recovery'>Forgot password</Link>
            </div>
          </div>
          <button className={cl.auth__button} onClick={() => dispatch(login(email, password))}>Login</button>
          <Link className={cl.auth__account} to={'/registration'}>I don't have account</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;