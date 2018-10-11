<!DOCTYPE html>
<html lang="fr" class="no-js">
<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

	<title>Maintenance Reptile</title>

	<link rel="shortcut icon" href="favicon.ico">

	<!-- CSS -->
        <!--Menu-->
	<link rel="stylesheet" type="text/css" href="assets/css/Menu/demo.css" />	
	<link rel="stylesheet" type="text/css" href="assets/css/Menu/component.css" />
	
    <!--JS-->
        <!--Menu-->
    <script src="assets/js/Menu/modernizr-custom.js"></script>
</head>

<body>
	<div class="container">
		<header class="bp-header cf">
			<div class="dummy-logo">
				<h2 class="dummy-heading">Menu</h2>
			</div>
		</header>

		<!-- Bouton d'action menu -->
		<button class="action action--open" aria-label="Open Menu"><span class="icon icon--menu"></span></button>

		<nav id="ml-menu" class="menu">
			<!-- Bouton d'action menu -->
			<button class="action action--close" aria-label="Close Menu"><span class="icon icon--cross"></span></button>

			<!-- Menu -->
			<div class="menu__wrap">
				<ul data-menu="main" class="menu__level" tabindex="-1" role="menu" aria-label="Tous">
					<li class="menu__item" role="menuitem"><a class="menu__link" data-submenu="submenu-1" aria-owns="submenu-1" href="#">Individu</a></li>
					<li class="menu__item" role="menuitem"><a class="menu__link" href="#">Animaux</a></li>
					<li class="menu__item" role="menuitem"><a class="menu__link" href="#">Reproduction</a></li>
					<li class="menu__item" role="menuitem"><a class="menu__link" href="#">Terrarium</a></li>
					<li class="menu__item" role="menuitem"><a class="menu__link" data-submenu="submenu-2" aria-owns="submenu-2" href="#">Conseils</a></li>					
					<li class="menu__item" role="menuitem"><a class="menu__link" href="#">Contact</a></li>
				</ul>

				<!-- Individu -->
				<ul data-menu="submenu-1" id="submenu-1" class="menu__level" tabindex="-1" role="menu" aria-label="Individu">
					<li class="menu__item" role="menuitem"><a class="menu__link" href="#">Informations</a></li>
					<li class="menu__item" role="menuitem"><a class="menu__link" href="#">Planning Alimentaire</a></li>
					<li class="menu__item" role="menuitem"><a class="menu__link" href="#">Suivi Vétérinaire</a></li>
				</ul>

				<!-- Conseils -->
				<ul data-menu="submenu-2" id="submenu-2" class="menu__level" tabindex="-1" role="menu" aria-label="Conseils">
					<li class="menu__item" role="menuitem"><a class="menu__link" data-submenu="submenu-2-1" aria-owns="submenu-2-1" href="#">Conseils</a></li>
					<li class="menu__item" role="menuitem"><a class="menu__link" data-submenu="submenu-2-1" aria-owns="submenu-2-1" href="#">Vidéos</a></li>
					<li class="menu__item" role="menuitem"><a class="menu__link" data-submenu="submenu-2-1" aria-owns="submenu-2-1" href="#">Localisation Vétérinaire</a></li>
				</ul>
			</div>
		</nav>

		<!-- Chargement Ajax -->
		<div class="content">
			<p class="info">Sélectionner une Catégorie</p>
		</div>
	</div>

	<!-- JS -->
	<script src="assets/js/Menu/classie.js"></script>
	<script src="assets/js/Menu/dummydata.js"></script> <!-- Affichage Informations -->
	<script src="assets/js/Menu/main.js"></script>
	<script src="assets/js/Menu/menu.js"></script>
</body>
</html>
