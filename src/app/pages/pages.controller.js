(function() {
	'use strict';

	angular
		.module('nathy')
		.controller('PagesController', PagesController)
		  .config( function( $mdIconProvider ){
    $mdIconProvider.iconSet("avatar", 'icons/avatar-icons.svg', 128);
  });

	/** @ngInject */
	function PagesController($timeout, $log, $scope, $mdDialog, $state) {
		$log.log('Controller : PagesController');
		window.scrollTo(0,500);
		$scope.mytitle = "";
		$('.pages').before('<a class="closepage" href="/"> <svg  fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"> <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/> <path d="M0 0h24v24H0z" fill="none"/></svg> </a>');
		$scope.pageCtt = $state.current.data.pageCtt;
		$scope.imgs = $state.current.data.imgs;


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

$scope.espace = [
		{
			img : "/assets/projets/corps-espaces/chambre",
			title: "Capitonage confortable, liseuse indépendante et interrupteurs de chaque coté du lit. Table de nuit avec tiroirs - Saint-Tropez",
			col: "1",
			row: "2"
		},
		{
			img : "/assets/projets/corps-espaces/interieur-villa-2",
			title: "Marches éclairées et confortables.Espace lumineux et fluide-Ramatuelle.",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/corps-espaces/entree-MDE",
			title: "Le SAS d'entrée entraine le client instantanément dans cette nouvelle expérience - Saint Aygulf",
			col: "1",
			row: "2"
		},
		{
			img : "/assets/projets/corps-espaces/exterieur-MDE",
			title: "Les Mas d'Estel a été dessiné pour pouvoir produire des shows extraordinaires - Saint Aygulf",
			col: "1",
			row: "2"
		},
		{
			img : "/assets/projets/corps-espaces/interieur-nuit-MDE",
			title: "Les exigences d'un club. Satisfaction de la clientelle, et de l'exploitant. Au coeur de la fête - Saint Aygulf",
			col: "1",
			row: "1"
		},
		
		{
			img : "/assets/projets/corps-espaces/terrasse-VIP-MDE",
			title: "De larges fauteuils dessinés pour leur confort et leur esthétique. Zone VIP vue mer - Saint Aygulf",
			col: "1",
			row: "1"
		}];

$scope.petits = [
		{
			img : "/assets/projets/petits-espaces/appartement-parisien",
			title: "Petit appartement Parisien sous les toits. Le blanc pour la lumiere et la sensation d'espace - Paris 02",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/petits-espaces/cabane-sur-la-plage",
			title: "Une chambre avec salle de bain de 16 m². Une suite sur la plage - Ramatuelle",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/petits-espaces/Chambre",
			title: "Deux doubles portes qui ouvrent sur la chambre. Les portes ouvertes agrandissent le séjour - Paris 03",
			col: "1",
			row: "2"
		},
		{
			img : "/assets/projets/petits-espaces/cuisine-et-salon",
			title: "Une cuisine ouverte sur le salon. Un plan de travail a hauteur de bar. Cuisiner et diner en famille - Paris 15",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/petits-espaces/cuisine-paris",
			title: "Des rangements nombreux et discrets. Ton sur ton - Paris 15",
			col: "1",
			row: "2"
		},
		{
			img : "/assets/projets/petits-espaces/salle-de-bain-paris",
			title: "Une salle de bain totalement ouverte sur la chambre. Décloisonner - Paris 03",
			col: "1",
			row: "2"
		},
		{
			img : "/assets/projets/petits-espaces/studio-bois-vue-interieur",
			title: "Les points de vues agrandissent les perpectives - Ramatuelle",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/petits-espaces/studio-bois",
			title: "Une mini suite hôteliere. 16 m². Autonome et confortable - Ramatuelle",
			col: "1",
			row: "1"
		}];

$scope.collaborations = [
		{
			img : "/assets/projets/collaborations/Enia-pour-Lynch-1",
			title: "CLub Silencio. Dessins David Lynch. Réalisation ENIA - Paris 02",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/collaborations/Enia-pour-Lynch-3",
			title: "CLub Silencio. Dessins David Lynch. Réalisation ENIA - Paris 02",
			col: "1",
			row: "2"
		},
		{
			img : "/assets/projets/collaborations/Gomez-1",
			title: "Restaurant. Hôtel Sofitel Faubourg. Réalisation D.Gomez - Paris 08",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/collaborations/Gomez-2",
			title: "Restaurant. Hôtel Sofitel Faubourg. Réalisation D.Gomez - Paris 08",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/collaborations/Gomez-3",
			title: "Restaurant. Hôtel Sofitel Faubourg. Réalisation D.Gomez - Paris 08",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/collaborations/Enia-pour-Lynch-2",
			title: "CLub Silencio. Dessins David Lynch. Réalisation ENIA - Paris 02",
			col: "1",
			row: "2"
		},
		{
			img : "/assets/projets/collaborations/Gomez-4",
			title: "Restaurant. Hôtel Sofitel Faubourg. Réalisation D.Gomez - Paris 08",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/collaborations/Gomez-5",
			title: "Lobby. Hôtel Sofitel Faubourg. Réalisation D.Gomez - Paris 08",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/collaborations/imaad-Rahmouni-2",
			title: "Palais Namaskar. Réalisation Imaad Rahmounie - MArrakech, Palmeraie",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/collaborations/imaad-Rahmouni-3",
			title: "Palais Namaskar. Réalisation Imaad Rahmounie - MArrakech, Palmeraie",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/collaborations/imaad-Rahmouni",
			title: "Palais Namaskar. Réalisation Imaad Rahmounie - MArrakech, Palmeraie",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/collaborations/Mcm-Design-2",
			title: "Hôtel Conrad Resort. Suite présidentielle. Réalisation MCM design - ALgarve, Portugal",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/collaborations/Mcm-Design-3",
			title: "Hôtel Conrad Resort. Chambre deluxe. Réalisation MCM design - ALgarve, Portugal",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/collaborations/Mcm-Design",
			title: "Hôtel Conrad Resort. Restaurant. Réalisation MCM design - ALgarve, Portugal",
			col: "1",
			row: "1"
		}
		];


$scope.style = [
		{
			img : "/assets/projets/dessin-style/Pool-Villa-terrace",
			title: "Un salon en extérieur dans une villa - Marrakech",
			col: "2",
			row: "2"
		},
		{
			img : "/assets/projets/dessin-style/plein-pied",
			title: "Une villa de plein-pied dans le sud de la france - Grimaud",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/dessin-style/room-paris",
			title: "Un petit loft - Paris 03",
			col: "1",
			row: "1"
		},
				{
			img : "/assets/projets/dessin-style/Pool-Villa-bathroom",
			title: "Le jardin s'invite dans la salle de bain - Marrakech",
			col: "2",
			row: "2"
		},
		{
			img : "/assets/projets/dessin-style/salon",
			title: "Des espaces ouverts dans une Villa Moderne - Ramatuelle",
			col: "1",
			row: "1"
		},

		{
			img : "/assets/projets/dessin-style/sdb",
			title: "Les exigeances de l'hotellerie - Marrakech",
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
		},
		{
			img : "/assets/projets/dessin-style/vue-interieur-villa-moderne",
			title: "",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/dessin-style/villa-classique",
			title: "",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/dessin-style/sutio-en-foret",
			title: "",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/dessin-style/studio-vue-mer",
			title: "",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/dessin-style/MDE-interieur",
			title: "",
			col: "1",
			row: "2"
		},
		{
			img : "/assets/projets/dessin-style/Luminaire",
			title: "",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/dessin-style/interieur-restaurant",
			title: "",
			col: "1",
			row: "1"
		},
		{
			img : "/assets/projets/dessin-style/chambre-enfant",
			title: "",
			col: "1",
			row: "1"
		}];


		$scope.imgs = $scope[$state.current.data.imgs];
		$log.log($scope.imgs);

		$scope.showPic = function(event, index, cat) {
			
			// $scope.mytitle = $scope[cat][index].title;
			$log.log($scope[cat][index].title);
			$scope.carouselIndex = 0;

			var d= document, root= d.documentElement, body= d.body;
 			var wid= window.innerWidth || root.clientWidth || body.clientWidth,  
 				 hi= window.innerHeight || root.clientHeight || body.clientHeight ;

 			$log.log('size : '+ wid+'px  X  '+hi+'px');
 			$('.zoom img').css('max-height', +hi+'px');
 			$log.log($('.zoom img'));


			// dataLayer.push({'realisation': $scope[cat][index].title});
			$scope.modCtt = '<md-dialog aria-label="Zoom" class="zoom">' +
				'  <md-toolbar>'+
				'  <div class="md-toolbar-tools">'+
				'    <span  class="legend">&nbsp;</span><span flex></span>'+
				'    <md-button aria-label="close" class="md-icon-button close" ng-click="closeDialog()">'+
				'      <svg  fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"> <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/> <path d="M0 0h24v24H0z" fill="none"/> </svg>'+
				'    </md-button>'+
				'  </div>'+
				'  </md-toolbar>'+
				'  <md-dialog-content>'+
				'  <ul rn-carousel slides="slides" class="image carousel" rn-carousel-index={{carouselIndex}} rn-carousel-controls rn-carousel-deep-watch rn-carousel-controls-allow-loop >'+
				'    <li ng-repeat="tile in cat">'+
				'      <div class="layer" ng-class="{verti: tile.row>tile.col}"><span>{{ cat[carouselIndex].title }}</span><img ng-src="{{tile.img}}" srcset="{{tile.img}}.jpg 600w, {{tile.img}}@2x.jpg 1200w, {{tile.img}}@3x.jpg" alt="{{tile.title}}"></div>'+
				'    </li>'+
				'  </ul>'+
				// '      <img ng-src="{{tile.img}}" srcset="{{tile.img}}.jpg 600w, {{tile.img}}@2x.jpg 1200w, {{tile.img}}@3x.jpg" alt="{{tile.title}}.">'+
				'  </md-dialog-content>' +
				'</md-dialog>';

			$mdDialog.show({
				controller: DialogController,
				template: $scope.modCtt,
				locals: { cat: $scope[cat],i: index },
				parent: angular.element(document.body),
				targetEvent: event,
				fullscreen: true,
				onComplete:showCarousel($scope.carouselIndex),
				clickOutsideToClose:true
			});
		};

		function DialogController($scope, $mdDialog, cat, i) {
			$scope.cat = cat;
			$scope.carouselIndex = i;
			$scope.closeDialog = function() {
				$mdDialog.hide();
				$('.carousel').removeClass('visible');
			};
		}
		function showCarousel (ii) {
			$log.log("Show showCarousel; Index : "+ii);
			window.setTimeout(function () {
				// $log.log(angular.element(document.querySelector('.carousel')));
				// $log.log("Show showCarousel; Index : "+$scope.carouselIndex);
				$('.carousel').addClass('visible');
			}, 500);
		}

	}

})();
