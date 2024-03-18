import cl from './Header.module.scss';

function Header(props: any) {
  return (
    <header className={cl.header}>
      <div className='container'>
        <div className={cl.header__holder}>
          <h3 className={cl.header__name}>Security</h3>
        </div>
      </div>
    </header>
  );
}

export default Header;