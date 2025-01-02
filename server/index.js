const express = require("express");
const app = express();
const cors = require("cors");

// Autoriser toutes les origines (modifiez si nécessaire)
app.use(cors());

const news = [
	{
		id: 1,
		keyword: "#découverte #environnement",
		title: "Découverte d’une ancienne cité maya au Mexique",
		image:
			"https://images.squarespace-cdn.com/content/v1/63fcd12e3d4e635a579c0252/1730467124780-XEMYPE002VUK1AMA2W6O/unsplash-image-gM-g4lgSbXQ.jpg?format=1500w",
		article:
			"Une découverte archéologique a récemment été faite au Mexique : la cité maya Valeriana, dissimulée sous la végétation, a été identifiée par hasard par un chercheur alors qu’il faisait des recherches sur internet. Annoncée le 31 octobre par l’agence Associated Press, cette révélation est le fruit d'une recherche totalement inédite menée par Luke Auld-Thomas, un doctorant à l'université de Tulane (Louisiane), qui a trouvé par hasard des données de télédétection en ligne.",
	},
	{
		id: 2,
		keyword: "#innovation #technologie",
		title:
			"Des étudiants créent une intelligence artificielle contre le cyberharcèlement",
		image:
			"https://images.squarespace-cdn.com/content/v1/63fcd12e3d4e635a579c0252/8c48ffd5-2a01-49c6-9897-51bffb2a46a1/gagnants_Essonne_Kesk_IA_redimensionnee_OK.jpg?format=1500w",
		article:
			"Cinq étudiants originaires de l’Essonne ont mis au point un outil technologique capable d’aider et de soutenir des personnes victimes d’harcèlement en ligne. Grâce à leur invention, ils ont remporté la finale du programme Kesk’IA, qui vise à former des talents à l’intelligence artificielle. Ces étudiants ont crée “E-confident”, un chatbot (robot conversation) de support émotionnel. Ce programme informatique, capable de tenir une conversation, s’active lorsque l’IA détecte des messages haineux dans des messages en ligne.",
	},
	{
		id: 3,
		keyword: "#biodiversité #fondsmarins",
		title:
			"Biodiversité : plus de 5 000 nouvelles espèces découvertes dans le Pacifique",
		image:
			"https://images.squarespace-cdn.com/content/v1/63fcd12e3d4e635a579c0252/1686664926873-HXGVHFJ73XSO5W2ZE0HR/image-asset.jpeg?format=1500w",
		article:
			"Une équipe de chercheurs à découvert une multitude de nouvelles espèces dans l'océan pacifique. En tout, ce sont plus de 5 000 espèces qui auraient été découvertes. Ce qui nous rappelle que les fonds marins sont encore loin d’avoir révélés tous leurs secrets. Mais aussi que nous partageons la planète avec encore bien des espèces inconnues. ",
	},
	{
		id: 4,
		keyword: "#société #technologie",
		title:
			"Le télescope James Webb dévoile de nouvelles images de galaxies lointaines.",
		image:
			"https://images.squarespace-cdn.com/content/v1/63fcd12e3d4e635a579c0252/8ab0d24d-2e23-45c3-bc98-44189b17fa22/Capture+d%E2%80%99%C3%A9cran+2024-02-02+%C3%A0+10.28.01.png?format=1500w",
		article:
			"Le télescope James Webb a l’habitude de révéler des clichés magnifiques de l’espace, et c’est encore le cas cette semaine puisque la NASA a posté une nouvelle collection photographique de galaxies lointaines ! 19 galaxies spirales avec une prise de vue à couper le souffle, c’est ce que le télescope spatial James Webb a pu capturer comme dernières photographies.",
	},
	{
		id: 5,
		keyword: "#société #travail",
		title:
			"Le secteur du social, des métiers humanistes pour une génération engagée",
		image: "https://lemediapositif.com/wp-content/uploads/2022/09/lmp.jpeg",
		article:
			"Face à la pénurie de talents pour couvrir les postes vacants, les associations du secteur social et médico-social s’organisent ! Les 15 et 16 septembre dernier se tenait à Nantes, la Mêlée, un évènement pour présenter celles et ceux qui accompagnent les plus vulnérables d’entre nous, et convaincre une nouvelle génération portée par l’envie d’être utile à la société.",
	},
	{
		id: 6,
		keyword: "#environnement #animaux",
		title:
			"Interdiction du broyage des poussins : la France sort de sa coquille !",
		image:
			"https://lemediapositif.com/wp-content/uploads/2021/09/karim-manjra-hQV3s7J6eM4-unsplash-scaled.jpg",
		article:
			"La France est le deuxième pays de l’Union Européenne, après l’Allemagne, à interdire le broyage des poussins ! Le Ministre de l’Agriculture Julien Denormandie, a annoncé que le Conseil d’État serait saisi d’un projet de décret à la fin de l’été pour imposer la mesure dès le 1er janvier 2022. Ce dernier affirme que « tous les couvoirs de poules devront avoir installé ou avoir commandé des machines permettant de détecter le sexe des poussins en incubation dans l’œuf, avant éclosion ».",
	},
	{
		id: 7,
		keyword: "#environnement #animaux",
		title: "Pyrénées : l’augmentation positive du nombre d’ours bruns",
		image: "https://lemediapositif.com/wp-content/uploads/2022/04/lmp-1.jpeg",
		article:
			"Après une augmentation record de la quantité d’ours bruns dans les montagnes des Pyrénées en 2021, la quantité d’individus répertoriés ne cesse d’augmenter. L’année dernière, 9% d’ours ont été comptabilisés en plus par rapport à 2020. Le travail des associations visant à conserver et à protéger les ours bruns porte ses fruits, puisque selon le rapport annuel du Réseau ours brun de 2021, le nombre d’indices de présence collectée a augmenté de 13,4% en comparaison avec l’année précédente.",
	},
	{
		id: 8,
		keyword: "#environnement #energie",
		title:
			"Énergie renouvelable : quand le Portugal produit 100 % d’électricité verte !",
		image:
			"https://lemediapositif.com/wp-content/uploads/2023/11/wind-power-1357419_1280.jpg",
		article:
			"C’est une toute première mondiale qui donne véritablement espoir quant aux objectifs de décarbonations des pays européens. Entre le 31 Octobre et le 6 Novembre 2023, le Portugal a réalisé un test et a réussi à produire 172 GigaWatts/h d’électricité renouvelable, alors que les 10 millions de Portugais n’ont eu besoin que de 131GW/h sur la même période. Grâce à la confluence du solaire, de l’éolien et de l’hydroélectrique, le Portugal a donc passé six jours de production parfaitement verte et durable !",
	},
	{
		id: 9,
		keyword: "#environnement #animaux",
		title:
			"Le Bangladesh vient d'interdire l'adoption d'éléphants sauvages. Et c'est historique!",
		image:
			"https://lemediapositif.com/wp-content/uploads/2024/03/pexels-casey-allen-16066-scaled.jpg",
		article:
			"Ce dimanche 25 février, le Bangladesh vient de connaître une journée historique en matière de protection animale. La Haute Cour de Dacca vient en effet d’interdire l’adoption d’éléphants sauvages d’Asie, une espèce en danger critique d’extinction.  Une décision « historique », saluée par les défenseurs des droits des animaux.",
	},
	{
		id: 10,
		keyword: "#environnement #innovation",
		title: "Norvège : Pause dans l'exploitation minière sous-marine",
		image:
			"https://lemediapositif.com/wp-content/uploads/2024/12/moorage-1493681_1280.jpg",
		article:
			"Bonne nouvelle ! La Norvège ne délivrera pas, comme initialement prévu, de permis de prospection minière sous-marine. Cette décision, saluée par les défenseurs de l’environnement, marque une étape clé pour la préservation des écosystèmes marins.Le Gouvernement norvégien prend une décision historique en suspendant son projet d’exploitation minière sous-marine jusqu’en 2025. Cette mesure, annoncée le 1er décembre, intervient après de vives inquiétudes concernant les impacts environnementaux de l’exploitation des fonds marins.",
	},
	{
		id: 11,
		keyword: "#société #innovation",
		title: "Le premier bitume durable",
		image: "https://lemediapositif.com/wp-content/uploads/2021/09/lmp.jpg",
		article:
			"L’ancien étudiant en génie civil, Israel Antonio Briseño Carmona peut être fier de lui. En effet, ce jeune mexicain vient d’être récompensé par le prestigieux James-Dyson Award[1] des « idées qui changent le monde ». Il a ainsi créé un bitume durable en pneu recyclé qui s’auto-répare quand il pleut. Initialement, il a d’abord envisagé l’asphalte et d’autres additifs, mais il affirme que lorsqu’il a « considéré la possibilité d’utiliser des pneus en caoutchouc qui contaminent nos villes » il a considérablement amélioré son projet.",
	},
	{
		id: 12,
		keyword: "#société #sport",
		title: "Russ Cook : La première personne a traverser l'Afrique en courant",
		image:
			"https://lemediapositif.com/wp-content/uploads/2024/04/Russ-Cook-1.webp",
		article:
			"L’aventurier britannique Russ Cook a réalisé l’exploit complètement fou de traverser le continent Africain en courant, et tout ça en moins d’un an. Parti de la pointe sud de l’Afrique du Sud le 22 février 2023, il a finalement rejoint le nord de la Tunisie ce dimanche 7 avril 2024. 16 250 kilomètres ! C’est bien la distance parcourue par l’homme qu’on surnomme le Hardest Greazer autrement dit « le mec le plus dur ». Un périple qui aura duré 351 jours, soit 385 marathons. Le jeune homme de 27 ans aura traversé au total 16 pays.",
	},
	{
		id: 13,
		keyword: "#environnement #art",
		title: "La Warka Tower, l'invention qui transforme l'air en eau potable",
		image:
			"https://lemediapositif.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-03-at-15.51.42-1.jpeg",
		article:
			"Depuis une dizaine d’années, la Warka Tower est une invention ingénieuse d’un architecte italien qui sème l’espoir à travers le monde, notamment en Afrique pour rendre l’accès à l’eau potable. La Warka Tower, inspirée par un arbre géant d’Éthiopie, est une création de l’architecte italien Antonio Vittori. Cette invention capte l’humidité de l’air grâce à des tours en bambou tressé, transformant ainsi l’air ambiant en eau potable. Mesurant plus de quinze mètres de haut, ce dispositif récolte les gouttelettes de rosée, de pluie ou de brouillard dans un réservoir en bas de la structure géante.",
	},
	{
		id: 14,
		keyword: "#société #romance",
		title:
			"Un conducteur de train sauve la vie d'une femme et tombent amoureux",
		image:
			"https://lemediapositif.com/wp-content/uploads/2024/11/pexels-leslie-toh-304133-880929-1-scaled.jpg",
		article:
			"Une rencontre fortuite a changé le cours de deux vies. Une infirmière au bord du désespoir est sauvée par un conducteur de train. Leur rencontre inattendue se transforme en une histoire d'amour et les pousse à s'entraider face à l'adversité. Ce récit poignant témoigne de l'importance de la bienveillance et de l'écoute dans les moments difficiles.",
	},
	{
		id: 15,
		keyword: "#société #médical",
		title:
			"Renaître grâce au don : l'histoire de Mathilde et sa fille Hortense",
		image:
			"https://lemediapositif.com/wp-content/uploads/2024/11/MathildeCABANIS_portrait5%C2%A9CarlaSegues-scaled.jpg",
		article:
			"Mathilde Cabanis, une maman courageuse, a raconté au Média Positif l'histoire bouleversante de sa fille Hortense, née avec une maladie rare du foie. À un an, Hortense a dû subir une greffe du foie, un geste salvateur rendu possible grâce au don de son père. Cette épreuve a renforcé les liens familiaux et a poussé Mathilde à devenir une porte-parole du don d'organes. Son histoire est un témoignage poignant de résilience et d'espoir, et un appel à chacun de réfléchir à l'importance de ce geste altruiste.",
	},
];

app.get("/news", (req, res) => {
	res.send(news);
});

app.get("/", (req, res) => {
	res.send();
});

app.listen(3000, () => {
	console.log("Serveur démarré sur http://localhost:3000");
});
