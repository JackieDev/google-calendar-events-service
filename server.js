const express = require('express');

const app = express();

let eventsJsonPath = require('./example-calendar-events.json');

app.set('json spaces', 2);


// routes
app.get('/', (_, res) => {
  res.send("Welcome to the Google Calendar Events Service");
});

app.get('/get-calendar-events', (_, res) => res.json(eventsJsonPath));


// spin up app on port 3000
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});