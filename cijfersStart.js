function Opdracht(vak, beschrijving) {
    let opdrObj = this;

    opdrObj.vak = vak;
    opdrObj.beschrijving = beschrijving;
}

// OPDRACHT 1.
// Maak de Cijfer functie af.

// opdracht is een object die met behulp van de bovenstaande
// functie is aangemaakt.

// Cijfer een nummer van 0 tot 10


function Cijfer(opdracht, cijfer) {

  const cijfers = this;

  cijfers.opdracht = opdracht;
  cijfers.cijfer = cijfer;
  }

  const cijfers1 = new Cijfer('Fotogallery', '8.0');


// OPDRACHT 2.
// Maak verschillende variabelen voor je opdrachten.
    // Minimaal 3 opdrachten voor 3 verschillende vakken.
    // Totaal dus 9 opdrachten
// Kijk in week6 of studie.js hoe je een variabele aanmaakt met het keyword new

// Maak voor al deze opdrachten een cijfer variabele aan
// Kijk in week6 of studie.js hoe je een variabele aanmaakt met het keyword new
function School(){
  const school = {

    vak: ["FRO", "BAP", "NED"],
    opdracht: ["Fotogallery", "Grid", "Object", "Login", "Registratie", "Uploaden", "Correspondentie 1", "Correspondentie 2", "Correspondentie 3" ],
    cijfer: ["6.2", "8.3", "4.6", "7.0", "9.1", "3.5", "10", "5", "8.7" ]
  }
}

// OPDRACHT 3.
// Vul de arrays met de opdrachten en cijfers die je hebt aangemaakt.
// Kijk in week6 voor een voorbeeld hoe je objecten in een array stopt!

function pushObject() {
    for (let counter = 0; counter < opdrachten.length; counter++) {
        opdrachten.push(new School(opdrachten[counter], counter));
    }
}

let opdrachten = [];
let cijfers = [];




function Periode (opdrachten, cijfers) {
    let periodeObj = this;

    periodeObj.opdrachten = opdrachten;
    periodeObj.cijfers = cijfers;
}

// OPDRACHT 4.
// Maak een periode variabele op basis van de bovenstaande functie

// OPDRACHT 5.
// Schrijf de periode variabele naar een JSON variabele
// Kijk in week7 hoe je een JSON variabele aanmaakt

// OPDRACHT 6.
// Schrijf de json variabele naar de localStorage
// Kijk in week week 6 hoe je een variabele naar de localStorage wegschrijft
