import React from 'react';
import './TaskItem.css';

function TaskItem({ task, onToggleComplete, onEdit, onDelete }) {
  //handles the edit button click
  const handleEdit = () => {
    onEdit(task);
  };

  //handles the delete button click with confirmation
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${task.name}"?`)) {
      onDelete(task.id);
    }
  };

  //Handles the toggle complete checkbox
  const handleToggleComplete = () => {
    onToggleComplete(task.id);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <div className="task-checkbox">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggleComplete}
            id={`task-${task.id}`}
          />
          <label htmlFor={`task-${task.id}`} className="checkbox-label"></label>
        </div>
        <div className="task-details" onClick={handleEdit}>
          <h3 className={task.completed ? 'completed-text' : ''}>
            {task.name}
          </h3>
          <p className={task.completed ? 'completed-text' : ''}>
            {task.description}
          </p>
        </div>
      </div>
      <div className="task-actions">
        <button
          onClick={handleEdit}
          className="btn btn-edit"
          title="Edit task"
          aria-label="Edit task"
        >
          ✏️ Edit
        </button>
        <button
          onClick={handleDelete}
          className="btn btn-delete"
          title="Delete task"
          aria-label="Delete task"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}
export default TaskItem;