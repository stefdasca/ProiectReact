import { Routes, Route } from 'react-router-dom';
import Home from './homepage/Home';
import Counter from './projects/counter/Counter';
import Tips from './projects/tips/Tips';
import Tabs from './projects/tabs/Tabs';
import Csl from './projects/cls/Csl';
import SiteuriInfo from './projects/siteuriInfo/SiteuriInfo';
import SiteuriInfo2 from './projects/siteuriInfo2/SiteuriInfo';
import Sfaturi from './projects/sfaturi/Sfaturi';
import Login from './homepage/Login'
import Register from './homepage/Register'
import { useState } from 'react';

function App() {
  let count, setCount;
  let value;
  if (localStorage.getItem('count') == undefined || Number(localStorage.getItem('count')) == NaN)
    value = 0;
  else
    value = Number(localStorage.getItem('count'));
  [count, setCount] = useState(value);
  const updateCount = (value) => {
    setCount(value);
    localStorage.setItem('count', value);
  }


  let opened, setOpener;
  if (localStorage.getItem('position') == undefined || Number(localStorage.getItem('position')) == NaN)
    value = 3;
  else
    value = Number(localStorage.getItem('position'));

  [opened, setOpener] = useState(value);
  const updateOpened = (value) => {
    setOpener(value);
    localStorage.setItem('position', value);
  }

  let active, setActive;
  if (localStorage.getItem('active') == undefined || Number(localStorage.getItem('active')) == NaN)
    value = 1;
  else
    value = Number(localStorage.getItem('active'));

  [active, setActive] = useState(value);
  const updateActive = (value) => {
    setActive(value);
    localStorage.setItem('active', value);
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path='homepage' element={<Home />} />
        <Route path='counter' element={<Counter cnt={count} upd={updateCount} />} />
        <Route path='tips' element={<Tips />} />
        <Route path='tabs' element={<Tabs upd={updateActive} active={active} />} />
        <Route path='csl' element={<Csl />} />
        <Route path='siteuriInfo' element={<SiteuriInfo />} />
        <Route path='siteuriInfo2' element={<SiteuriInfo2 />} />
        <Route path='sfaturi' element={<Sfaturi value={opened} upd={updateOpened} />} />
      </Routes>
    </>
  );
}

export default App;
