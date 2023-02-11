import React, { useState } from 'react';
import { CounterWrapper } from './style.js';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
const Counter = (props) => {
  const nav = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('logged-in') ==  undefined)
      nav('/');
  })

  let count = Number(props.cnt);
  
  const decrement = () => {
    if (count <= 0)
      props.upd(0)
    else
      props.upd(count - 1);
  };
  const increment = () => {
    props.upd(count + 1);
  };


  return (
    <>
      <section className="section">
        <CounterWrapper>
          <h2>Contor de probleme</h2>

          <div className="counter">
            <button
              type="button"
              className="counter_btn"
              disabled={count === 0}
              onClick={decrement}
            >
              &#8722;
            </button>

            <h1 className="counter_count">{count}</h1>

            <button
              type="button"
              className="counter_btn"
              onClick={increment}
            >
              &#43;
            </button>
          </div>

          {/* Counter Reset-btn */}
          <button
            type="button"
            className="reset_btn"
            disabled={count === 0}
            onClick={() => { props.upd(0) }}
          >
            Reset
          </button>
        </CounterWrapper>
      </section>
    </>
  );
};

export default Counter;