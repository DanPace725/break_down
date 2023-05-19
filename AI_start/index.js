// This code is a React component that renders a form with an input field and a submit button. 
// When the user submits the form, it sends a POST request to the '/api/task' endpoint with the task entered by the user. 
// The response from the server is logged to the console. 

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

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

ReactDOM.render(<App />, document.getElementById('root'));


