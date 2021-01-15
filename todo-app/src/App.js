import React , {useState , useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Akash's Todo list</h1>
      </header>
      <Form  setInputText = {setInputText}/>
      <TodoList />
    </div>
  );
}

export default App;
