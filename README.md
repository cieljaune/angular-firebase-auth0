# AngularJS + Auth0 +  Firebase

This is the seed project you need to use if you're going to create an AngularJS app that will use Auth0 and Firebase.

## Running the example

In order to run the example you need to just start a server. What we suggest is doing the following:

1. Install node
1. run npm install -g serve
1. complete auth0-variables.js with your keys
1. configure your Auth0, manage your Application, set Addon : Firebase 
1. add a file to root path 'api-variables.js' with vars:

	`var FIREBASE_BASE_URL  = 'your_firebase_url';`
	
	`var AUTH0_CLIENT_ID    = 'your_auth0_client_id';`
	
	`var AUTH0_DOMAIN       = 'your_auth0_domain';`
	
	`var AUTH0_CALLBACK_URL = location.href;`
1. run serve in the directory of this project.

Go to [http://localhost:3000](http://localhost:3000) and you'll see the app running :).
