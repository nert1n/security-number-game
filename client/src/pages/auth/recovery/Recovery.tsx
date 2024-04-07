import React from 'react';
import cl from '@/pages/auth/Auth.module.scss';
import { Link } from 'react-router-dom';

const Recovery = () => {
  return (
    <div className={cl.auth}>
      <div className='container'>
        <div className={cl.auth__holder}>
          <h1 className={cl.auth__name}>Recovery password</h1>
          <div className={cl.auth__inputs}>
            <input className={cl.auth__input} type="email" placeholder="Email" />
          </div>
          <Link className={cl.auth__button} to='/'>Recovery my password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Recovery;