import { useState } from 'react';
import './App.css';
import Modal from './modal';
import TodoItem from './components/todoItem';

function App() {
  
  const [isModalOpen, setModalOpen] = useState(false);
  const [todoArrayInP, setTodoArrayInP] = useState([])

  const handleSaveData = (title) => {
    setTodoArrayInP((prevTodo) => [...prevTodo, title])
  }
  
  const handleDelete = (indextoDelete) => {
    setTodoArrayInP(prev => prev.filter((_, index) => index !== indextoDelete));
  }

  const handleUpdate = (indextoUpdate) => {
    setModalOpen(true);
    <Modal onClose={() => setModalOpen(false)} onAdd={handleSaveData}/>
  }

  return (
    <div className='box'>
      {isModalOpen && (
          <Modal onClose={() => setModalOpen(false)} onAdd={handleSaveData}/>
        )}
      <div className='todo-box'>
        <div className='top-box'>
          {todoArrayInP.map((item, index) => {
            return <TodoItem key={index} name={item} onDelete={()=>{handleDelete(index)}} onUpdate={() => {handleUpdate(index)}}/>
          })}
        </div>
        <div className='bottom-box'>
          <button onClick={() => setModalOpen(true)}>Add Todo</button>
        </div>
      </div>
    </div>
  );
}

export default App;
