import React, { useState, useEffect } from 'react';
import './TaskForm.css';

function TaskForm({ onAddTask, onEditTask, editingTask, onCancelEdit }) {
  //state for form inputs
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [errors, setErrors] = useState({});
  //update form fields when editing a task
  useEffect(() => {
    if (editingTask) {
      setTaskName(editingTask.name);
      setTaskDescription(editingTask.description);
    } else {
      //reset form when not editing
      setTaskName('');
      setTaskDescription('');
    }
    setErrors({});
  }, [editingTask]);

  const validateForm = () => {
    const newErrors = {};
    if (!taskName.trim()) {
      newErrors.name = 'Task name is required';
    }
    if (!taskDescription.trim()) {
      newErrors.description = 'Task description is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const taskData = {
      name: taskName.trim(),
      description: taskDescription.trim(),
    };
    if (editingTask) {
      //edit existing task
      onEditTask(editingTask.id, taskData);
    } else {
      //add new task
      onAddTask(taskData);
    }
    // reset form
    setTaskName('');
    setTaskDescription('');
    setErrors({});
  };

  const handleCancel = () => {
    setTaskName('');
    setTaskDescription('');
    setErrors({});
    onCancelEdit();
  };
  return (
    <div className="task-form-container">
      <h2>{editingTask ? 'Edit Task' : 'Add New Task'}</h2>
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label htmlFor="taskName">Task Name *</label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Enter task name"
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="taskDescription">Description *</label>
          <textarea
            id="taskDescription"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Enter task description"
            rows="4"
            className={errors.description ? 'error' : ''}
          />
          {errors.description && (
            <span className="error-message">{errors.description}</span>
          )}
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {editingTask ? 'Update Task' : 'Add Task'}
          </button>
          {editingTask && (
            <button
              type="button"
              onClick={handleCancel}
              className="btn btn-secondary"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
export default TaskForm;