        var participantes = [];
       var deportes = ["fútbol", "baloncesto", "tenis", "golf", "natación", "ciclismo", "boxeo", "atletismo","voleibol", "béisbol", "rugby", "hockey", "esgrima", "esquí", "patinaje", "surf","karate", "taekwondo", "judo", "levantamiento de pesas", "carreras de obstáculos", "yoga","pilates", "bádminton", "ping-pong", "handbol", "snowboard", "squash", "remo","vela", "motociclismo", "escalada", "squash", "gimnasia", "padel", "aeróbic", "kárate", "taichí", "lucha libre", "vóley playa", "patinaje artístico", "bobsleigh","biatlón", "biatlón", "motocross", "hípica", "luge", "polo", "taekwondo"
    ];
    var alimentos =["manzana", "pera","sandia","limón","naranja","uva","banana","papaya","lima","tamarindo","mandarina",
"mango","guayaba","mora","frutilla","cereza","frambuesa","zarzamora","mburucuyá","piña","melón",
"ciruela","coco","durazno","melocotón","toronja","pomelo","higo","membrillo","arándano","albaricoque",
"carambola","chirimoya","dátil","kiwi","litchi","mamón","kaki","nectarina","níspero","granada","ganadida",
"grosella","pitaya","anacardo","rambután","guayaba","nuez","castaña","uva pasa","avellana","cacao","pasas",
"pistache","maní","cacahuate","aguacate","tomate","pimiento","remolacha","pepino","calabaza","calabacín",
"judías","jalapeño","pimentón","rocoto","jitomate","berenjena","acelga","ajo","albahaca","alcachofa",
"alubias","anís","apio","azafrán","batata","berenjena","berro","boniato","brócoli","canela","cardo",
"cayena","cebolla","cebolla de verdeo","chirivía","cilantro","col","col de bruselas","espárrago",
"espinaca","frijol","garbanzo","guisante","haba","hinojo","jalapeño","jenjibre","judías","kale",
"lechuga","lenteja","mandioca","maíz","manzanilla","nabo","ñame","orégano","papa","perejil","puerro",
"rábano","remolacha","repollo","romero","rúcula","zanahoria","queso","queso azul","queso camembert",
"queso cheddar","queso mozzarela","queso de cabra","cereal con leche","budín de pan","arepas",
"empanadas","feijoada","tacos al pastor","ceviche","tamales","milanesa","marinera","pozole","horchata",
"asado","choripán","canelones","mandi'o chyryry","quesadilla","churrasco","dulce de leche","guacamole",
"pizza","paella","hamburguesa","kebab","sopa paraguaya","chipa guasu","chipa","mbeju","tortilla paraguaya",
"pastel mandi’o","caldo de gallina casero","pira caldo","bori bori","puchero locro","kumanda peky","butifarra",
"dulce de mamón","pasta","fideo espiral","fideo moñito","macarrones","spaghetti","sopa de letras","lasagna",
"ravioli","capellini","albóndigas","gnocci","sushi","ramen","onigiri","sashimi","sopa de miso","udon",
"soba","bento","mochi","takoyaki","taiyaki","dango","tamagoyaki","edamane","gambas","almejas","mejillones",
"champiñones","cangrejo","café","café expresso","café americano","café latte","frappé","café moca","jugo de fruta",
"mate","tereré","té","té negro","té verde","chocolatada","milkshake","té de manzanilla","té helado","leche",
"leche sin pasteurizar","yogurt","bebida láctea","leche de coco","leche de almendra","leche de soja",
"batido de proteínas","kombucha","malta","cebada","cerveza","vino","vino tinto","vino blanco","champagne","sidra",
"sangría","mojito","piña colada","margarita","tequila","ron","vodka","whiskhy","sake","ponche","mate cocido",
"churros","tiramisu","gelatina","brigadeiros","alfajores","torta tres leches","cheesecake","pie de manzana","pie de limón",
"macaron","profiteroles","donas","brownies","galletitas","galletas con chips de chocolate","galletita cementerio",
"frutilla con chantillí","gelato","caramelitos de miel","caramelitos de menta","caramelos","mermelada","arroz con",
"torta de zanahoria","torta de chocolate","torta de red velvet","torta de vainilla","torta de naranja","torta marmolada",
"croissant","creme brule","souflé","mousse","ensalada de frutas","panettone","bizcocho","turrón","boquerón","pionono",
"natilla","pudín","dedos de novia","paletas de helado","heladito en bolsa","helado","arroz","arroz con pollo","soyo",
"avena","papas fritas","sandwich","sandwich de milanesa","sandwich de verduras","sandwich de jamón y queso","jamón",
"pan","pan árabe","pan integral","pan de muerto","baguette","pan felipe","coquito","pan galleta","snickers","twix","kitkat",
"m&m","bubbaloo","halls","gomitas","chicle"
];
    var objetos=["silla", "mesa", "cama", "sofá", "armario", "televisor", "computadora", "lámpara",
"estufa", "refrigerador", "escritorio", "silla de oficina", "alfombra", "espejo", "ventana",
"puerta", "estante", "cómoda", "mueble", "libro", "cuadro", "almohada", "colcha", "mesa de noche",
"ventilador", "radio", "teléfono", "candelabro", "microondas", "tostadora", "cafetera",
"plancha", "secadora", "máquina de coser", "calentador", "cercado", "juguete", "caja",
"sombrero", "relojes", "teléfono móvil", "móvil", "mochila", "bicicleta", "impresora",
"sábana", "toalla", "jarrón"
];
    var pokemon = [ "Pikachu", "Charmander", "Bulbasaur", "Squirtle", "Jigglypuff", "Meowth", "Eevee",
"Snorlax", "Mewtwo", "Gengar", "Charizard", "Bulbasaur", "Squirtle", "Pidgey", "Rattata",
"Jigglypuff", "Zubat", "Diglett", "Meowth", "Psyduck", "Machop", "Magnemite", "Farfetch'd",
"Drowzee", "Krabby", "Exeggcute", "Deevolution", "Poliwhirl", "Machoke", "Tentacruel", "Geodude",
"Ponyta", "Slowpoke", "Magnemite", "Grimer", "Dugtrio", "Onix", "Tangela", "Kangaskhan",
"Horsea", "Goldeen", "Staryu", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar",
"Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon",
"Jolteon", "Flareon", "Porygon", "Omanyte", "Kabuto", "Aerodactyl", "Snorlax", "Articuno",
"Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"
];
    var animales = ["león", "tigre", "elefante", "jirafa", "hipopótamo", "rino", "cebra", "panda", "koala",
"canguro", "oso", "lobo", "zorro", "lince", "ciervo", "tortuga", "delfín", "ballena",
"tiburón", "pingüino", "pelícano", "águila", "halcón", "búho", "cerca", "rata", "ratón",
"conejo", "marmota", "ardilla", "gato", "perro", "caballo", "oveja", "vaca", "cerdo", "gallina",
"pato", "pavo", "ganso", "cisne", "cabra", "camello", "burro", "yegua", "puma", "zorrillo",
"nutria", "morsa", "tapir", "murciélago", "gacela", "mono", "chimpancé", "orangután",
"jirafa", "ibis", "cangrejo", "medusa", "estrella de mar", "gallina", "dromedario"];
    var videojuegos = [ "Super Mario", "The Legend of Zelda", "Minecraft", "Fortnite", "Pokémon", "Overwatch",
"League of Legends", "Call of Duty", "World of Warcraft", "Tetris", "The Elder Scrolls",
"Animal Crossing", "Apex Legends", "Grand Theft Auto", "Final Fantasy", "PUBG", "Assassin's Creed",
"Halo", "God of War", "Red Dead Redemption", "Counter-Strike", "StarCraft", "FIFA", "Madden NFL",
"Need for Speed", "The Sims", "Hearthstone", "Splatoon", "Rocket League", "Celeste", "Undertale",
"Overcooked", "Hollow Knight", "Sekiro", "Dark Souls", "Bloodborne", "Monster Hunter", "Persona",
"Dragon Age", "Mass Effect", "Bioshock", "Left 4 Dead", "XCOM", "Stardew Valley", "Cuphead",
"Dead Cells", "Disco Elysium", "Doom", "Metro Exodus", "Shadow of the Tomb Raider", "Far Cry",
"Mortal Kombat", "Tekken", "Street Fighter", "The Witcher", "Final Fantasy", "Resident Evil"
];
    var paises=[
        "Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda", "Arabia Saudita", "Argelia", "Argentina", "Armenia", "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bangladés", "Barbados", "Baréin", "Bélgica", "Belice", "Benín", "Bielorrusia", "Birmania", "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Catar", "Chad", "Chile", "China", "Chipre", "Ciudad del Vaticano", "Colombia", "Comoras", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Esuatini", "Etiopía", "Filipinas", "Finlandia", "Fiyi", "Francia", "Gabón", "Gambia", "Georgia", "Ghana", "Granada", "Grecia", "Guatemala", "Guinea", "Guinea-Bisáu", "Guinea Ecuatorial", "Guyana", "Haití", "Honduras", "Hungría", "India", "Indonesia", "Irak", "Irán", "Irlanda", "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia", "Jamaica", "Japón", "Jordania", "Kazajistán", "Kenia", "Kirguistán", "Kiribati", "Kuwait", "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Marruecos", "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montenegro", "Mozambique", "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria", "Noruega", "Nueva Zelanda", "Omán", "Países Bajos", "Pakistán", "Palaos", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú", "Polonia", "Portugal", "Reino Unido", "República Centroafricana", "República Checa", "República del Congo", "República Democrática del Congo", "República Dominicana", "Ruanda", "Rumanía", "Rusia", "Samoa", "San Cristóbal y Nieves", "San Marino", "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", "Sudáfrica", "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam", "Tailandia", "Tanzania", "Tayikistán", "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Yibuti", "Zambia", "Zimbabue"
    ];
    var peliculas= ["El Padrino", "La Lista de Schindler", "Forrest Gump", "Titanic", "Avatar", "Inception",
"El Señor de los Anillos", "Pulp Fiction", "The Dark Knight", "Fight Club", "Star Wars",
"Jurassic Park", "Matrix", "Gladiator", "El Rey León", "Harry Potter", "Casablanca",
"La La Land", "E.T.", "Back to the Future", "The Shawshank Redemption", "Goodfellas",
"Interstellar", "Joker", "Parasite", "The Departed", "Braveheart", "The Godfather II",
"The Silence of the Lambs", "Schindler's List", "The Usual Suspects", "The Prestige",
"The Green Mile", "The Truman Show", "Saving Private Ryan", "The Revenant", "Memento",
"The Intouchables", "Gladiator", "Once Upon a Time in Hollywood", "Psycho", "2001: A Space Odyssey",
"Spirited Away", "A Beautiful Mind", "The Sixth Sense", "Léon: The Professional", "The Grand Budapest Hotel",
"Fargo", "The Shape of Water", "The Big Lebowski", "Her", "Whiplash"
];
    var superheroes = ["Superman","Batman","Iron Man","Spider-Man","Mujer Maravilla","Thor","Hulk","Capitan America",
"Aquaman","Linterna Verde","The Flash","Viuda Negra","Ojo de Halcon","Pantera Negra","Doctor Strange",
"Capitana Marvel","Wolverine","Deadpool","Cyborg","Shazam","Ant-Man","Vision","Bruja Escarlata",
"Falcon","Star-Lord","Groot","Rocket Raccoon","Daredevil","Luke Cage","Jessica Jones","Punisher",
"Linterna ","Detective Marciano","Bestia","Nightcrawler","Jean Grey","Tormenta","Titania","Gambito",
"Silver Surfer","Ghost Rider","Quicksilver","Hawkgirl","Supergirl","Batgirl","Catwoman","Robin",
"Soldado del invierno","Doctor Doom","Lex Luthor"
];
    var colores = ["rojo", "azul", "verde", "amarillo", "negro", "blanco", "morado", "rosa", "naranja",
"gris", "café", "turquesa", "beige", "aqua", "coral", "lavanda", "marrón", "oliva", "cián",
"magenta", "salmon", "marfil", "cian", "lila", "mostaza", "azul marino", "verde esmeralda",
"verde oliva", "rosa pálido", "rojo vino", "púrpura", "verde agua", "amarillo mostaza", 
"verde claro", "gris claro", "gris oscuro", "celeste", "verde menta", "azul celeste", 
"amarillo pálido", "rojo oscuro", "azul eléctrico", "verde pasto", "morado claro", "rojo brillante",
"rosa fucsia", "amarillo dorado", "azul petróleo", "gris plateado", "marfil", "lila claro", 
"azul zafiro", "café oscuro"
];

        var palabras = [];
        var palabra = "";
        var palabraRequete = "";
        var azar = 0;
        var turno = 0;
        var modoJuego = "re_perdido"; // modo default

        function seleccionarModo() {
            modoJuego = document.getElementById("modo").value;
        }
    
        function agregarParticipante() {
            var nombre = document.getElementById("nombre").value;
            if (nombre !== "") {
                participantes.push(nombre);
                document.getElementById("nombre").value = "";
                actualizarParticipantes();
            }
        }

        function actualizarParticipantes() {
            document.getElementById("participantes").innerHTML = participantes.join(", ");
        }

        function iniciarJuego() {
            if (confirm("Estas seguro que quieres iniciar el juego?")) {
                
                var categoria = document.getElementById("categoria").value;

                if (categoria == "deportes") {
                    palabras = deportes;
                } else if (categoria == "alimentos") {
                    palabras = alimentos;
                } else if (categoria == "objetos") {
                    palabras = objetos;
                } else if (categoria == "pokemon") {
                    palabras = pokemon;
                } else if (categoria == "animales") {
                    palabras = animales;
                } else if (categoria == "videojuegos") {
                    palabras = videojuegos;
                } else if (categoria == "paises") {
                    palabras = paises;
                } else if (categoria == "peliculas") {
                    palabras = peliculas;
                } else if (categoria == "superheroes") {
                    palabras = superheroes;
                } else if (categoria == "colores") {
                    palabras = colores;
                } else if (categoria == "otros jugadores") {
                palabras = participantes;
                } else if (categoria == "random") {
                    palabras = deportes.concat(alimentos, objetos, participantes, pokemon, animales, videojuegos, paises, peliculas, colores);
                }

                palabra = palabras[Math.floor(Math.random() * palabras.length)];
                palabraRequete = palabras[Math.floor(Math.random() * palabras.length)];
                azar = Math.floor(Math.random() * participantes.length);
                turno = 0;
                document.getElementById("verPalabra").disabled = false;
                document.getElementById("pasarTurno").disabled = true;
                document.getElementById("finalizarJuego").disabled = true;
                mostrarPalabra();
            }
        }

        function mostrarPalabra() {
            if (turno < participantes.length) {
                document.getElementById("turno").innerHTML = "Turno de " + participantes[turno] + ". Presiona 'Ver Palabra' para ver la palabra.";
                document.getElementById("palabra").innerHTML = "";
                document.getElementById("verPalabra").disabled = false;
                document.getElementById("pasarTurno").disabled = true;
            } else {
                document.getElementById("turno").innerHTML = "Es hora de las preguntas!";
                document.getElementById("palabra").innerHTML = "";
                document.getElementById("verPalabra").disabled = true;
                document.getElementById("pasarTurno").disabled = true;
                document.getElementById("finalizarJuego").disabled = false;
            }
        }

        function verPalabra() {
            if (turno < participantes.length) {
                if (turno === azar) {
                    if (modoJuego === "re_perdido") {
                        document.getElementById("palabra").innerHTML = "Estas re perdido " + participantes[turno] + "!";
                    } else if (modoJuego === "requete_perdido") {
                        document.getElementById("palabra").innerHTML = participantes[turno] + ", la palabra es: " + palabraRequete;
                    }
                } else {
                    document.getElementById("palabra").innerHTML = participantes[turno] + ", la palabra es: " + palabra;
                }
                document.getElementById("verPalabra").disabled = true;
                document.getElementById("pasarTurno").disabled = false;
            }
        }

        function pasarTurno() {
            turno++;
            mostrarPalabra();
        }

        function finalizarJuego() {
            var opciones = [];
            while (opciones.length < 3) {
                var opcion = palabras[Math.floor(Math.random() * palabras.length)];
                if (opcion != palabra && !opciones.includes(opcion)) {
                    opciones.push(opcion);
                }
            }
            opciones.push(palabra);
            opciones.sort(function() { return 0.5 - Math.random() });
            var seleccion = prompt("Cual crees que era la palabra secreta?\n1. " + opciones[0] + "\n2. " + opciones[1] + "\n3. " + opciones[2] + "\n4. " + opciones[3]);
            if (opciones[seleccion - 1] == palabra) {
                alert("Felicidades! Has adivinado la palabra correcta.");
            } else {
                alert("Lo siento, esa no era la palabra correcta.");
            }
            document.getElementById("turno").innerHTML = "La palabra era: " + palabra;
            document.getElementById("palabra").innerHTML = "";
        }

        function reiniciarJuego() {
            if (confirm("Estas segur@ que quieres reiniciar el juego?")) {
                participantes = [];
                palabras = [];
                palabra = "";
                azar = 0;
                turno = 0;
                document.getElementById("participantes").innerHTML = "";
                document.getElementById("turno").innerHTML = "";
                document.getElementById("palabra").innerHTML = "";
                document.getElementById("verPalabra").disabled = true;
                document.getElementById("pasarTurno").disabled = true;
                document.getElementById("finalizarJuego").disabled = true;
            }
        }
        function showPopup() {
            Swal.fire({
                title: "TUTORIAL",
                text: "El juego comienza registrando los nombres de todos los participantes. El dispositivo va pasando de mano en mano cuando aparezca el nombre de cada jugador en la pantalla.A esa persona se le mostrara una palabra que debe describir sin decirla directamente... o tal vez no. Si no le muestran la palabra, esa persona esta 're perdida' y debera fingir que la conoce mientras intenta adivinarla. Una vez todos hayan visto su palabra, comienza la ronda de preguntas. Al final, todos votan por quien creen que es el verdadero 're perdido'.",
                showCloseButton: true,
            });
        }
