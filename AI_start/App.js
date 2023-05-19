
// This code is a React component that renders a form for users to submit a task. 
// It uses the useState hook to create a state variable called 'task' and a function called 'setTask' to update the state. 
// The handleSubmit function is called when the form is submitted. 
// It sends a POST request to the '/api/task' endpoint with the task data in the request body. 
// The response is then logged to the console. 

import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>OpenAI Task Breakdown</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your task:
          <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App; 


