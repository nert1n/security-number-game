import cl from './ProfileCard.module.scss';
import img from '@/assets/img/moon.jpg';
import question from '@/assets/img/question.png';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { log_out } from '@/redux/slices/userSlice';
import { Link } from 'react-router-dom';

function ProfileCard() {
  const isLogin = useAppSelector((state) => state.user.auth)
  const dispatch = useAppDispatch()

  return (
    <div className={cl.card}>
      <img className={cl.card__img} src={isLogin ? img : question} alt="Profile img" />
      <div className={cl.card__holder}>
        <div className={cl.card__user}>
          <p className={cl.card__name}>{isLogin ? 'nert1n' : 'Guest'}</p>
          <p className={cl.card__level}>{isLogin ? '1' : '0'} lvl</p>
        </div>
          {isLogin
            ? <button className={cl.card__exit} onClick={() => {dispatch(log_out())}}>Log out</button>
            : <Link className={cl.card__exit} to={'/login'}>Log in</Link>
          }
      </div>
    </div>
  );
}

export default ProfileCard;