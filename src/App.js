import { useState } from 'react';
import './App.css';
import Modal from './modal';

function App() {
  
  const [isModalOpen, setModalOpen] = useState(false);
  const [todoTitleInP, setTodoTitleInP] = useState('')
  const [todoDesInP, setTodoDesInP] = useState('')
  const [todoArrayInP, setTodoArrayInP] = useState([])

  const handleSaveData = (title, des) => {
    setTodoTitleInP(title);
    setTodoDesInP(des);
    setTodoArrayInP(todoArrayInP.push([todoTitleInP, todoDesInP]))
    setTodoTitleInP('');
    setTodoDesInP('');
  }

  return (
    <div className='box'>
      {isModalOpen && (
          <Modal onClose={() => setModalOpen(false)} onAdd={handleSaveData}/>
        )}
      <div className='todo-box'>
        <div className='top-box'>
          {todoArrayInP && (todoArrayInP)}
        </div>
        <div className='bottom-box'>
          <button onClick={() => setModalOpen(true)}>Add Todo</button>
        </div>
      </div>
    </div>
  );
}

export default App;
