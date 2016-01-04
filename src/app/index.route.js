(function() {
	'use strict';

	angular
		.module('nathy')
		.config(routeConfig);

	/** @ngInject */
	function routeConfig($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'app/main/main.html',
				controller: 'MainController',
				controllerAs: 'main'
			}).state('interieur', {
				url: '/interieur',
				templateUrl: 'app/pages/interieur.html',
				controller: 'PagesController',
				controllerAs: 'pages'
			}).state('outdoor', {
				url: '/outdoor',
				templateUrl: 'app/pages/outdoor.html',
				controller: 'PagesController',
				controllerAs: 'pages'
			}).state('commercial', {
				url: '/commercial',
				templateUrl: 'app/pages/commercial.html',
				controller: 'PagesController',
				controllerAs: 'pages'
			}).state('bois', {
				url: '/bois',
				templateUrl: 'app/pages/bois.html',
				controller: 'PagesController',
				controllerAs: 'pages'
			}).state('deco', {
				url: '/autre',
				templateUrl: 'app/pages/autre.html',
				controller: 'PagesController',
				controllerAs: 'pages'
			});

		$urlRouterProvider
		.otherwise('/');
	}

})();
