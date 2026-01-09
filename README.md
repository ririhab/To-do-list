# To-Do List Application

A modern, feature-rich To-Do List application built with React that demonstrates state management, form validation, and browser storage integration.

## Features

- ✅ **Add Tasks**: Create new tasks with name and description
- ✏️ **Edit Tasks**: Click on any task to edit its details
- 🗑️ **Delete Tasks**: Remove tasks with confirmation prompt
- ✓ **Mark Complete**: Toggle task completion status
- 🔍 **Filter Tasks**: View all, active, or completed tasks
- 💾 **Persistent Storage**: Tasks are automatically saved to browser's localStorage
- 🎨 **Modern UI**: Beautiful, responsive design with smooth animations
- ✅ **Form Validation**: Ensures both task name and description are provided

## Project Structure

```
src/
├── components/
│   ├── TaskForm.js       # Form component for adding/editing tasks
│   ├── TaskForm.css      # Styles for the task form
│   ├── TaskItem.js       # Individual task item component
│   ├── TaskItem.css      # Styles for task items
│   ├── TaskList.js       # List component with filtering
│   └── TaskList.css      # Styles for the task list
├── App.js                # Main application component with state management
├── App.css               # Main application styles
├── index.js              # Application entry point
└── index.css             # Global styles
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd todolist
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

The application will automatically reload when you make changes to the code.

## Usage

### Adding a Task

1. Enter a task name in the "Task Name" field
2. Enter a task description in the "Description" field
3. Click "Add Task" button
4. Both fields are required (form validation will prevent submission if empty)

### Editing a Task

1. Click on any task or click the "Edit" button
2. The form will be pre-filled with the task's current details
3. Modify the task name or description
4. Click "Update Task" to save changes or "Cancel" to discard

### Completing a Task

- Click the checkbox next to a task to mark it as completed
- Completed tasks are visually distinguished with a strikethrough and different styling

### Deleting a Task

1. Click the "Delete" button on any task
2. Confirm the deletion in the prompt dialog
3. The task will be permanently removed

### Filtering Tasks

Use the filter buttons at the top of the task list:
- **All**: Shows all tasks
- **Active**: Shows only incomplete tasks
- **Completed**: Shows only completed tasks

Each filter button displays the count of tasks in that category.

## Browser Storage

The application uses **localStorage** to persist tasks between sessions. This means:
- Your tasks are automatically saved when you add, edit, delete, or complete them
- Tasks will be restored when you reload the page or return to the application
- Data is stored locally in your browser (no server required)

## Technologies Used

- **React 19.2.3**: UI library for building the component-based interface
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **localStorage API**: Browser storage for data persistence

## Code Structure

The application follows a component-based architecture:

- **App.js**: Manages global state, handles CRUD operations, and localStorage integration
- **TaskForm.js**: Handles form input, validation, and submission for adding/editing tasks
- **TaskItem.js**: Displays individual tasks with actions (edit, delete, complete)
- **TaskList.js**: Manages task display and filtering functionality

Each component includes:
- Comprehensive comments explaining functionality
- Proper prop validation
- Responsive design considerations
- Accessibility features

## Additional Considerations

- **Responsive Design**: The application is fully responsive and works on desktop, tablet, and mobile devices
- **Accessibility**: Form inputs have proper labels, buttons have aria-labels, and the UI is keyboard navigable
- **Error Handling**: Form validation prevents invalid submissions
- **User Experience**: Smooth animations, hover effects, and visual feedback enhance usability
