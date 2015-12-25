(function() {
	'use strict';

	angular
		.module('nathy')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($timeout, $log, $scope, $mdDialog) {
		
		$log.log('Controller : MainController');


		$scope.removeFocus = function() {
			$('md-card').removeClass('active md-whiteframe-z4');
			$('#layer').removeClass('active');
		};

		$scope.philos = [
			{ title: 'Un style de vie, un dessin',
			  thumb: '/assets/images/suissa.jpg',
			  desc : 'Des espaces uniques et sur-mesure, motivés par l\'exigence créative, la recherche de l\'innovation permanente et du détail architectural.',
			  images: [
			  	{url:'/assets/projets/dessin-style/3D-ramatuelle-room.jpg',caption:'Villa privée, Saint Tropez'},
			  	{url:'/assets/projets/dessin-style/3D-ramatuelle-salon.jpg',caption:'Villa privée, Saint Tropez'},
			  	{url:'/assets/projets/dessin-style/3D-ramatuelle.jpg',caption:'Villa privée, Saint Tropez'},
			  	{url:'/assets/projets/dessin-style/dessin-sdb.jpg',caption:'Appartement privé, Algarve Portuga'}]},
			{ title: 'Du concept à la réalisation',
			  thumb: '/assets/images/sketch.jpg',
			  desc : 'De l\'esquisse à la concrétisation d\'un rêve. L\'exigence technique en plan et en exécution de chantier.',
			  images: [
			  	{url:'/assets/projets/concept-chantier/1.jpg',caption:'Tour Total à Lagos, Espace restaurant'},
			  	{url:'/assets/projets/concept-chantier/namaskar.jpg',caption:'Spa extérieur du Palais de Namaskar, Marrakech © Imaad Rahmouni'},
			  	{url:'/assets/projets/concept-chantier/spa-namaskar.jpg',caption:'Villa privative du Palais de Namaskar, Marrakech © Imaad Rahmouni'}]},
			{ title: 'Des matériaux et des artisans',
			  thumb: '/assets/images/details.jpg',
			  desc : 'Un savoir-faire et une expérience éclairée enrichis d\'une collaboration avec des artisans haut de gamme et spécialisés, répondant avec justesse au projet.',
			  images: [
			  	{url:'/assets/projets/artisans/1.jpg',caption:'Enduit armourcoat, niches patine de bronze. BNP.'},
			  	{url:'/assets/projets/artisans/2.jpg',caption:'Comptoir d\'accueil, BNP, Verres extra blanc, soudure UV. Caissons PMMA rétro-éclairés.'},
			  	{url:'/assets/projets/artisans/3.jpg',caption:'Recherche de teintes et matières "Or". Patine, feuilles, enduit.'},
			  	{url:'/assets/projets/artisans/4.jpg',caption:'Voûte en bois de bout, ignifugé, patine or, rehausse de la couleur en feuille d\'or. Boites lumineuses. Silencio© Enia architecture'}]},
			{ title: 'Travail des petits espaces',
			  thumb: '/assets/images/beranger.jpg',
			  desc : 'L\'espace, la configuration, la superficie de certains projets entrainent l\'architecte d\'intérieur à une reflexion sur la fluidité et la perception du lieu. Il faut un regard précis et inventif pour développer les points qui peuvent',
			  images: [
			  	{url:'/assets/projets/petits-espaces/beranger1.jpg',caption:'La lumière'},
			  	{url:'/assets/projets/petits-espaces/beranger2.jpg',caption:'Une salle de bain dans la chambre'},
			  	{url:'/assets/projets/petits-espaces/beranger3.jpg',caption:'Un lit suspendu'},
			  	{url:'/assets/projets/petits-espaces/flat-paris1.jpg',caption:'Une cuisine ouverte sur le salon'},
			  	{url:'/assets/projets/petits-espaces/flat-paris2.jpg',caption:'Une cuisine optimisée'},
			  	{url:'/assets/projets/petits-espaces/beauregard1.jpg',caption:'Des rangements décoratifs'},
			  	{url:'/assets/projets/petits-espaces/beauregard2.jpg',caption:'Du blanc'}]},
			{ title: 'Un corps dans l\'espace architectural',
			  thumb: '/assets/images/sdb.jpg',
			  desc : 'L\'architecture d\'intérieur est là pour répondre à un besoin spécifique d\'ergonomie et d\'usage. Un espace doit être en équilibre entre fonction, confort et esthétique. Le dessin en plan est la traduction de ces trois éléments fondamentaux répondant au cas particulier de chaque projet: hôtel, maison familiale, club...',
			  images: [
			  	{url:'/assets/projets/corps-espaces/salle-de-bain.jpg',caption:'Salle de bain intérieur/extérieur. Palais Namaskar © Imaad Rahmouni'},
			  	{url:'/assets/projets/corps-espaces/bureaux-publicis.jpg',caption:'Réalisation des bureaux Publicis: ergonomie du travail © Imaad Rahmouni'},
			  	{url:'/assets/projets/corps-espaces/escaliers.jpg',caption:'Hall de bureaux BNP. Circulations et fluidité architecturale'},
			  	{url:'/assets/projets/corps-espaces/accueil.jpg',caption:'Accueil des bureaux BNP.'},
			  	{url:'/assets/projets/corps-espaces/toilettes-silencio.jpg',caption:'Toilettes du club Silencio. Monde le la nuit. © Enia architecture'},
			  	{url:'/assets/projets/corps-espaces/flat-paris.jpg',caption:'Appartement "nid". 45 m² à Paris.'}]},
			{ title: 'Des collaborations d\'exceptions',
			  thumb: '/assets/images/silencio.jpg',
			  desc : 'Parmi eux: David Lynch, Imaad Rahmouni et Didier Gomez',
			  images: [
			  	{url:'/assets/projets/collaborations/silencio.jpg', caption:'Réalisation du chantier du Silencio Paris, en collaboration avec David Lynch © Enia architecture'},
			  	{url:'/assets/projets/collaborations/silencio2.jpg', caption:'Réalisation du chantier du Silencio Paris, en collaboration avec David Lynch © Enia architecture'},
			  	{url:'/assets/projets/collaborations/namaskar.jpg', caption:'Conception et suivi du Palais de Namaskar avec Imaad Rahmouni © Imaad Rahmouni'},
			  	{url:'/assets/projets/collaborations/namaskar2.jpg', caption:'Conception et suivi du Palais de Namaskar avec Imaad Rahmouni © Imaad Rahmouni'},
			  	{url:'/assets/projets/collaborations/namaskar3.jpg', caption:'Conception et suivi du Palais de Namaskar avec Imaad Rahmouni © Imaad Rahmouni'},
			  	{url:'/assets/projets/collaborations/sofitel-faubourg.jpg', caption:'Sofitel Faubourg Paris avec Didier Gomez'},
			  	{url:'/assets/projets/collaborations/sofitel-faubourg2.jpg', caption:'Sofitel Faubourg Paris avec Didier Gomez'},
			  	{url:'/assets/projets/collaborations/1.jpg', caption:'Conception des aménagements de bureaux BNP. Didier Gomez'},
			  	{url:'/assets/projets/collaborations/2.jpg', caption:'Conception des aménagements de bureaux BNP. Didier Gomez'}]},
		];

		$scope.news = [
			{ title: 'Petit titre', 
				desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene\'s musical language: feel it.',
				image: '/assets/images/actu1.jpg',
				link:'#'
			},
			{ title: 'Mon super titre',
				desc: 'breakthrough song and the first single from Paracosm share the two most important words in Ernest',
				image: '/assets/images/actu2.jpg',
				link:''
			},
			{ title: 'Bonjour Bonjour',
				desc: 'Song and the first single from Paracosm share the two most important words in Ernest',
				image: '/assets/images/actu3.jpg',
				link:''
			
			}
		];

		$scope.services = [
			{ title: 'Consulting lors d\'une acquisition immobilière', 
				desc: 'Vous souhaitez avoir l\'avis d\'un professionnel lors d\'une acquisition, pour vous aider à imaginer comment tirer pleinement parti du bien, et des maitriser les coûts des travaux.',
				image: '/assets/images/Glyphs1.jpg'
			},
			{ title: 'Personnal shopper',
				desc: 'Vous souhaitez redécorer votre intérieur et vous .... breakthrough song and the first single from Paracosm share the two most important words in Ernest',
				image: '/assets/images/Glyphs2.jpg'
			},
			{ title: 'Bonjour Bonjour',
				desc: 'Song and the first single from Paracosm share the two most important words in Ernest',
				image: '/assets/images/Glyphs3.jpg'
			},
			{ title: 'Bonjour Bonjour',
				desc: 'Song and the first single from Paracosm share the two most important words in Ernest',
				image: '/assets/images/Glyphs4.jpg'
			}
		];

		$scope.status = '  ';
		$scope.showAdvanced = function(ev, projet) {
			dataLayer.push({'realisation': $scope.philos[projet].title});
			$scope.modCtt = '<md-dialog>' +
				'  <md-toolbar>'+
				'  <div class="md-toolbar-tools">'+
				'    <span flex></span>'+
				'    <md-button aria-label="close" class="md-icon-button close" ng-click="closeDialog()">'+
				'      <svg  fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"> <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/> <path d="M0 0h24v24H0z" fill="none"/> </svg>'+
				'    </md-button>'+
				'  </div>'+
				'  </md-toolbar>'+
				'  <md-dialog-content>'+
				'    <div layout="column" layout-margin="16" layout-gt-sm="row">'+
				'      <div flex="40">'+
				'        <h2>'+$scope.philos[projet].title+'</h2>'+
				'        <h3>'+$scope.philos[projet].desc+'</h3>'+
				'      </div>'+
				'      <div flex="60">'+
				'        <md-tabs md-stretch-tabs="always" md-dynamic-height="false">';
		$scope.philos[projet].images.forEach(function (el,i,array) {
			$scope.modCtt += 	'          <md-tab label="'+(i+1)+'"><img src="'+el.url+'" width="100%" alt""/>'+ el.caption +'</md-tab>';			
		});
			$scope.modCtt += '        </md-tabs>'+
				'      </div>'+
				'    </div>'+
				'  </md-dialog-content>' +
				'</md-dialog>';

			$mdDialog.show({
				controller: DialogController,
				template: $scope.modCtt,
				parent: angular.element(document.body),
				targetEvent: ev,
				onRemoving : showDialog(),
				clickOutsideToClose:true
			})
			.then(function(answer) {
			  $scope.status = 'You said the information was "' + answer + '".';
			}, function() {
			  $scope.status = 'You cancelled the dialog.';
			});
		  };

		function showDialog () {
			$('navbar').hide();
		}


		function DialogController($scope, $mdDialog) {
			$scope.closeDialog = function() {
				$mdDialog.hide();
				$('navbar').show();
			};
		}

	}
})();
