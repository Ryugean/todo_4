import React from 'react'
import './modal.css'
import { useState } from 'react'

function Modal({ onClose, onAdd, initialTitle = '' }) {

  const [todoTitle, setTodoTitle] = useState(initialTitle)

  const handleClick = () => {
    onAdd(todoTitle);
    setTodoTitle('')
    onClose();
  }

  return (
    <div className='overlay'>
      <div className='modal'>
        <div className='modal-top'>
          <h3>Modal</h3>
          <div className='bitGap'>
            <label>Add Title</label>
            <input
              type='text'
              value={todoTitle}
              defaultValue={initialTitle}
              onChange={(e) => setTodoTitle(e.target.value)}
              placeholder='add todo title here...'
            />
          </div>
        </div>
        <div className='modal-bottom'>
          <button className='button-secondary' onClick={handleClick}>Add Entry</button>
          <button className='button-secondary' onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default Modal