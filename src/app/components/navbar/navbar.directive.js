(function() {
	'use strict';

	angular
		.module('nathy')
		.directive('navbar', navbar);


	/** @ngInject */
	function navbar($log) {
		var directive = {
			restrict: 'E',
			templateUrl: 'app/components/navbar/navbar.html',
			scope: {
					creationDate: '='
			},
			controller: NavbarController,
			controllerAs: 'vm',
			bindToController: true
		};

		return directive;
		
		/** @ngInject */
		function NavbarController($scope, $mdSidenav, $timeout, $location, $anchorScroll, $log) {
			$log.log('Controller : NavbarController');
			
			$scope.toggleMenu = function() {
				$log.log('toggleMenu');
				$('.burger').toggleClass('selected');
				$scope.removeFocus();
				$mdSidenav('leftNav').toggle();
			};
			$scope.focus = function($card) {
				$('.burger').toggleClass('selected');
				$scope.removeFocus();
				$anchorScroll.yOffset = 100;
      			$anchorScroll($card);
				
				$mdSidenav('leftNav').toggle();
				$timeout(function () {
					$('#'+$card).addClass('active md-whiteframe-z4');
					$('#layer').addClass('active');
				},200);
			};
			$scope.removeFocus = function() {
				$('md-card').removeClass('active md-whiteframe-z4');
				$('#layer').removeClass('active');
			};
		}
	}


})();
