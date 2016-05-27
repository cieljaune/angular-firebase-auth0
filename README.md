# AngularJS + Auth0 +  Firebase

This is the seed project you need to use if you're going to create an AngularJS app that will use Auth0 and Firebase.

## Running the example

In order to run the example you need to just start a server. What we suggest is doing the following:

1. Install node
1. run npm install -g serve
1. complete auth0-variables.js with your keys
1. configure your Auth0, manage your Application, set Addon : Firebase 
1. add a file to root path 'api-variables.js' with vars:
	`var FIREBASE_BASE_URL  = 'https://torrid-inferno-5640.firebaseio.com';`
	`var AUTH0_CLIENT_ID    = 'tMY9pNqNuo0fLsd1ouMS31KkIBxsdADA';`
	`var AUTH0_DOMAIN       = 'mbetari.eu.auth0.com';`
	`var AUTH0_CALLBACK_URL = location.href;`
1. run serve in the directory of this project.

Go to [http://localhost:3000](http://localhost:3000) and you'll see the app running :).
