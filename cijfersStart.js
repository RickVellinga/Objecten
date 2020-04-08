function Opdracht(vak, beschrijving) {
    let opdrObj = this;

    opdrObj.vak = vak;
    opdrObj.beschrijving = beschrijving;
}

// OPDRACHT 1.
function Cijfer(opdracht, cijfer) {
    let cijferObj = this;

    cijferObj.opdracht = opdracht;
    cijferObj.cijfer = cijfer;
}

// OPDRACHT 2.
let opdr1 = new Opdracht("NED", "Correspondentie 1");
let opdr2 = new Opdracht("NED", "Correspondentie 2");
let opdr3 = new Opdracht("NED", "Correspondentie 3");
let opdr4 = new Opdracht("BAP", "Registreer / Login");
let opdr5 = new Opdracht("BAP", "Verwijder Functie");
let opdr6 = new Opdracht("BAP", "INSERT INTO");
let opdr7 = new Opdracht("FRO", "CSS Grid");
let opdr8 = new Opdracht("FRO", "Fotgallery met Objecten");
let opdr9 = new Opdracht("FRO", "Familie Duck");

let c1 = new Cijfer(opdr1, 3.8);
let c2 = new Cijfer(opdr2, 5.1);
let c3 = new Cijfer(opdr3, 4.5);
let c4 = new Cijfer(opdr4, 8.3);
let c5 = new Cijfer(opdr5, 6.7);
let c6 = new Cijfer(opdr6, 7.2);
let c7 = new Cijfer(opdr7, 9.6);
let c8 = new Cijfer(opdr8, 6.5);
let c9 = new Cijfer(opdr9, 7.2);

// OPDRACHT 3.
let opdrachten = [];
opdrachten.push(opdr1);
opdrachten.push(opdr2);
opdrachten.push(opdr3);
opdrachten.push(opdr4);
opdrachten.push(opdr5);
opdrachten.push(opdr6);
opdrachten.push(opdr7);
opdrachten.push(opdr8);
opdrachten.push(opdr9);

let cijfers = [];
cijfers.push(c1);
cijfers.push(c2);
cijfers.push(c3);
cijfers.push(c4);
cijfers.push(c5);
cijfers.push(c6);
cijfers.push(c7);
cijfers.push(c8);
cijfers.push(c9);

function Periode (opdrachten, cijfers) {
    let periodeObj = this;

    periodeObj.opdrachten = opdrachten;
    periodeObj.cijfers = cijfers;
}

// OPDRACHT 4.
let opdrP3 = new Periode(opdrachten, cijfers);
console.log(opdrP3)

// OPDRACHT 5.
let inJson = JSON.stringify(opdrP3);
console.log(inJson);

// OPDRACHT 6.
localStorage.setItem(`opdrP3`, inJson);
