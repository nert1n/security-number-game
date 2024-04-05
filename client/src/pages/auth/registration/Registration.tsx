import React, { useState } from 'react';
import cl from '../Auth.module.scss'
import { registration } from '@/actions/user';
import { Link } from 'react-router-dom';

function Registration() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className={cl.auth}>
      <div className='container'>
        <div className={cl.auth__holder}>
          <h1 className={cl.auth__name}>Register profile</h1>
          <div className={cl.auth__inputs}>
            <input className={cl.auth__input}  type="name" placeholder='Login' />
            <input className={cl.auth__input} value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder='Email' />
            <input className={cl.auth__input} value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder='Password' />
            <input className={cl.auth__input} type="password" placeholder='Agree password' />
          </div>
          <button className={cl.auth__button} onClick={() => {registration(email, password)}}>Register</button>
          <Link to={'/login'}>I have account</Link>
        </div>
      </div>
    </div>
  );
}

export default Registration;