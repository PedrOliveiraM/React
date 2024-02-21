import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//CSS
import "./App.css";
import "./components/Var.css";
// Componentes
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";

const App = () => {
  // Estado para armazenar as tarefas
  const [tasks, setTasks] = useState([
  ]);

  // Adicionar nova tarefa
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        id: uuidv4(10),
        title: taskTitle,
        description: "Description 2",
        completed: false,
        value: 0,
        when: "today",
      },
    ];
    setTasks(newTasks);
  };
  // Marcar tarefa como concluída
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });
    setTasks(newTasks);
  };

  //  Deletar tarefa
  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks
                  key={tasks.id}
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskDeletion={handleTaskDeletion}
                />
              </>
            }
          />
          <Route path="/:TaskTitle" exact Component={TaskDetails} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
