// This code imports the createClient function from the Supabase library and sets the Supabase URL and key using environment variables. 
// It then defines two async functions: getUser and addTask. 
// getUser takes an authorization header, extracts the token, and uses it to retrieve the user object from Supabase. 
// addTask takes a user ID, task, and simpleSteps array, and inserts a new task object into the 'tasks' table in Supabase. 

const { createClient } = require('@supabase/supabase-js');

// Set Supabase URL and key using environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

// Get user object from Supabase using authorization header
async function getUser(authorizationHeader) {
  const token = authorizationHeader.split(' ')[1];
  const { user } = await supabase.auth.api.getUser(token);
  return user;
}

// Insert new task object into 'tasks' table in Supabase
async function addTask(userId, task, simpleSteps) {
  await supabase.from('tasks').insert([{ user_id: userId, task, simple_steps: JSON.stringify(simpleSteps) }]);
}

module.exports = { getUser, addTask }; 


