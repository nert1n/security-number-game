import cl from './Main.module.scss';
import SwitchMode from '@/components/SwitchMode/SwitchMode';
import Calculator from '@/components/Calculator/Calculator';

export default function Main() {
    return (
        <main className={cl.main}>
            <div className='container'>
                <div className={cl.main__holder}>
                  <div className={cl.main__left}>
                    <div className={cl.main__left_profile}></div>
                    <SwitchMode/>
                  </div>
                  <div className={cl.main__center}>
                    <Calculator/>
                  </div>
                  <div className={cl.main__right}>
                    right
                  </div>
                </div>
            </div>
        </main>
    )
}
