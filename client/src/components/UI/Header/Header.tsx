import cl from './Header.module.scss';
import { Link } from 'react-router-dom';
import Logotype from './logotype.svg';
import Personal from '@/assets/img/personal.svg';

function Header(props: any) {
  return (
    <header className={cl.header}>
      <div className='container'>
        <div className={cl.header__holder}>
          <h3 className={cl.header__name}><Link to='/'><Logotype /></Link></h3>
          <Link className={cl.header__profile} to='/profile'><Personal /></Link>
        </div>
      </div>
    </header>
  );
}

export default Header;