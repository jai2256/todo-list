import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
//import data from "./data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';

import './App.css';


function App() {
  const [toDoList, setToDoList] = useState([]);


  useEffect(() => {
    const getTodosFromLocalStorage = () => {
      const storedTodos = localStorage.getItem('toDoList');
      if (storedTodos) {
        setToDoList(JSON.parse(storedTodos));
      }
      //console.log(toDoList)
    };
    getTodosFromLocalStorage();
  }, []);



  //adding the task to the list
  const addTask = (userInput) => {
    let copy;
    const add = () => {
      //let copy = [...toDoList];
      copy = JSON.parse(JSON.stringify(toDoList))
      copy.push({ id: ++toDoList.length, task: userInput, complete: false })
      //copy = [...copy, { id: toDoList.length ++,task: userInput, complete: false }]
      setToDoList(copy);
    }
    console.log("Before",toDoList)
    add();
    console.log("After",toDoList)
    localStorage.setItem('toDoList', JSON.stringify(copy));
    console.log(JSON.parse(localStorage.getItem('toDoList')));
  }

  //for toggling; for strikethrough (completion of task)
  const handleToggle = (id) => {
    console.log(id)
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task };
    });
    setToDoList(mapped);
    localStorage.setItem('toDoList', JSON.stringify(mapped))
  }

  //deleting, filtering if the task is completed. if val===true turns into false (vice-versa)
  const handleFilter = (id) => {
    console.log(id, " 999")
    let filtered = toDoList.filter(task => {
      return task.id !== id
    });
    console.log("Filtered arr", filtered)
    setToDoList(filtered);
    console.log("Before",JSON.parse(localStorage.getItem('toDoList')));
    localStorage.setItem('toDoList', JSON.stringify(filtered))
    console.log("After",JSON.parse(localStorage.getItem('toDoList')));
  }

  const clearData = () => {
    setToDoList([]);
    localStorage.setItem('toDoList', JSON.stringify([]))
  }
  return (
    <div className="App">
      <Header />
      <Container maxWidth="sm">
      <Paper elevation={3} style={{paddingTop: 10, paddingBottom: 10}}>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} clearData={clearData} />

      <ToDoForm addTask={addTask} />
      </Paper>
      </Container>
    </div>
    
    
  );
}

export default App;