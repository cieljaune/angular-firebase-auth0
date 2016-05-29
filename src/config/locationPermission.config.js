'use strict';

app

    .run(function($rootScope, auth, store, jwtHelper, $location) {
        $rootScope.$on('$locationChangeStart', function() {

          var token = store.get('token');
          if (token) {
            if (!jwtHelper.isTokenExpired(token)) {
              if (!auth.isAuthenticated) {
                auth.authenticate(store.get('profile'), token);
              }
            } else {
              // Either show the login page or use the refresh token to get a new idToken
              $location.path('/');
            }
          }

        });
    })
