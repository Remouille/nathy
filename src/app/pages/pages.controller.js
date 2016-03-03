(function() {
	'use strict';

	angular
		.module('nathy')
		.controller('PagesController', PagesController)
		  .config( function( $mdIconProvider ){
    $mdIconProvider.iconSet("avatar", 'icons/avatar-icons.svg', 128);
  });

	/** @ngInject */
	function PagesController($timeout, $log, $scope, $mdDialog) {
		$log.log('Controller : PagesController');
		window.scrollTo(0,500);
		$('.pages').before('<a class="closepage" href="/"> <svg  fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"> <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/> <path d="M0 0h24v24H0z" fill="none"/></svg> </a>');


	$scope.hospitality = [
		{
			img : "/assets/services/hospitality/danseuses",
			title: "Le Mas d'Estel - Saint Aygulf",
			col: "2",
			row: "2"
		},
		{
			img : "/assets/services/hospitality/silencio",
			title: "Le Silencio - Paris",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/services/hospitality/lemas3",
			title: "Restaurant extérieur du Mas d'Estel - Saint Aygulf",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/services/hospitality/sofitel",
			title: "Living Sofitel Faubourg - Paris",
			col: "2",
			row: "2"
		},
		{
			img : "/assets/services/hospitality/silencio2",
			title: "Bar du Silencio - Paris",
			col: "1",
			row: "2"
		},
		{
			img : "/assets/services/hospitality/lemas",
			title: "Le Mas d'Estel - Saint Aygulf",
			col: "1",
			row: "2"
		},
		{
			img : "/assets/services/hospitality/lemas2",
			title: "Entrée du Mas d'Estel - Saint Aygulf",
			col: "1",
			row: "1"
		}];


	$scope.artisans = [
		{
			img : "/assets/projets/artisans/bois-debout",
			title: "Bois debout, feuilles d'or et feuille de cuivre. Tapis imprimé (dessin D.Lynch) EGE. Mur Or Signature Murale",
			col: "1",
			row: "2"
		},
		{
			img : "/assets/projets/artisans/silencio",
			title: "Passage Feuille de cuivre et résine",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/artisans/douche",
			title: "Douche. Marbre calacata deployé. Marbre gris. MFTB Robinetterie, THG collection profil en Onyx",
			col: "1",
			row: "2"
		},
		{
			img : "/assets/projets/artisans/escalier",
			title: "Escalier en Pierre de Bourgogne. Main courante Dacryl.",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/artisans/miroiterie",
			title: "Agencements mixtes et miroirterie",
			col: "1",
			row: "2"
		},
		{
			img : "/assets/projets/artisans/mixtes",
			title: "Agencements mixtes",
			col: "1",
			row: "2"
		},
		{
			img : "/assets/projets/artisans/parquet",
			title: "Parquet sur mesure suivant le mouvement naturel de l'arbre",
			col: "1",
			row: "2"
		},
		{
			img : "/assets/projets/artisans/porte-celsa",
			title: "Porte sur mesure. Placage naturel. Epice celsa (Marotte)",
			col: "1",
			row: "2"
		},
		{
			img : "/assets/projets/artisans/porte-jonc",
			title: "Porte sur mesure sans cadre. Revetement mural, pierre de jonc. (Signature Murale)",
			col: "1",
			row: "2"
		},
		{
			img : "/assets/projets/artisans/sdd",
			title: "Salle de douche sur mesure en quartz blanc. Luminaires Baccarat",
			col: "1",
			row: "2"
		},
		{
			img : "/assets/projets/artisans/tapis",
			title: "Tapis et Mobiliers sur mesure (dessins N.O.). Edition Tapis Design",
			col: "1",
			row: "2"
		}];
$scope.concept = [
		{
			img : "/assets/projets/concept-chantier/chantier-Mas-DEstel",
			title: "Chantier du Mas d'Estel - Saint Aygulf",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/concept-chantier/PLan-et-vue-aerienne-du-Mas-DEstel",
			title: "Plan et vue aérienne du Mas D'Estel - Saint Aygulf",
			col: "1",
			row: "2"
		},
		{
			img : "/assets/projets/concept-chantier/chantier-portail-neuf",
			title: "Rénovation d'un appartement dans le vieux Saint-Tropez",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/concept-chantier/escalier-suissa",
			title: "Un dessin précis, des finitions d'exceptions, un escalier unique",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/concept-chantier/Tunnel-Mas-dEstel",
			title: "Entrée du Mas d'Estel en tôle découpée - Saint Aygulf",
			col: "1",
			row: "1"
		}];

$scope.style = [
		{
			img : "/assets/projets/dessin-style/Pool-Villa-terrace",
			title: "Un salon en extérieur dans une villa de Marrakech",
			col: "2",
			row: "2"
		},
		{
			img : "/assets/projets/dessin-style/plein-pied",
			title: "Une villa de plein-pied dans le sud de la france",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/dessin-style/room-paris",
			title: "Un studio dans paris",
			col: "1",
			row: "1"
		},
				{
			img : "/assets/projets/dessin-style/Pool-Villa-bathroom",
			title: "Le jardin s'invite dans la salle de bain",
			col: "2",
			row: "2"
		},
		{
			img : "/assets/projets/dessin-style/salon",
			title: "Des espaces ouverts dans une Villa à Ramatuelle",
			col: "1",
			row: "1"
		},

		{
			img : "/assets/projets/dessin-style/sdb",
			title: "Les exigeance de l'hotellerie",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/dessin-style/igor",
			title: "Appartement à Paris",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/dessin-style/table-mas",
			title: "Une intégration dans la nature",
			col: "1",
			row: "1"
		}];

		$scope.showPic = function($event, $index) {
			dataLayer.push({'realisation': $scope.tiles[$index].title});
			$scope.modCtt = '<md-dialog aria-label="Zoom" class="zoom">' +
				'  <md-toolbar>'+
				'  <div class="md-toolbar-tools">'+
				'    <span  class="legend">'+$scope.tiles[$index].title+'</span><span flex></span>'+
				'    <md-button aria-label="close" class="md-icon-button close" ng-click="closeDialog()">'+
				'      <svg  fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"> <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/> <path d="M0 0h24v24H0z" fill="none"/> </svg>'+
				'    </md-button>'+
				'  </div>'+
				'  </md-toolbar>'+
				'  <md-dialog-content>'+
				'      <img ng-src="'+$scope.tiles[$index].img+'.jpg" srcset="'+$scope.tiles[$index].img+'.jpg 800w, '+$scope.tiles[$index].img+'@2x.jpg" alt="'+$scope.tiles[$index].title+'">'+
				'  </md-dialog-content>' +
				'</md-dialog>';

			$mdDialog.show({
				controller: DialogController,
				template: $scope.modCtt,
				parent: angular.element(document.body),
				targetEvent: $event,
				clickOutsideToClose:true
			});
		};
		function DialogController($scope, $mdDialog) {
			$scope.closeDialog = function() {
				$mdDialog.hide();
			};
		}

	}

})();
