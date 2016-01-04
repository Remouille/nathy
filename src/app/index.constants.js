(function() {
  'use strict';

  angular
    .module('nathy')
    .controller('AllController', AllController);
    	/** @ngInject */
	function AllController($timeout, $log, $scope, $mdDialog) {
		$log.log('Controller : allController');
	}
})();
