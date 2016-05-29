'use strict';

app

    .config( function myAppConfig (authProvider, $httpProvider, $locationProvider,
  jwtInterceptorProvider) {

        authProvider.init({
          domain: AUTH0_DOMAIN,
          clientID: AUTH0_CLIENT_ID,
          loginUrl: '/login'
        });

        authProvider.on('loginSuccess', function($location, profilePromise, idToken, store) {
          console.log("Auth0 Login Success");
          profilePromise.then(function(profile) {
            store.set('profile', profile);
            store.set('token', idToken);
          });
          $location.path('/');
        });

        authProvider.on('loginFailure', function() {
          alert("Error");
        });

        authProvider.on('authenticated', function($location) {
          console.log("Authenticated with Auth0");

        });

        jwtInterceptorProvider.tokenGetter = function(store) {
          return store.get('token');
        }

        // Add a simple interceptor that will fetch all requests and add the jwt token to its authorization header.
        // NOTE: in case you are calling APIs which expect a token signed with a different secret, you might
        // want to check the delegation-token example
        $httpProvider.interceptors.push('jwtInterceptor');
    });
