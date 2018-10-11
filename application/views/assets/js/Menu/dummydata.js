var dateNaiss = new Date("1995-02-04");
var date = new Date();
var dateN = "0" + dateNaiss.getDate() + "-" + "0" + (dateNaiss.getMonth() + 1) + "-" + dateNaiss.getFullYear();
var age = (Number((date.getTime() - dateNaiss.getTime()) / 31536000000).toFixed(0)) - 1;
var dummyData = {
    "Présentation": "<p>" +
        "Nom : GREY <br>" +
        "Prénom : Steven<br>" +
        "Date de Naissance : " + dateN + "<br>" +
        "Age : " + age + " ans <br>" +
        "Permis de Conduire : Oui <br>" +
        "Voiture Personelle : Oui" +
        "</p>",

    //Parcours
    "Professionel": "<div class='container'>" +
        "<div class='main'>" +
        "<ul class='cbp_tmtimeline'>" +
        "<li>" +
        "<time class='cbp_tmtime'><span>2017-2018</span></time>" +
        "<div class='cbp_tmicon cbp_tmicon-phone'></div>" +
        "<div class='cbp_tmlabel'>" +
        "<h3>La Compagnie du SAV - Lisses (91)</h3>" +
        "<p>Développement d'un portail d'accueil regroupant l'ensemble des applications WEB utilisés par les collaborateurs. Celui-ci permet d'accéder à un formulaire de demande de support développé par mes soins. <br> <br>" +
        "*Langage : HTML 5 / CSS 3 / PHP <br>" +
        "*IDE : Eclipse " +
        "</p>" +
        "</div>" +
        "</li>" +
        "<li>" +
        "<time class='cbp_tmtime'><span>2016-2017</span></time>" +
        "<div class='cbp_tmicon cbp_tmicon-phone'></div>" +
        "<div class='cbp_tmlabel'>" +
        "<h3>Développeur Windev chez Futurosoft - Evry (91)</h3>" +
        "<p>" +
        "Développement et Amélioration du module Statistique du logiciel G8. <br>" +
        "Développement d'une application mobile permettant de facilité le travail d'inventaire <br> <br>" +
        "*Langage : WLangage <br>" +
        "*IDE : Windev + Windev Mobile <br>" +
        "*Base de Données : Centre de Contrôle lié à Windev <br>" +
        "</p>" +
        "</div>" +
        "</li>" +
        "<li>" +
        "<time class='cbp_tmtime'><span>2016</span></time>" +
        "<div class='cbp_tmicon cbp_tmicon-phone'></div>" +
        "<div class='cbp_tmlabel'>" +
        "<h3>Développeur Web chez Delpharm - Brétigny-sur-Orges (91)</h3>" +
        "<p>" +
        "Création d'un Portail pour que les utilisateurs soit autonome sur leurs créations de tickets. Par ce biais, l'utilisateur accède également aux suivis de ses tickets. <br> <br>" +
        "*Langages utilisés : PHP / Framework PHP Codeigniter / HTML5 / CSS3 / Javascript / SQL <br>" +
        "*IDE : Eclipse <br>" +
        "*Base de Données : Mysql avec mise en place de PHPmyAdmin <br>" +
        "</p>" +
        "</div>" +
        "</li>" +
        "<li>" +
        "<time class='cbp_tmtime'><span>2015</span></time>" +
        "<div class='cbp_tmicon cbp_tmicon-phone'></div>" +
        "<div class='cbp_tmlabel'>" +
        "<h3>Développeur Web en Mairie - Malesherbes (45)</h3>" +
        "<p>" +
        "Développement d'un portail d'authentification pour la mise en place d'un Wifi Public <br> <br>" +
        "*Langages utilisés : PHP / HTML5 / CSS3 / SQL <br>" +
        "*IDE : Notepad ++ <br>" +
        "*Base de Données : Mysql avec mise en place de PHPmyAdmin" +
        "</p>" +
        "</div>" +
        "</li>" +
        "</ul>" +
        "</div>" +
        "</div>",

    "Scolaire": "<div class='container'>" +
        "<div class='main'>" +
        "<ul class='cbp_tmtimeline'>" +
        "<li>" +
        "<time class='cbp_tmtime'><span>2017</span></time>" +
        "<div class='cbp_tmicon cbp_tmicon-phone'></div>" +
        "<div class='cbp_tmlabel'>" +
        "<h3>Master Miage par Alternance - Université Paris-Saclay, Evry (91) (En cours)</h3>" +
        "</div>" +
        "</li>" +
        "<li>" +
        "<time class='cbp_tmtime'><span>2016-2017</span></time>" +
        "<div class='cbp_tmicon cbp_tmicon-phone'></div>" +
        "<div class='cbp_tmlabel'>" +
        "<h3>Licence 3 Miage par Alternance - Université Paris-Saclay, Evry (91)</h3>" +
        "</div>" +
        "</li>" +
        "<li>" +
        "<time class='cbp_tmtime'><span>2014-2016</span></time>" +
        "<div class='cbp_tmicon cbp_tmicon-phone'></div>" +
        "<div class='cbp_tmlabel'>" +
        "<h3>BTS SIO - Lycée Parc des Loges, Evry (91)</h3>" +
        "<p>" +
        "Spécialité SLAM " +
        "</p>" +
        "</div>" +
        "</li>" +
        "<li>" +
        "<time class='cbp_tmtime'><span>2010-2014</span></time>" +
        "<div class='cbp_tmicon cbp_tmicon-phone'></div>" +
        "<div class='cbp_tmlabel'>" +
        "<h3>Baccalauréat STMG - Lycée Duhamel du Monceau, Pithiviers(45)</h3>" +
        "<p>" +
        "Spécialité Gestion Finance " +
        "</p>" +
        "</div>" +
        "</li>" +
        "</ul>" +
        "</div>" +
        "</div>",

    //Compétences
    "Compétences": "<h1> <b>Langages Informatiques</b></h1> " +        
        "<div class='compLangage'>" +
        "<div class='langFirstPart'>" +
            "<h6>HTML</h6>" +
            "<div class='w3-light-grey' style='width:60%'>" +
                "<div class='w3-container w3-green w3-center' style='width:70%'>70%</div>" +
            "</div>" +
            "<h6>CSS</h6>" +
            "<div class='w3-light-grey' style='width:60%'>" +
                "<div class='w3-container w3-green w3-center' style='width:70%'>70%</div>" +
            "</div>" +        
            "<h6>SQL</h6>" +
            "<div class='w3-light-grey' style='width:60%'>" +
                "<div class='w3-container w3-green w3-center' style='width:70%'>70%</div>" +
            "</div>" +
        "</div>" +

        "<div class='langSecPart'>" +
            "<h6>UML</h6>" +
            "<div class='w3-light-grey' style='width:60%'>" +
                "<div class='w3-container w3-green w3-center' style='width:85%'>85%</div>" +
            "</div>" +
            "<h6>PHP</h6>" +
            "<div class='w3-light-grey' style='width:60%'>" +
                "<div class='w3-container w3-green w3-center' style='width:70%'>70%</div>" +
            "</div>" +
        "</div>" +

        "<div class='langEndPart'>" +
            "<h6>Java</h6>" +
            "<div class='w3-light-grey' style='width:60%'>" +
                "<div class='w3-container w3-orange w3-center' style='width:50%'>50%</div>" +
            "</div>" +            
            "<h6>XML</h6>" +
            "<div class='w3-light-grey' style='width:60%'>" +
                "<div class='w3-container w3-red w3-center' style='width:25%'>25%</div>" +
            "</div>" +
        "</div>" +
        "</div>" +

        "<h1 style='margin-top:5%;'><b>Autres Compétences informatiques </b></h1>" +
        "<div class='compInfo'>" +  
        
        "<div class='infoFirstPart'>" +
        "<h2> Méthodes Agiles </h2>" + 
        "<h6><br></h6>" +
            "<div class='w3-light-grey' style='width:60%'>" +
                "<div class='w3-container w3-orange w3-center' style='width:50%'>50%</div>" +
            "</div>" +

            "<h2>Base de Données </h2>" +
            "<h6>Merise</h6>" +
            "<div class='w3-light-grey' style='width:60%'>" +
                "<div class='w3-container w3-orange w3-center' style='width:50%'>50%</div>" +
            "</div>" +
            "<h6>MySQL</h6>" +
            "<div class='w3-light-grey' style='width:60%'>" +
                "<div class='w3-container w3-green w3-center' style='width:70%'>70%</div>" +
            "</div>" +
        "</div>" +

        "<div class='infoEndPart'>" +
            "<h2> Versioning </h2>" +
            "<h6>GitHub</h6>" +
            "<div class='w3-light-grey' style='width:60%'>" +
                "<div class='w3-container w3-orange w3-center' style='width:50%'>50%</div>" +
            "</div>" +

            "<h2> Environnements </h2>" +
            "<h6>Eclipse</h6>" +
            "<div class='w3-light-grey' style='width:60%'>" +
                "<div class='w3-container w3-green w3-center' style='width:70%'>70%</div>" +
            "</div>" +
            "<h6>Visual Studio</h6>" +
            "<div class='w3-light-grey' style='width:60%'>" +
                "<div class='w3-container w3-green w3-center' style='width:70%'>70%</div>" +
            "</div>" +
        "</div>",

    //Projets
    //Professionel
    "La Compagnie du SAV": "<h1 style='text-align:center;'><b>La Compagnie du SAV</b></h1>" +
        "<h2>Présentation de la Société</h2>" +
        "<p>" +
        "La Compagnie du SAV (CSAV) est une société de Service Après Vente d'Electroménager. <br>" +
        "Elle a été créée le 1er Février 2012." +
        "</p>" +
        "<p>" +
        "Cette société est la seule indépendante de son secteur. <br>" +
        "En effet, les concurrents sont tous rattachés à une société plus importante." +
        "</p>" +

        "<img src='img/apprentissage/csav/logo.png' border='0' style='margin: 3% 40% 3% 40%'>" +
        "<p>" +
        "Elle intervient sur l'ensemble du territoire métropolitain à l'aide de ces différentes agences répartis sur l'ensemble du territoire. <br>" +
        "Pour répondre aux demandes de ses clients, la CSAV emploi près de 230 collaborateurs dont 150 techniciens. " +
        "</p>" +

        "<h2>Présentation des Projets</h2>" +

        "<p>" +
        "Au sein de la Compagnie du SAV,  j'ai été amené à travaillé sur plusieurs projets." +
        "</p>" +

        "<section id='least' style='display: flex; flex-wrap: wrap; flex-direction: row; justify-content: center; align-items: center; margin-top: 5%;' > " +
        "<ul class='least-gallery'>" +

        //Page Home + Formulaire
        "<li><a href='#' title='Home et Formulaire' data-subtitle=''> " +
        "<img src='img/apprentissage/csav/Captures/Home/projetHome.jpg' alt='Alt Image Text' />" +
        "</li>" +

        //PIA
        "<li><a href='#' title='PIA' data-subtitle=''> " +
        "<img src='img/apprentissage/csav/Captures/PIA/projetPIA.jpg' alt='Alt Image Text' />" +
        "</li>" +

        //Proposition de Projet
        "<li><a href='#' title='Proposition de Projet' data-subtitle=''> " +
        "<img src='img/apprentissage/csav/Captures/Autres/autreProjet.jpg' alt='Alt Image Text' />" +
        "</li>" +

        "</ul>" +
        "</section>",

    "Delpharm": "<h1 style='text-align:center;'><b>Delpharm</b></h1>" +
        "<h2>Présentation de la Société</h2>" +
        "<p>" +
        "La société Delpharm est un groupe du secteur de l'industrie pharmaceutique. <br> " +
        "Elle fournis plusieurs grand laboratoire du secteur. <br> " +
        "Créée en 1988, cette société comprend aujourd'hui 11 sites répartis sur l'ensemble du territoire. <br> " +
        "Le site m'ayant accueilli le 11 Janvier 2016, pour une durée de 5 semaines, fût celui de Brétigny-sur-Orge. <br> " +
        "Cet établissement est une usine de production de médicaments solide et pâteux. <br> " +
        "</p>" +

        "<img src='img/stage/Delpharm/Delpharm.jpg' border='0' style='margin: 2% 30% 2% 30%'>" +

        "<h2>Présentation des Projets</h2>" +
        "Dans le cadre de mon stage, la société m'a confié deux projets. <br>" +
        "Le premier consistait à transformer un document Word en un formulaire PDF saisissable. <br>" +
        "Le second était le développement d'un Portail de Gestion des Tickets Supports" +

        "<section id='least' style='display: flex; flex-wrap: wrap; flex-direction: row; justify-content: center; align-items: center; margin-top: 5%;'> " +
        "<ul class='least-gallery'>" +
        /*Création de PDF*/
        "<li><a href='#' title='Création' data-subtitle='De PDF Saisissable'> " +
        "<img src='img/stage/Delpharm/pdf/Creation_PDF.png' alt='Alt Image Text' />" +
        "</li>" +

        /*Portail de Gestion des Tickets*/
        "<li><a href='#' title='Portail' data-subtitle='De Gestion des Tickets'> " +
        "<img src='img/stage/Delpharm/application/accueil.png' alt='Alt Image Text' />" +
        "</li>" +
        "</ul>" +
        "</section>",

    "Mairie de Malesherbes": "<h1 style='text-align:center;'><b>Mairie de Malesherbes</b></h1>" +
        "<h2>Présentation de l'Organisation</h2>" +
        "<p> " +
        "Dans le cadre de ma formation de BTS SIO, j'ai été amené à exécuté un stage au sein de la Mairie de Malesherbes. <br>" +
        "Ce stage de 5 semaines a débuté le 18 Mai 2015. <br>" +
        "</p>" +
        "<img src='img/stage/Mairie/Mairie.jpg' border='0' style='margin: 2% 30% 2% 30%'>" +
        "<p>" +
        "Le Service Informatique, dans lequel j'ai travaillé, regroupait 3 individus ayant chacun leur spécialité. <br>" +
        "Le premier était le DSI de la Mairie." +
        "A ce titre, il devait s'occuper du bon fonctionnement du service. " +
        "Il s'occupait également de l'infrastructure réseau. <br>" +
        "Le deuxième avait la responsabilité de gérer les différentes missions de support utilisateurs. <br>" +
        "La dernière personne du service avait la charge de cartographier l'ensemble de la ville (Routes, Réseaux de l'eau...) et de faire une représentation numérique des mesures prises sur le terrain. " +
        "</p>" +
        "<h2>Présentation du Projet</h2>" +
        "Dans le cadre de ce stage, la Mairie m'a confiée la charge de mettre en place un Wifi Public (HotSpot) pour le club de Football local. <br>" +
        "Cette installation a conduit à la programmation d'un portail captif à destination des personnes souhaitant s'authentifié sur ce wifi" +
        "<section id='least' style='display: flex; flex-wrap: wrap; flex-direction: row; justify-content: center; align-items: center; margin-top: 5%;' > " +
        "<ul class='least-gallery'>" +
        "<li><a href='#' title='HotSpot' data-subtitle=''> " +
        "<img src='img/stage/Mairie/projetPortail.png' alt='Alt Image Text' />" +
        "</li>" +
        "</ul>" +
        "</section>",

    //Personnels
    "Banque de Mot de Passe": "<h1 style='text-align:center;'><b>Banque de Mot de Passe</b></h1>" +
        "<h2>Présentation du Contexte</h2>" +
        "<p>" +
        "" +
        "</p>" +
        "<h2>Présentation du Projet</h2>" +
        "<p>" +
        "</p>",

    //"Juste Prix":"",
    "Suivi Recherche Entreprise": "<h1 style='text-align:center;'><b>Suivi Recherche d'Entreprise</b></h1>" +
        "<h2>Présentation du Contexte</h2>" +
        "<p>" +
        "" +
        "</p>" +
        "<h2>Présentation du Projet</h2>" +
        "<p>" +
        "</p>",

    "Maintenance Reptiles": "<h1 style='text-align:center;'><b>Maintenance de Reptile</b></h1>" +
        "<h2>Présentation du Contexte</h2>" +
        "<p>" +
        "Les reptiles sont de plus en plus présent dans les animaleries. <br>" +
        "De nombreux terrariophiles en adoptent en tant qu'animaux de compagnie. <br>" +
        "Ces Nouveaux Animaux de Compagnie (NAC) ont de nombreux besoins pour être élevé dans les meilleures conditions possibles. <br>" +
        "Ces besoins sont divers et variés. " +
        "Nous le retrouvons au travers de l'alimentation mais également dans les températures et l'hygrométrie (Humidité de l'air)." +
        "</p>" +
        "<h2>Présentation du Projet</h2>" +
        "<p>" +
        "Chaque reptile ayant des besoins spécifiques, je me suis renseigné sur les espèces que nous retrouvons en captivité." +
        "Cette recherche m'a permis de programmer une application facilitant la maintenance de ces animaux." +
        "</p>",

    //Veilles Technologiques
    "Intelligences Artificielles": "<h1 style='text-align:center;'> <b> Intelligences Artificielles </b> </h1>" +
        "<h2><b>Description</b></h2>" +
        "<h2><b>Articles</b></h2>" +
        "<section id='least'> " +
        "<ul class='least-gallery'>" +
        "<li><a href='#' title='Faut-il en avoir peur?' data-subtitle='19 Septembre 2018'> " +
        "<img src='img/veilles/Technologique/IA/IA01.jpg' alt='Alt Image Text' />" +
        "</li>" +
        "</ul>" +
        "</section>",

    "Gatebox": "<h1 style='text-align:center;'> <b> Qu'est ce que la Technologie Gatebox ? </b> </h1>" +
        "<h2><b>Description</b></h2>" +
        "<p>" +
        "La Gatebox est une technologie Japonaise qui associe intelligence artificielle et hologramme. <br>" +
        "L'IA contrôle l'ensemble des fonctionnalités (recherche internet, contrôle des appareils électriques...) de cette technologie. <br>" +
        "De nombreux capteurs composent la Gatebox permettant d'analyser l'humeur et le comportement de l'utilisateur. " +
        "Ces analyses ont pour but d'améliorer la communication entre l'Homme et la Machine. <br> " +
        "L'Hologramme a pour objectif d'améliorer les intéractions de l'utilisateur en proposant comme interface un personnage de manga par défaut. " +
        "</p>" +
        "<h2><b>Articles</b></h2>" +
        "<section id='least'> " +
        "<ul class='least-gallery'>" +
        //Premier Article
        "<li><a href='#' title='une Assistante' data-subtitle='20 Janvier 2016'> " +
        "<img src='img/veilles/Technologique/gatebox/gatebox02.jpg' alt='Alt Image Text' />" +
        "</li>" +
        //2ème Article
        "<li>" +
        "<a href='#' title='IA Maison' data-subtitle='21 Janvier 2016' >" +
        "<img src='img/veilles/Technologique/gatebox/gatebox01.jpg' alt='Alt Image Text' />" +
        "</a>" +
        "</li>" +
        //3ème Article
        "<li>" +
        "<a href='#' title='Concept' data-subtitle='2016' >" +
        "<img src='img/veilles/Technologique/gatebox/gatebox03.jpg' alt='Alt Image Text' />" +
        "</a>" +
        "</li>" +
        //4ème Article
        "<li>" +
        "<a href='#' title='Assistant' data-subtitle='20 Janvier 2016' >" +
        "<img src='img/veilles/Technologique/gatebox/gatebox04.png' alt='Alt Image Text' />" +
        "</a>" +
        "</li>" +

        //5ème Article
        "<li>" +
        "<a href='#' title='une Assistante' data-subtitle='16 Décembre 2016' >" +
        "<img src='img/veilles/Technologique/gatebox/gatebox05.jpg' alt='Alt Image Text' />" +
        //http://kulturegeek.fr/news-100366/gatebox-lassistante-holographique-kawaii-vient-japon
        "</a>" +
        "</li>" +

        //6ème Article
        "<li>" +
        "<a href='#' title='une Assistante' data-subtitle='18 Décembre 2016' >" +
        "<img src='img/veilles/Technologique/gatebox/gatebox06.jpg' alt='Alt Image Text' />" +
        //https://www.journaldugeek.com/2016/12/18/gatebox-une-assistante-intelligente-plus-vraie-que-nature/
        "</a>" +
        "</li>" +
        "</ul>" +
        "</section>",

    "Ordinateurs Organiques": "<h1 style='text-align:center;'><b>Qu'est ce qu'un Ordinateur Organique ? </b></h1>" +
        "<h2><b>Description</b></h2>" +
        "<h2><b>Articles</b></h2>" +
        "<section id='least'> " +
        "<ul class='least-gallery'>" +
        //1er Article
        "<li><a href='#' title='Ordinateur Organique' data-subtitle='30 Octobre 2011'> " +
        "<img src='img/veilles/Technologique/gatebox/gatebox02.jpg' alt='Alt Image Text' />" +
        "</li>" +
        //2ème Article
        "<li>" +
        "<a href='#' title='Fonctionne à la Protéine' data-subtitle='27 Février 2016' >" +
        "<img src='img/veilles/Technologique/gatebox/gatebox01.jpg' alt='Alt Image Text' />" +
        "</a>" +
        "</li>" +
        //3ème Article
        "<li>" +
        "<a href='#' title='Open Innovation' data-subtitle='29 Août 2018' >" +
        "<img src='img/veilles/Technologique/gatebox/gatebox03.jpg' alt='Alt Image Text' />" +
        "</a>" +
        "</li>" +
        "</ul>" +
        "</section>",

    "Ordinateurs Quantiques": "<h1 style='text-align:center;'><b>Qu'est ce qu'un Ordinateur Quantique ? </b></h1>" +
        "<h2><b>Description</b></h2>" +
        "<h2><b>Articles</b></h2>",

    "Robot Micro-Swimmer": "<h1 style='text-align:center;'><b>Qu'est ce qu'un Robot Micro-Swimmer? </b></h1>" +
        "<h2><b>Description</b></h2>" +
        "<h2><b>Articles</b></h2>" +
        "<section id='least'> " +
        "<ul class='least-gallery'>" +
        //1er Article
        "<li><a href='#' title='Ordinateur Organique' data-subtitle='30 Octobre 2011'> " +
        "<img src='img/veilles/Technologique/gatebox/gatebox02.jpg' alt='Alt Image Text' />" +
        "</li>" +
        //2ème Article
        "<li>" +
        "<a href='#' title='Fonctionne à la Protéine' data-subtitle='27 Février 2016' >" +
        "<img src='img/veilles/Technologique/gatebox/gatebox01.jpg' alt='Alt Image Text' />" +
        "</a>" +
        "</li>" +
        //3ème Article
        "<li>" +
        "<a href='#' title='Open Innovation' data-subtitle='29 Août 2018' >" +
        "<img src='img/veilles/Technologique/gatebox/gatebox03.jpg' alt='Alt Image Text' />" +
        "</a>" +
        "</li>" +
        "</ul>" +
        "</section>",

    /*Législation*/
    "GDPR / RGPD": "<h1 style='text-align:center;'> <b> GDPR / RGPD </b> </h1>" +
        "<h2><b>Description</b></h2>" +
        "<h3><b>Présentation de l'Article</b></h3>" +
        "<p>" +
        "Le Règlement Général sur la Protection des Doonées (ou General Data Protection Regulation) est un nouveau règlement européen entré en application le 25 Mai 2018. <br>" +
        "Cette réforme a pour objectifs de renforcer les droits des personnes, de responsabiliser les acteurs traitant des données et de crédibiliser la régulation <br> " +
        "afin de renforcer la protection des données à caractères personnels. <br> " +
        "Ce règlement européen s'applique à l'ensemble des Etats membres l'Union Européenne. " +
        "</p>" +

        "<h3><b>Sanctions Encourues</b></h3>" +
        "<p>" +
        "L'article 83 de ce nouveau règlement stipule que son non respect peut conduire à des sanctions financières lourdes. <br>" +
        "Ces sanctions seront déterminées en fonction de la nature et de la gravité de l'acte frauduleux. <br>" +
        "C'est pourquoi, la sanction peut s'élever à un montant équivalent à 4% du Chiffre d'Affaires d'une société ou encore à 20 millions d'euros. <br>" +
        "</p>" +

        "<h2><b>Articles</b></h2>" +
        "<section id='least'> " +
        "<ul class='least-gallery'>" +
        "<li><a href='https://gdpr-info.eu/' title='GDPR' data-subtitle='25 Mai 2018'> " +
        "<img src='img/veilles/Juridique/gdpr.png' alt='Alt Image Text' />" +
        "</li>" +
        "<li><a href='https://www.cnil.fr/fr/reglement-europeen-protection-donnees' title='RGPD' data-subtitle='25 Mai 2018'> " +
        "<img src='img/veilles/Juridique/rgpd.png' alt='Alt Image Text' />" +
        "</li>" +
        "</ul>" +
        "</section>",

    "Loi Informatique et Liberté": "<h1 style='text-align:center;'> <b> Loi Informatique et Liberté </b> </h1>" +
        "<h2><b>Description</b></h2>" +
        "<h3><b>Présentation de l'Article</b></h3>" +
        "<p>" +
        "Cette loi datant du 6 Janvier 1978 décrit les droits informatiques et les conditions de licéité des traitements des données personnelles. <br>" +
        "Cette protection des données a été renforcée avec le nouveau règlement européen RGPD.  <br>" +
        "La Commission Nationale Informatique et Liberté (CNIL) a été fondé sur ce texte de droit. <br>" + 
        "Cette commission avait pour objectif premier de faire respecter ce texte au traver de ces différentes actions (Informations, Sanctions...). " +
        "</p>" +
        "<h3><b>Sanctions Encourues</b></h3>" +
        "Le non respect de cette loi peut entrainer des peines de 5 ans d'emprisonnement et de 300 000€ d'amende. <br>" +
        "La CNIL peut également condamné la personne (physique ou morale) à verser des dommages et intérêts aux victimes éventuelles. " +
        "<h2><b>Article</b></h2>" +
        "<section id='least'> " +
        "<ul class='least-gallery'>" +

        "<li><a href='https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000886460' title='Loi n° 78-17' data-subtitle='6 Janvier 1978'> " +
        "<img src='img/veilles/Juridique/lil.png' alt='Alt Image Text' />" +
        "</li>" +
        "</ul>" +
        "</section>",

    "Hadopi": "<h1 style='text-align:center;'> <b> Hadopi </b> </h1>" +
        "<h2><b>Description</b></h2>" +
        "<h3><b>Présentation de l'Article</b></h3>" +
        "<p>" +
        "La Haute Autorité pour la Diffusion des Oeuvres et la Protection des droits sur Internet a été créée par une loi datant du 12 Juin 2009. <br>" +
        "Cette loi française a pour objectif de lutter contre le piratage d'oeuvres (musiques, films...) et de protéger ainsi les droits d'auteurs. " +
        "</p>" +        
        "<h3><b>Sanctions Encourues</b></h3>" +
        "<p>" +
        "En  cas de piratage, le propriétaire de la ligne internet reçoit deux avertissements. <br>" +
        "Dans le cas où une récidive serait constatée dans les 12 mois suivant le premier avertissement, une poursuite pénale peut-être engagée. <br>" +
        "La peine maximale encourue en cas de poursuite est de 1 500€ d'amende. <br>" +
        "Des dommages et Intérêts ^peuvent s'ajouter à cette amende. " +
        "</p>" +

        "<h2><b>Article</b></h2>" +
        "<section id='least'> " +
        "<ul class='least-gallery'>" +

        "<li><a href='#' title='Loi n° 2009-669' data-subtitle='13 Juin 2009'> " +
        "<img src='img/veilles/Juridique/hadopi.png' alt='Alt Image Text' />" +
        "</li>" +
        "</ul>" +
        "</section>",

    "Godfrain": "<h1 style='text-align:center;'> <b> Godfrain </b> </h1>" +
        "<h2><b>Description</b></h2>" +
        "<h3><b>Présentation de l'Article</b></h3>" +
        "<p>" +
        "La loi Godfrain a été promulguée le 5 Janvier 1988. <br>" +
        "Cette loi est relative à la Fraude Informatique réprimant les actes criminelles informatiques ainsi que le piratage. " +
        "</p>" +
        "<h3><b>Sanctions Encourues</b></h3>" +
        "<p>" +
        "En cas de non respect de cette loi, celle-ci prévois des sanctions pénales allant de 2 ans de Prison et 30 000€ d'amendes à 10 ans et 150 000€. <br>" +
        "Ces sanctions sont déterminées en fonction de l'infraction commise. <br>" +
        "De plus, cette peine peut s'accompagner de privation de droits civiques (interdiction de travailler dans la fonction publique)." +
        "</p>"+
        "<h2><b>Article</b></h2>" +
        "<section id='least'> " +
        "<ul class='least-gallery'>" +

        "<li><a href='https://www.legifrance.gouv.fr/jo_pdf.do?id=JORFTEXT000000875419' title='Loi n° 88-19' data-subtitle='5 janvier 1988'> " +
        "<img src='img/veilles/Juridique/godfrain.png' alt='Alt Image Text' />" +
        "</li>" +
        "</ul>" +
        "</section>",

    //Contact
    "Contact": "<form method=\"post\" action=\"../envoiMail.php\">" +
        "<p class=\"formMail\">" +
        "<input class=\"emailExp\" type=\"email\" name=\"email\" placeholder=\"Adresse E-mail\" required>" +
        "<input class=\"obj\" type=\"text\" name=\"objet\" placeholder=\"Objet\" required>" +
        "<textarea class=\"contenuMail\" name=\"contenuMail\" required></textarea>" +
        "<input class=\"btnEnvoi\" type=\"submit\" style='height:35px;' name=\"envoyer\" value=\"Envoyer\">" +
        "</p>" +
        "</form>",
}