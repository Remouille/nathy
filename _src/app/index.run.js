(function() {
  'use strict';

  angular
    .module('nathy')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
