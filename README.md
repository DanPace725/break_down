# break_down
 Use AI to fight Executive Dysfunction
# AI Task Breakdown

This project is a simple web application that allows users to enter a task and receive a breakdown of the task into simple steps. The application uses a React frontend to render a form for user input and an Express backend to handle API requests. The backend leverages the OpenAI module to generate simple steps for the task and the Supabase module to manage user authentication and store tasks.

## File Structure

- `AI_start/index.js`: This file contains a React component that renders a form for users to enter a task and submit it to the `/api/task` endpoint. The response from the server is logged to the console, and the code uses the `useState` hook and `async/await` to manage the state and handle the fetch request.
- `AI_start/server.js`: This file sets up an Express server that listens on a specified port and uses the `body-parser` middleware to parse incoming requests. It also imports the `openai` and `supabase` modules. When a POST request is made to the `/api/task` endpoint, it extracts the task from the request body, gets the simple steps for the task using the `openai` module, gets the user from the authorization header using the `supabase` module, adds the task and its simple steps to the user's tasks using the `supabase` module, and sends the simple steps as a JSON response.

## Setup

1. Clone the repository.
2. Install the required dependencies by running `npm install` in the project directory.
3. Set up the necessary environment variables for the OpenAI and Supabase modules.
4. Start the development server by running `npm start` in the project directory.

## Usage

1. Open the application in your browser.
2. Enter a task in the input field and click the "Submit" button.
3. The application will send a POST request to the `/api/task` endpoint with the entered task.
4. The server will process the request, generate simple steps for the task using the OpenAI module, and store the task and its simple steps in the user's tasks using the Supabase module.
5. The server will send the simple steps as a JSON response, which will be logged to the console in the frontend.






