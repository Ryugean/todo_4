import React from 'react'
import  './todoItem.css'

const TodoItem = ({ name, onDelete, onUpdate }) => {
  return (
    <div className='todoItem'>
      <div className='spaceClass'>
        <label>
          <input className='strike-box' type='checkbox'/>
          <span className='strike-text'>{name}</span>
        </label>
      </div>
      <div className='spaceClass'>
        <button className='button-secondary' onClick={onUpdate}>Update</button>
        <button className='button-secondary' onClick={onDelete}>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem
