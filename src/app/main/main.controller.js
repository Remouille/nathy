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
  }
})();
