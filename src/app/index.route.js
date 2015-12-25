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
			}).state('glyphs', {
				url: '/glyphs',
				templateUrl: 'app/components/glyphs/glyphs.html',
				controller: 'GlyphsController',
			});

		$urlRouterProvider
		.otherwise('/');
	}

})();
