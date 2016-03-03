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
				controllerAs: 'main',
	            data: {
	                pageTitle: "Nathalie Odiot - Architecture d'intérieurs"
	            }
			}).state('interieur', {
				url: '/interieur',
				templateUrl: 'app/pages/interieur.html',
				controller: 'PagesController',
				controllerAs: 'pages',
	            data: {
	                pageTitle: "Architecture d'interieur - Nathalie Odiot"
	            }
			}).state('outdoor', {
				url: '/outdoor',
				templateUrl: 'app/pages/outdoor.html',
				controller: 'PagesController',
				controllerAs: 'pages',
	            data: {
	                pageTitle: "Architecture Outdoor - Nathalie Odiot"
	            }
			}).state('hospitalite', {
				url: '/hospitalite',
				templateUrl: 'app/pages/hospitalite.html',
				controller: 'PagesController',
				controllerAs: 'pages',
	            data: {
	                pageTitle: "Hotel, Restaurant, Bar, Club - Nathalie Odiot"
	            }
			}).state('bois', {
				url: '/bois',
				templateUrl: 'app/pages/bois.html',
				controller: 'PagesController',
				controllerAs: 'pages',
	            data: {
	                pageTitle: "Maison de bois - Nathalie Odiot"
	            }
			}).state('deco', {
				url: '/autre',
				templateUrl: 'app/pages/autre.html',
				controller: 'PagesController',
				controllerAs: 'pages',
	            data: {
	                pageTitle: "Décoration et aménagement - Nathalie Odiot"
	            }
			}).state('philo1', {
				url: '/un-dessin-par-style-de-vie',
				templateUrl: 'app/pages/style.html',
				controller: 'PagesController',
				controllerAs: 'pages',
				data: {
					pageTitle: "Un style de vie, un dessin - Nathalie Odiot"
				}
			}).state('philo2', {
				url: '/concept-realisation',
				templateUrl: 'app/pages/concept.html',
				controller: 'PagesController',
				controllerAs: 'pages',
				data: {
					pageTitle: "Du concept à la réalisation - Nathalie Odiot"
				}
			}).state('philo3', {
				url: '/petits-espaces',
				templateUrl: 'app/pages/petits-espaces.html',
				controller: 'PagesController',
				controllerAs: 'pages',
				data: {
					pageTitle: "Travail des petits espaces - Nathalie Odiot"
				}
			}).state('philo4', {
				url: '/materiaux-artisans',
				templateUrl: 'app/pages/materiaux.html',
				controller: 'PagesController',
				controllerAs: 'pages',
				data: {
					pageTitle: "Des matériaux et des artisans - Nathalie Odiot"
				}
			}).state('philo5', {
				url: '/corps-dans-lespace',
				templateUrl: 'app/pages/corps-espace.html',
				controller: 'PagesController',
				controllerAs: 'pages',
				data: {
					pageTitle: "Le corps dans l'espace architectural - Nathalie Odiot"
				}
			}).state('philo6', {
				url: '/collaborations',
				templateUrl: 'app/pages/collaborations.html',
				controller: 'PagesController',
				controllerAs: 'pages',
				data: {
					pageTitle: "Des collaborations d'exceptions - Nathalie Odiot"
				}
			});

		$urlRouterProvider
		.otherwise('/');
	}

})();
