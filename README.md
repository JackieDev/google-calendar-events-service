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

  `node index.js`

  and point to this url, by replacing `[YOUR_CLIENT_SECRET]` and `[YOUR_CLIENT_ID]`: 

  `localhost:3000/get-calendar-events?client_secret=[YOUR_CLIENT_SECRET]&client_id=[YOUR_CLIENT_ID]&redirect_uris=localhost:3000/something`