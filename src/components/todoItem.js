import React from 'react'
import  './todoItem.css'

const TodoItem = ({ name, onDelete, onUpdate }) => {
  return (
    <div className='todoItem'>
      <div>
        <label>
          <input className='strike-box' type='checkbox'/>
          <span className='strike-text'>{name}</span>
        </label>
      </div>
      <div className='spaceClass'>
        <button onClick={onUpdate}>Update</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem
