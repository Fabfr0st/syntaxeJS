const prenomRappel = ["paul", "jean", "jacques"];

console.log("<<<<<<<<<<<<<< Rappel >>>>>>>>>>>>>");

console.log("------for------");
for (let indFor = 0; indFor <= 10; indFor++) {
    console.log(indFor);
};

console.log("------while------");
let indWhile = 0;
while (indWhile <= 10) {
    console.log(indWhile);
    indWhile++;
};

console.log("------foreach------");
prenomRappel.forEach(function (element) {
    console.log(element);
});

//fonctions
//declaration de fonction
console.log("-------Fonctions------");

function bjr() {
    console.log("Bonjour");
};

bjr();

//fct a param          param par déf
function bjrP(prenom = "Laurent") {
    console.log("Bonjour " + prenom + " !");
};

bjrP("Michel");
bjrP();

let prenomP = "Jostof";

bjrP(prenomP);

//calculatrice  param multiple
function addition(n1, n2){
    console.log(typeof(n1));
    console.log(typeof(n2));
    return n1+n2;
};

console.log(addition(5,10));
console.log(addition("5",10));
