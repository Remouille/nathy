(function() {
	'use strict';

	angular
		.module('nathy')
		.controller('PagesController', PagesController);

	/** @ngInject */
	function PagesController($timeout, $log, $scope, $mdDialog) {
		$log.log('Controller : PagesController');
		window.scrollTo(0,500);
		$('.pages').before('<a class="closepage" href="/"> <svg  fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"> <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/> <path d="M0 0h24v24H0z" fill="none"/></svg> </a>');
		setTimeout(function() {
			$('.captioned').each(function () {
				if ($(this).data('layout')=="column") {
					$(this).wrap('<div layout="column" class="media verti">');
					$(this).after('<span class="caption">'+$(this).data('caption')+'</span>');
				}else{
					$(this).wrap('<div layout-sm="column" layout-gt-sm="row" class="media" layout-align="center end">');
					$(this).after('<span class="caption" flex=20>'+$(this).data('caption')+'</span>');
					$(this).attr('flex','80')
				}
			});
		}, 50);

	}

})();
