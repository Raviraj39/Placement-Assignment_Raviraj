import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask('');
  };

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Task" value={task} onChange={(e) => setTask(e.target.value)} />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
