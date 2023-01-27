import './App.css';
import { useState, useEffect, useRef } from 'react';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

const listLocalStorage = () => {
  const storedList = localStorage.getItem('storedList');
  if (storedList) return JSON.parse(localStorage.getItem('storedList'));
  return[];
}

function App() {
  const [todos, setTodos] = useState(listLocalStorage);
  const todoRef = useRef();

  useEffect (() => {
    localStorage.setItem('storedList', JSON.stringify(todos));
  }, [todos]);

  const addTodos = () => {
    const title = todoRef.current.value;
    if (title === '') return;
    setTodos(prevTodos => [...prevTodos, { id: Date.now(), title: title, complete: false }]);
   
    todoRef.current.value = null;
  }

  const toggleTodos = id => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  const removeTodos = (e, id) => {
    e.stopPropagation();
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <>
    <div className="App"></div>
      <header className='header'>
        <h1 className='header__title'>Register New ToDo</h1>
        </header>
        <div className='x'>
        <form className='header__input-form' onSubmit={addTodos}>
          <input ref = {todoRef} type = "text" id='txtTodoItemToAdd' placeholder='New todo here...'/>
          <button type='submit' id='btnAddTodo'> Add  </button>
        </form>
        </div>
      <TodoList todos={todos} toggleTodos={toggleTodos} removeTodos={removeTodos}/>
      <Footer/>
    </>
  );
}

export default App;

