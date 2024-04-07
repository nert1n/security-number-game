import React from 'react';
import cl from '@/pages/auth/Auth.module.scss';
import { Link } from 'react-router-dom';

const ConfirmReg = () => {
  return (
    <div className={cl.auth}>
      <div className='container'>
        <div className={cl.auth__holder}>
          <h1 className={cl.auth__name}>Confirm registration</h1>
          <p className={cl.auth__or}>A code has been sent to your email, please enter it here to confirm your registration.</p>
          <div className={cl.auth__inputs}>
            <input className={cl.auth__input} type="code" placeholder="Code" />
          </div>
          <Link className={cl.auth__button} to='/'>Confirm</Link>
          <button className={cl.auth__account}>Send the code again in 2:59m</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmReg;