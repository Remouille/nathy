(function() {
	'use strict';

	angular
		.module('nathy')
		.controller('GlyphsController', GlyphsController);

	/** @ngInject */
	function GlyphsController($timeout, $log, $scope) {
		$log.log('GlyphsController');
		$scope.glyphSVG = function ($name,  $w, $h) {
			$w = typeof $w !== 'undefined' ? $w : 80;
   			$h = typeof $h !== 'undefined' ? $h : 80;
			switch ($name) {
				case 'create':
					return '<svg xmlns="http://www.w3.org/2000/svg" width="'+$w+'px" height="'+$h+'px" viewBox="0 0 120 120"><path d="M58,0L0,93h115L58,0z M58,11l24,40H34L58,11z M31,57h24v30H12L31,57z M61,57h24l18,30H61V57z"/></svg>';
				case 'question':
					return '<svg xmlns="http://www.w3.org/2000/svg" width="'+$w+'px" height="'+$h+'px" viewBox="0 0 25 25" ><polygon points="19,25 19,6 6,6 6,19 13,19 13,11 11,11 11,17 8,17 8,8 17,8 17,23 2,23 2,2 23,2 23,25 25,25 25,0 0,0 0,25"/></svg>';
				case 'transform':
					return '<svg xmlns="http://www.w3.org/2000/svg" width="'+$w+'px" height="'+$h+'px" viewBox="0 0 600 600"><path d="M290,0L0,465h575L290,0z M282,435H60l108-174L282,435z M305,285 M186,230L290,55l225,380H320L186,230z"/></svg>';
				case 'idea':
					return '<svg xmlns="http://www.w3.org/2000/svg" width="'+$w+'px" height="'+$h+'px" viewBox="0 0 250 250" ><polyline points="221,220 30,220 30,30 220,30 220,250 250,250 250,0 0,0 0,250 224.5,250"/><rect x="112.5" y="61.5" width="26" height="125"/><rect x="111.5" y="62.5" transform="matrix(0.4979 0.8673 -0.8673 0.4979 170.922 -45.2065)" width="26" height="125"/><rect x="111.5" y="62.5" transform="matrix(0.4895 -0.872 0.872 0.4895 -45.4417 172.382)" width="26" height="125"/></svg>';
				case 'insight':
					return '<svg xmlns="http://www.w3.org/2000/svg" width="'+$w+'px" height="'+$h+'px" viewBox="0 0 250 250" enable-background="new 0 0 250 250"><g><path d="M81.5,125c0-24.024,19.476-43.5,43.5-43.5s43.5,19.476,43.5,43.5c0,11.459-4.437,21.876-11.679,29.645l18.288,17.038 C186.512,159.448,193.5,143.044,193.5,125c0-37.831-30.669-68.5-68.5-68.5S56.5,87.169,56.5,125 c0,16.779,6.042,32.141,16.057,44.052l19.14-16.077C85.337,145.411,81.5,135.656,81.5,125z"/><path d="M156.821,154.645"/><path d="M91.697,152.974"/></g><path d="M125,4.5C58.45,4.5,4.5,58.45,4.5,125S58.45,245.5,125,245.5S245.5,191.55,245.5,125S191.55,4.5,125,4.5z M138.5,219.546 V111.091h-28v108.314c-45.862-6.986-81-46.592-81-94.406c0-52.743,42.757-95.5,95.5-95.5s95.5,42.757,95.5,95.5 C220.5,173.16,184.849,212.986,138.5,219.546z"/></svg>';
			}
		};

	}
})();
