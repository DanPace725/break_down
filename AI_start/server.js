
// This code sets up an express server that listens on port 3000 or the port specified in the environment variable PORT. 
// It uses the body-parser middleware to parse incoming requests with JSON payloads. 
// It also imports the openai and supabase modules. 
// When a POST request is made to the /api/task endpoint, it extracts the task from the request body, 
// gets the simple steps for the task using the openai module, 
// gets the user from the authorization header using the supabase module, 
// adds the task and its simple steps to the user's tasks using the supabase module, 
// and sends the simple steps as a JSON response. 

const express = require('express'); // import the express module
const bodyParser = require('body-parser'); // import the body-parser module
const openai = require('openai'); // import the openai module
const supabase = require('./supabase'); // import the supabase module

const app = express(); // create an express app
const port = process.env.PORT || 3000; // set the port to the environment variable PORT or 3000

app.use(bodyParser.json()); // use the body-parser middleware to parse incoming requests with JSON payloads
app.use(bodyParser.urlencoded({ extended: true })); // use the body-parser middleware to parse incoming requests with URL-encoded payloads

app.post('/api/task', async (req, res) => { // handle POST requests to the /api/task endpoint
  const { task } = req.body; // extract the task from the request body
  const simpleSteps = await openai.getSimpleSteps(task); // get the simple steps for the task using the openai module
  const user = await supabase.getUser(req.headers.authorization); // get the user from the authorization header using the supabase module
  await supabase.addTask(user.id, task, simpleSteps); // add the task and its simple steps to the user's tasks using the supabase module
  res.json(simpleSteps); // send the simple steps as a JSON response
});

app.listen(port, () => { // start the server
  console.log(`Server listening on port ${port}`);
});


