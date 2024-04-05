import cl from './Header.module.scss';
import { Link } from 'react-router-dom';

function Header(props: any) {
  return (
    <header className={cl.header}>
      <div className='container'>
        <div className={cl.header__holder}>
          <h3 className={cl.header__name}><Link to={'/'}>Security</Link></h3>
        </div>
      </div>
    </header>
  );
}

export default Header;