import React, { useState } from 'react';
import cl from './Profile.module.scss';
import Personal from '@/assets/img/personal.svg'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { log_out } from '@/redux/slices/userSlice';

const Profile = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch()

  const [achievements, setAchievements] = useState([
    {name: '1 win', completed: true},
    {name: '5 wins', completed: true},
    {name: '10 wins', completed: false},
    {name: '1 step', completed: true},
    {name: '5 steps', completed: false},
    {name: '10 steps', completed: false},
  ])

  return (
    <div className={cl.profile}>
      <div className='container'>
        <div className={cl.profile__holder}>
          <div className={cl.profile__card}>
            <div className={cl.profile__info}>
              <div className={cl.profile__avatar}>
                <Personal/>
              </div>
              <div className={cl.profile__info_full}>
                <p className={cl.profile__name}>Name: {user.name}</p>
                <p className={cl.profile__email}>Email: {user.email}</p>
                <p className={cl.profile__age}>Age: {user.age}</p>
                <p className={cl.profile__password}>Password: none</p>
              </div>
            </div>
            {user.auth
              ? <button className={cl.profile__auth} onClick={() => {
                dispatch(log_out());
              }}>Log out</button>
              : <Link className={cl.profile__auth} to="/login">Login</Link>
            }
          </div>
          <div className={cl.profile__achievements}>
            <p className={cl.profile__title}>Achievements</p>
            <div className={cl.profile__achievements_holder }>
              {achievements.map((el, index) => (
                <div className={`${cl.profile__achievement} ${el.completed ? cl.active : ''}`} key={index}>
                  <p className={cl.profile__achievement_name}>{el.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={cl.profile__rank}>
            <p className={cl.profile__title}>Rank</p>
            <div className={cl.profile__rank_holder}>
              <div className={cl.profile__cicle}>
                <p className={cl.profile__level}>{user.rank} lvl</p>
              </div>
              <div className={cl.profile__rank_info}>
                <p className={cl.profile__time}>Time: 0s</p>
                <p className={cl.profile__time_least}>Least time: 0s</p>
                <p className={cl.profile__steps}>Steps: 0</p>
                <p className={cl.profile__steps_least}>Least steps: 0</p>
              </div>
            </div>
            <p className={cl.profile__next}>Experience to next level: 100xp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;