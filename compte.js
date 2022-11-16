/*varibale initial */

var compteurVal = 0;

/*fonction pour incrémenter ma variable dans caque clique */

function nbrclick() {
    updateDisplay(++compteurVal);
}

/*FONCTION POUR APPELER L4ELEMENT AVEC SON ID */

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}