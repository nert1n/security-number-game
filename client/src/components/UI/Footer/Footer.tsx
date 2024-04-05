import cl from './Footer.module.scss';

function Footer(props: any) {
  return (
    <footer className={cl.footer}>
      <div className='container'>
        <div className={cl.footer__holder}>
          <p className={cl.footer__creator}>Site created by <a href="https://github.com/nert1n" target="_blank">nert1n</a></p>
          <p className={cl.footer__year}>2024</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;