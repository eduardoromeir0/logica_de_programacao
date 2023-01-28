let t1 = true;
let t2 = false;

let comprarTV50 = t1 && t2;
console.log("Vamos comprar a TV 50? " + comprarTV50);

let comprarTV32 = t1 != t2;
console.log("Vamos comprar a TV 32? " + comprarTV32);

let sorvete = t1 || t2;
console.log("Vamos tomar sorvete? " + sorvete);
console.log("Vamos ficar em casa? " + !sorvete);
