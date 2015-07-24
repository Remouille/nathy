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
				image: '/assets/images/Glyphs1.jpg'
			},
			{ title: 'Mon super titre',
				desc: 'breakthrough song and the first single from Paracosm share the two most important words in Ernest',
				image: '/assets/images/Glyphs2.jpg'
			},
			{ title: 'Bonjour Bonjour',
				desc: 'Song and the first single from Paracosm share the two most important words in Ernest',
				image: '/assets/images/Glyphs3.jpg'
			},
			{ title: 'Bonjour Bonjour',
				desc: 'Song and the first single from Paracosm share the two most important words in Ernest',
				image: '/assets/images/Glyphs4.jpg'
			}
		];

	}
})();
