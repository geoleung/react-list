import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './components/form';
import ItemList from './components/itemList';
import ResultsList from './components/resultsList';

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [results, setResults] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default: 
        setFilteredTodos(todos)
        break;
    }
  }
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') == null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Search for Clinical Terms</h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText}
        results={results}
        setResults={setResults}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <h3>Search Results</h3>
      <ResultsList 
        setResults={setResults}
        results={results}
        filteredResults={filteredResults}
        setTodos={setTodos} 
        todos={todos}
      />
      <h3>Saved Search List</h3>
      <ItemList 
        setTodos={setTodos} 
        todos={todos} 
        filteredTodos={filteredTodos}
        />
    </div>
  );
}

export default App;
