import React, { useState } from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList({ tasks, onToggleComplete, onEdit, onDelete }) {
  //state for filter selection
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'
  const getFilteredTasks = () => {
    switch (filter) {
      case 'active':
        return tasks.filter((task) => !task.completed);
      case 'completed':
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  };
  const filteredTasks = getFilteredTasks();
  const getTaskCounts = () => {
    return {
      all: tasks.length,
      active: tasks.filter((task) => !task.completed).length,
      completed: tasks.filter((task) => task.completed).length,
    };
  };
  const counts = getTaskCounts();

  return (
    <div className="task-list-container">
      <div className="task-list-header">
        <h2>Your Tasks</h2>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All ({counts.all})
          </button>
          <button
            className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
            onClick={() => setFilter('active')}
          >
            Active ({counts.active})
          </button>
          <button
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed ({counts.completed})
          </button>
        </div>
      </div>
      {filteredTasks.length === 0 ? (
        <div className="empty-state">
          <p>
            {filter === 'all'
              ? "You don't have any tasks yet. Add one above!"
              : filter === 'active'
              ? 'No active tasks. Great job!'
              : 'No completed tasks yet.'}
          </p>
        </div>
      ) : (
        <div className="task-list">
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleComplete={onToggleComplete}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default TaskList;