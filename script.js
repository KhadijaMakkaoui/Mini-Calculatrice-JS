function add(nb1, nb2) {
    return nb1 + nb2;
}

function soustract(nb1, nb2) {
    return nb1 - nb2;
}

function multiple(nb1, nb2) {
    return nb1 * nb2;
}

function divise(nb1, nb2) {
    if (nb2 == 0) {
        alert("Désoler...la division sur 0 zéro ne peut pas être éffectué ");
        return "";
    }
    return nb1 / nb2;
}
let result = 0,
    res2 = 0;
let current = document.getElementById("input_Affichage");
let previous = document.getElementById("result");
let pointbtn = document.getElementById("point");
let i = 0,
    countOp = 0;
let operateur;
let equals;
let n1 = 0,
    n2 = 0;

function operate(op) {

    n2 = parseFloat(current.value);
    n1 = parseFloat(res2);
    // if (countOp == 0) {
    //     n1 = parseFloat(previous.value);

    //     countOp++
    //     return
    // } else


    // countOp++
    // if (isNaN(n1) || isNaN(n2) || n1 || isNaN(n2))
    //     return
    // if (n1 != 0 || n2 != 0)
    switch (op) {
        case "+":
            result = add(n1, n2);
            break;
        case "-":
            result = soustract(n1, n2);
            break;
        case "*":
            result = multiple(n1, n2);
            break;
        case "/":
            result = divise(n1, n2);
            break;
    }
}

//tableau des operateurs de l'operation
let arOperator = new Array();

function OperationChoix(op) {
    //sortir de la fonction si l'utilisateur n'a rien entrer
    if (current.value == "") {
        return;
    }
    //vider les variable aprés le clique sur egual
    if (equals) {
        previous.value = "";
        arOperator = [];
        result = 0;
        res2 = 0;
    }

    previous.value += current.value + "" + op;
    arOperator[i] = op;
    operate(arOperator[i - 1])

    if (res2 == 0) {
        res2 = current.value;
    } else
        res2 = result;
    document.querySelector("h4").innerHTML = result;
    i++;
    //tester si l'utilisateur a cliquer sur egal
    if (op != "=")
        equals = false;
    else
        equals = true;

    current.value = "";
    //reactiver le boutton de valeur point
    pointbtn.removeAttribute("disabled");
}

//Affichage 
function afficher(clicked_value) {
    if (current.value.includes("."))
        pointbtn.setAttribute("disabled", "true");
    else
        pointbtn.removeAttribute("disabled");

    current.value += clicked_value;
}
//multiplier par -1 pour rendre un nombre negatif
function Negative() {
    current.value = current.value * (-1);
}
//Supprimer tous
function ClearAll() {
    // isfloat = false;
    current.value = "";
    previous.value = "";
    result = 0;
    arOperator = [];
    document.querySelector("h4").innerHTML = "";
}

function backspace() {
    current.value = current.value.slice(0, -1);
}