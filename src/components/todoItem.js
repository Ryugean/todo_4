import React from 'react'
import  './todoItem.css'

const TodoItem = ({ name, onDelete, onUpdate }) => {
  return (
    <div className='todoItem'>
      <div>
        <p>{name}</p>
      </div>
      <div className='spaceClass'>
        <button onClick={onUpdate}>Update</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem
