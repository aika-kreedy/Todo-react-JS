import React from 'react'

export default function Todo({todo, toggleTodos, removeTodos}) {

  const displayButton = (isDone, id) => {
    if (isDone) return <button className='todo__button--remove' onClick={(e) => removeTodos(e, id)}>Remove </button>
    return;
  }

  return (
    <li onClick={() => toggleTodos(todo.id)} checked={todo.complete} 
        className={todo.complete ? 'todo--completed' : 'todo--not-completed'}>
        <p className='todo--toggle-completed'>{todo.title}</p>
        {displayButton(todo.complete, todo.id)}
    </li>
  )
}
