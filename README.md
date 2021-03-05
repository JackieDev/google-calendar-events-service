# google-calendar-events-service
GetGoogleCalendarEventsApi in NodeJS using Express

This will provide the authenticated user with the events in their google calendar in json format.

This runs locally on port 3000.

## Endpoints

/get-calendar-events

## Running locally

Clone this repo and open a terminal inside of this repo folder

### To run the No Auth required version: 

  `node server.js`
  
  This currently returns some example google calendar events as json.
  Each event has a title, start datetime and an end datetime.
  No authentication is required at this stage of production.


### To run the Auth required version:

  Go to: https://console.developers.google.com/apis/api/calendar-json.googleapis.com/credentials
   and click on + CREATE CREDENTIALS near the top of the page, select OAuth Client ID, then Web application for the application type,
   name it whatever you like and then click CREATE near the bottom. Click OK to get rid of the popup, then download the credentials.
   Find this file in your downloads and rename it as credentials.json and move it into the repo folder for this project. 

   Then run this version: `node index.js`