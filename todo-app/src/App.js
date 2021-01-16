import React , {useState , useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Akash's Todo list</h1>
      </header>
      <Form 
         todos = {todos}
         setTodos = {setTodos} 
         setInputText = {setInputText}
         inputText = {inputText}
      />
      <TodoList setTodos = {setTodos} todos = {todos}/>
    </div>
  );
}

export default App;
