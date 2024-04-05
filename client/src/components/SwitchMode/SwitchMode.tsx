import cl from './SwitchMode.module.scss';

function SwitchMode() {
  return (
    <div className={cl.mode}>
      <p className={cl.mode__name}>Mode</p>
      <div className={cl.mode__holder}>
        <div className={cl.mode__subholder}>
          <input className={cl.mode__input} type="radio" id="default" name="mode"/>
          <label className={cl.mode__label} htmlFor="default">Default calculator</label>
        </div>
        <div className={cl.mode__subholder}>
          <input className={cl.mode__input} type="radio" id="time" name="mode" />
          <label className={cl.mode__label} htmlFor="time">Time game</label>
        </div>
        <div className={cl.mode__subholder}>
          <input className={cl.mode__input} type="radio" id="steps" name="mode" />
          <label className={cl.mode__label} htmlFor="steps">Steps game</label>
        </div>
      </div>
    </div>
  );
}

export default SwitchMode;