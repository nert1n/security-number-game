import cl from './ProfileCard.module.scss';
import img from '@/assets/img/moon.jpg';

function ProfileCard() {
  return (
    <div className={cl.card}>
      <img className={cl.card__img} src={img} alt="Profile img" />
      <div className={cl.card__holder}>
        <div className={cl.card__user}>
          <p className={cl.card__name}>nert1n</p>
          <p className={cl.card__level}>1 lvl</p>
        </div>
        <button className={cl.card__exit}>
          Log out
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;