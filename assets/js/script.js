// variables javascript
let nom = "Durand";
let prenom = "Bob";
let fumeur = true;
let age = 45;
let adresse = "194, rue de la ronce";

fumeur = false;
fumeur = 3; //chg de type de variable

let calculTarifMutuelle; //déclare variable vide

//tableau
const utilisateur = ["Durand", "Bob", true, 45, "194, rue de la ronce", ];
//utilisateur = 4; pas de reaffectation sur constante <<<<<<<<<<<<<<<<<<<<<<<<<<
console.log(utilisateur[0]);
utilisateur[3] = false;
console.log(utilisateur[2]);

//objet
const mutualise = {
    nom: "Dubois",
    prenom: "Paul",
    fumeur: true,
    age: 29,
    adresse: "3, rue montazac",
    calculTarifMutuelle
};
console.log(mutualise.prenom);
mutualise.adresse = "16, route de la lande";
console.log(mutualise.adresse);

//html element (objet)
const blocTest = document.getElementById("blocTest");
console.log(blocTest);
console.dir(blocTest);
console.log(blocTest.outerText);
// blocTest.contentEditable = true;
blocTest.id = "newId";
console.dir(blocTest);
console.log(blocTest.innerHTML = "<a href =''>Hello</a>");
// console.log(blocTest.innerText = "<a href =''>Hello</a>");
blocTest.innerHTML = mutualise.nom;
blocTest.style.backgroundColor = "green";

//boucle
console.log(mutualise.adresse);
console.log(mutualise.age);
console.log(mutualise.nom);
console.log(mutualise.prenom);
console.log(mutualise.fumeur);
console.log(mutualise.calculTarifMutuelle);

console.log("BOUCLE FOR--------");
for (let i = 0; i < utilisateur.length; i++) {
    console.log(utilisateur[i]);
};


//while plus rapide donc traitement de grosses données
console.log("BOUCLE WHILE--------");
let j = 0;
while (j < utilisateur.length) {
    console.log(utilisateur[j]);
    j++;
};

console.log("BOUCLE FOREACH--------");
utilisateur.forEach(function (element) {
    console.log(element);
});


//condition
let dessert = "fini";
if (dessert === "fini") {
    console.log("tu peux jouer a la console");
} else {
    console.log("tu peux pas jouer");
};

let taCouleurPreferee = "bleu";
let deuxCouleur = "rouge";
if (taCouleurPreferee === "bleu") {
    console.log("je suis d'accord avec toi elseif");
} else if (taCouleurPreferee === "rouge") {
    console.log("je suis plutot d'accord avec toi elseif2");
} else {
    console.log("je ne suis pas d'accord avec toi");
};

if ((taCouleurPreferee === "bleu" && deuxCouleur === "rouge")) {
    console.log("je suis d'accord avec toi &&");
};
if ((taCouleurPreferee === "bleu" || taCouleurPreferee === "rouge")) {
    console.log("je suis d'accord avec toi ||");
};

//switch
let keyname = 'z';
switch (keyname) {
    case "z":
        console.log("pacman monte");
        break;
    case "s":
        console.log("pacman descend");
        break;
    case "q":
        console.log("pacman va a gauche");
        break;
    case "d":
        console.log("pacman va a droite");
        break;
    default:
        break;
}