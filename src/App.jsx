import React, { useEffect, useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios'; 

import './App.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskDetails from './components/TaskDetails';
import Task from './components/Task';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Ler livros",
      completed: true,
    },
    {
      id: "2",
      title: "Almoçar com a família",
      completed: false,
    },
    {
      id: "3",
      title: "Ser um grande líder",
      completed: false,
    },
  ]);

  useEffect(()=>{
    const fetchTasks = async () =>{
      const {data} = await axios.post("https://jsonplaceholder.cypress.io/todos?_limit=10");

      setTasks(data);
    }
  }, []);
  
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return {... task, completed: !task.completed}

      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }
  ];

  setTasks(newTasks);
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasks(newTasks);
  }

  return (
    <Router>
      <div className='container'>
        <Header />
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} 
          handleTaskClick={handleTaskClick} 
          handleTaskDeletion={handleTaskDeletion} />
      </div>
    </Router>
  )};

export default App;