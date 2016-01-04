(function() {
	'use strict';

	angular
		.module('nathy')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($timeout, $log, $scope, $mdDialog, $location) {
		
		$log.log('Controller : MainController');
		window.scrollTo(0,0);

		
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
			{ title: 'Un second projet au Plan-de-la-Tour', 
				desc: 'Le studio vient de signer une seconde maison sur la commune du Plan-de-la-Tour. Le dessin est résolument moderne, tout en respectant son environnement, et les contraintes du PLU.',
				image: '/assets/images/actu1.jpg',
				link:'#interieur'
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
			{ title: 'Architecture d\'intérieur', 
				desc: 'Le studio vous accompagne sur vos projets d’aménagement et de rénovation de votre habitation : de l’étude (plans, choix des matériaux, devis) à la réalisation (suivi des travaux, choix du mobilier, décoration).',
				image: '<polygon style="fill: #1d1d1b;" points="12 8 6 8 6 50 6 56 42 56 48 56 48 26 48 20 24 20 18 20 18 38 18 44 24 44 30 44 36 44 36 38 36 32 30 32 30 38 24 38 24 26 42 26 42 50 12 50 12 14 54 14 54 56 60 56 60 14 60 8 12 8"/>',
				link:'interieur'
			},
			{ title: 'Architecture maison de bois',
				desc: 'En partenariat avec la société PWH, le Studio vous accompagne de la conception, au dépôt de permis de construire, jusqu’à la remise des clés. Une maison en bois sur mesure, calquée sur votre style de vie.',
				image: '<path d="M32,8L4,56H60ZM30,52H12.6l8.7-15.2m2.8-6,7.7-13.5L51.4,52H36" style="fill: #1d1d1b"/>',
				link:'bois'
			},
			{ title: 'Architecture commerciale',
				desc: 'Bénéficiez de l’expérience du Studio en matière de restaurants, boites de nuits, plages, hotels et bureaux.',
				image: '<path style="fill: #1d1d1b" d="M32,6A26,26,0,1,0,58,32,26,26,0,0,0,32,6Zm0,48A22,22,0,1,1,54,32,22,22,0,0,1,32,54Z"/> <rect style="fill: #1d1d1b" x="30" y="30" width="4" height="26" rx="2" ry="2"/> <path style="fill: #1d1d1b" d="M32,16a16,16,0,0,0-8,29.8V40.9a12,12,0,1,1,16,0v4.9A16,16,0,0,0,32,16Z"/> ',
				link:'commercial'
			},
			{ title: 'Outdoor', 
				desc: 'Le studio vous accompagne dans la conception, la décoration, de vos espaces outdoor. Choix du mobilier création d’ambiances décoratives, éclairage. En partenariat avec notre paysagiste, nous dessinons vos espaces extérieurs.',
				image: '<polyline points="51.3 49.1 13.9 49.1 13.9 11.9 51.1 11.9 51.1 55 57 55 57 6 8 6 8 55 52 55"/> <rect x="30.1" y="18.1" width="5.1" height="24.5"/> <rect x="20.2" y="28" width="24.5" height="5.1" transform="translate(-10.9 20.2) rotate(-29.9)"/> <rect x="29.9" y="18.3" width="5.1" height="24.5" transform="translate(-10.1 43.8) rotate(-60.7)"/>',
				link:'outdoor'
			},
			{ title: 'Les autres services',
				desc: 'Le studio est présent pour vous aider dans des choix de mobiliers, orientations esthétiques et ambiances couleurs et même pour lors d\'une acquisition immobilière.',
				image: '<path style="fill: #1d1d1b" d="M32,8L4.1,56h56ZM52,52H34V36h9.1ZM40.9,32H23.1L32,16Zm-20,4H30V52H12Z"/>',
				link:'deco'
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
				clickOutsideToClose:true
			})
			.then(function(answer) {
			  $scope.status = 'You said the information was "' + answer + '".';
			}, function() {
			  $scope.status = 'You cancelled the dialog.';
			});
		  };

		$scope.removeFocus = function() {
			$('md-card').removeClass('active md-whiteframe-z4');
			$('#layer').removeClass('active');
		};

		function DialogController($scope, $mdDialog) {
			$scope.closeDialog = function() {
				$mdDialog.hide();
				$('navbar').show();
			};
		}
		$scope.link = function($page) {
			$location.path($page);
		};

	}
})();
