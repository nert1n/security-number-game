import React, { useState } from 'react';
import cl from './Calculator.module.scss';

function Calculator() {
  const [summa, setSumma] = useState('0')
  const [operation, setOperation] = useState(false)
  let arraySumma = summa.split('')
  function addOperation(e: any) {
    if (operation == false) {
      if (arraySumma[arraySumma.length - 1] != e.target.innerText) {
        setOperation(true)
        setSumma(summa + e.target.innerText)
      }
    }
  }

  function number(e: any) {
    if (summa != '0') {
      setSumma(summa + e.target.innerText)
    } else {
      setSumma(e.target.innerText)
    }
    setOperation(false)
  }

  function deleteLatest() {
    arraySumma.splice(-1, 1);
    setSumma(arraySumma.join(''))
  }

  function equals() {
    if (!operation) {
      setSumma(eval(summa).toString())
    } else {
      deleteLatest()
      setOperation(false)
    }
  }

  return (
    <div className={cl.calculator}>
      <p className={cl.calculator__input}>{summa}</p>
      <div className={cl.calculator__operations}>
        <div className={cl.calculator__num}>
          <button className={cl.calculator__button}>(</button>
          <button className={cl.calculator__button}>)</button>
          <button className={`${cl.calculator__button} ${cl.calculator__button_delete}`} onClick={deleteLatest}>delete</button>
        </div>
        <div className={cl.calculator__num}>
          <button className={cl.calculator__button} onClick={number}>7</button>
          <button className={cl.calculator__button} onClick={number}>8</button>
          <button className={cl.calculator__button} onClick={number}>9</button>
          <button className={cl.calculator__button} onClick={addOperation}>/</button>
        </div>
        <div className={cl.calculator__num}>
          <button className={cl.calculator__button} onClick={number}>4</button>
          <button className={cl.calculator__button} onClick={number}>5</button>
          <button className={cl.calculator__button} onClick={number}>6</button>
          <button className={cl.calculator__button} onClick={addOperation}>*</button>
        </div>
        <div className={cl.calculator__num}>
          <button className={cl.calculator__button} onClick={number}>1</button>
          <button className={cl.calculator__button} onClick={number}>2</button>
          <button className={cl.calculator__button} onClick={number}>3</button>
          <button className={cl.calculator__button} onClick={addOperation}>-</button>
        </div>
        <div className={cl.calculator__num}>
          <button className={cl.calculator__button} onClick={number}>0</button>
          <button className={cl.calculator__button} onClick={addOperation}>.</button>
          <button className={`${cl.calculator__button} ${cl.calculator__button_equals}`} onClick={equals}>=</button>
          <button className={cl.calculator__button} onClick={addOperation}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;