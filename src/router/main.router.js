'use strict';

app

    .config( function ($routeProvider) {
         $routeProvider
		    .when( '/', {
		      controller: 'HomeCtrl',
		      templateUrl: 'views/home.html',
		      pageTitle: 'Homepage',
		      requiresLogin: true
		    })
		    .when( '/login', {
		      controller: 'LoginCtrl',
		      templateUrl: 'views/login.html',
		      pageTitle: 'Login'
		    })
		    .when( '/items', {
		      controller: 'itemController',
		      templateUrl: 'views/item.html',
		      pageTitle: 'Items',
		      requiresLogin: true
		    });

    });