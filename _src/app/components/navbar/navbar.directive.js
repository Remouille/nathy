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
		function NavbarController(moment, $scope, $mdSidenav, $timeout, $location, $anchorScroll) {
			var vm = this;
			// "vm.creation" is avaible by directive option "bindToController: true"
			vm.relativeDate = moment(vm.creationDate).fromNow();
			$log.log('Controller : NavbarController');
			
			$scope.toggleMenu = function() {
				angular.element('.burger').toggleClass('selected');
				$scope.removeFocus();
				$mdSidenav('leftNav').toggle();
			};
			$scope.focus = function($card) {
				angular.element('.burger').toggleClass('selected');
				$scope.removeFocus();
				$anchorScroll.yOffset = 100;
      	$anchorScroll($card);
				
				$mdSidenav('leftNav').toggle();
				$timeout(function () {
					angular.element('#'+$card).addClass('active md-whiteframe-z4');
					angular.element('#layer').addClass('active');
				},200);
			};
			$scope.removeFocus = function() {
				angular.element('md-card').removeClass('active md-whiteframe-z4');
				angular.element('#layer').removeClass('active');
			};
		}
	}


})();
