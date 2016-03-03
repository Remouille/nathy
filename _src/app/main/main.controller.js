(function() {
	'use strict';

	angular
		.module('nathy')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($timeout, $log, webDevTec, $scope) {
		var vm = this;
		$log.log('Controller : MainController');

		vm.awesomeThings = [];
		vm.classAnimation = '';
		vm.creationDate = 1436890484919;
		// vm.showToastr = showToastr;

		activate();
 
		function activate() {
			getWebDevTec();
			$timeout(function() {
				vm.classAnimation = 'rubberBand';
			}, 4000);
		}

		function getWebDevTec() {
			vm.awesomeThings = webDevTec.getTec();

			angular.forEach(vm.awesomeThings, function(awesomeThing) {
				awesomeThing.rank = Math.random();
			});
		}

		$scope.removeFocus = function() {
			angular.element('md-card').removeClass('active md-whiteframe-z4');
			angular.element('#layer').removeClass('active');
		};

		$scope.philos = [
			{ title: 'Home', image: '/assets/images/suissa.jpg' },
			{ title: 'Home', image: '/assets/images/sketch.jpg' },
			{ title: 'Home', image: '/assets/images/details.jpg' },
			{ title: 'Home', image: '/assets/images/beranger.jpg' },
			{ title: 'Home', image: '/assets/images/sdb.jpg' },
			{ title: 'Home', image: '/assets/images/silencio.jpg' }
		];

		$scope.news = [
			{ title: 'Petit titre', 
				desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene\'s musical language: feel it.',
				image: '/assets/images/actu1.jpg',
				link:'#'
			},
			{ title: 'Mon super titre',
				desc: 'breakthrough song and the first single from Paracosm share the two most important words in Ernest',
				image: '/assets/images/actu2.jpg',
				link:''
			},
			{ title: 'Bonjour Bonjour',
				desc: 'Song and the first single from Paracosm share the two most important words in Ernest',
				image: '/assets/images/actu3.jpg',
				link:''
			
			}
		];

		$scope.services = [
			{ title: 'Petit titre', 
				desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene\'s musical language: feel it.',
				image: '<polygon style="fill: #1d1d1b;" points="12 8 6 8 6 50 6 56 42 56 48 56 48 26 48 20 24 20 18 20 18 38 18 44 24 44 30 44 36 44 36 38 36 32 30 32 30 38 24 38 24 26 42 26 42 50 12 50 12 14 54 14 54 56 60 56 60 14 60 8 12 8"/>'
			},
			{ title: 'Mon super titre',
				desc: 'breakthrough song and the first single from Paracosm share the two most important words in Ernest',
				image: '<path d="M32,8L4,56H60ZM30,52H12.6l8.7-15.2m2.8-6,7.7-13.5L51.4,52H36" style="fill: #1d1d1b"/>'
			},
			{ title: 'Bonjour Bonjour',
				desc: 'Song and the first single from Paracosm share the two most important words in Ernest',
				image: '  <path style="fill: #1d1d1b" d="M32,6A26,26,0,1,0,58,32,26,26,0,0,0,32,6Zm0,48A22,22,0,1,1,54,32,22,22,0,0,1,32,54Z"/> <rect style="fill: #1d1d1b" x="30" y="30" width="4" height="26" rx="2" ry="2"/> <path style="fill: #1d1d1b" d="M32,16a16,16,0,0,0-8,29.8V40.9a12,12,0,1,1,16,0v4.9A16,16,0,0,0,32,16Z"/> '
			},
			{ title: 'Bonjour Bonjour',
				desc: 'Song and the first single from Paracosm share the two most important words in Ernest',
				image: '<path style="fill: #1d1d1b" d="M32,8L4.1,56h56ZM52,52H34V36h9.1ZM40.9,32H23.1L32,16Zm-20,4H30V52H12Z"/>'
			}
		];

	}
})();
