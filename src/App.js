import { useState } from 'react'
import './App.css';
import Button from './UI/Button/Button';
import Modal from './components/Modal/Modal';
import { Link } from 'react-router-dom';

function App() {
  
  let [active, setActive] = useState(false)
  
  return (
    <div>
      <Link to={'/login'}/>
    <Button
     title='Авторизация / Регистрация'
     color={'yellow'}
     onClick={() => setActive(true)}
     />
     <Modal active={active} setActive={setActive}/>
    </div>
  );
}

export default App;
