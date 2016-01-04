(function() {
	'use strict';
	$(window).load(function () {
		$('.loader').hide();
	});

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
			function showDialog () {
				$('navbar').hide();
			}

			$scope.toggleMenu = function() {
				$log.log('toggleMenu');
				$('.burger').toggleClass('selected');
				$scope.removeFocus();
				$mdSidenav('leftNav').toggle();
			};
			$scope.focus = function($card) {
				$('.burger').toggleClass('selected');
				$location.path('/');
				$scope.removeFocus();
				$timeout(function () {
					$anchorScroll.yOffset = 100;
					$anchorScroll($card);
				},200);
				
				$mdSidenav('leftNav').toggle();
				$timeout(function () {
					$('#'+$card).addClass('active md-whiteframe-z4');
					$('#layer').addClass('active');
				},200);
			};
			$scope.link = function($page) {
				$('.burger').toggleClass('selected');
				$scope.removeFocus();
				$mdSidenav('leftNav').toggle();
				$timeout(function () {
					$location.path($page);
				},10);
			};
			$scope.removeFocus = function() {
				$('md-card').removeClass('active md-whiteframe-z4');
				$('#layer').removeClass('active');
			};
		}
	}


})();
