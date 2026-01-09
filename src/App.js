import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  //state for managing tasks
  const [tasks, setTasks] = useState([]);
  //state for tracking which task is being edited
  const [editingTask, setEditingTask] = useState(null);

  //load tasks from localStorage 
  useEffect(() => {
    const savedTasks = localStorage.getItem('todoTasks');
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks));
      } catch (error) {
        console.error('Error loading tasks from localStorage:', error);
      }
    }
  }, []);

  //save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (taskData) => {
    const newTask = {
      id: Date.now(), 
      name: taskData.name,
      description: taskData.description,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks([...tasks, newTask]);
  };

  const handleEditTask = (taskId, taskData) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, name: taskData.name, description: taskData.description }
          : task
      )
    );
    setEditingTask(null);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    //if the deleted task was being edited, cancel editing
    if (editingTask && editingTask.id === taskId) {
      setEditingTask(null);
    }
  };

  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleStartEdit = (task) => {
    setEditingTask(task);
  };

  //Cancels the editing mode
  
  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>My To-Do List</h1>
        <p className="app-subtitle">Getting things done!</p>
      </header>

      <main className="app-main">
        <TaskForm
          onAddTask={handleAddTask}
          onEditTask={handleEditTask}
          editingTask={editingTask}
          onCancelEdit={handleCancelEdit}
        />

        <TaskList
          tasks={tasks}
          onToggleComplete={handleToggleComplete}
          onEdit={handleStartEdit}
          onDelete={handleDeleteTask}
        />
      </main>

      <footer className="app-footer">
        <p></p>
      </footer>
    </div>
  );
}

export default App;