let result = 0,
    res2 = 0;

const current = document.getElementById("input_Affichage");
const previous = document.getElementById("result");
const pointbtn = document.getElementById("point");
const btnSigneNegative = document.getElementById("signe");
const btnBackSp = document.getElementById("backspace");
const btnCA = document.getElementById("clearall");
const operateSignes = document.querySelectorAll(".operateSigne");
const numbers = document.querySelectorAll(".numbers")

let i = 0,
    countOp = 0,
    operateur, equals;
let n1 = 0,
    n2 = 0;
//tableau des operateurs de l'operation
let arOperator = new Array();

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
        return nb1;
    }
    return nb1 / nb2;
}

function operate(op) {
    n2 = parseFloat(current.value);
    n1 = parseFloat(res2);
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
    //Afficher les operations entrer par l'utilisateur
    previous.value += current.value + "" + op;
    //stocker l'operateur dans le tableau
    arOperator[i] = op;
    //Effectuer l'operation à l'aide du premier operateur entrer
    operate(arOperator[i - 1])
        //tester si l y'a deja un resultat sinon le premier operateur va etre current.value
    if (res2 == 0) {
        res2 = current.value;
    } else
        res2 = result;
    //affichage du resultat
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

//multiplier par -1 pour rendre un nombre negatif
btnSigneNegative.addEventListener("click", function Negative() {
    current.value = current.value * (-1);
})

//Supprimer tous
btnCA.addEventListener("click", function ClearAll() {
    current.value = "";
    previous.value = "";
    result = 0;
    arOperator = [];
    document.querySelector("h4").innerHTML = "";
})

//Backspace
btnBackSp.addEventListener("click", function backspace() {
        current.value = current.value.slice(0, -1);
    })
    //affichage
function afficher(clicked_value) {

    if (current.value.includes("."))
        pointbtn.setAttribute("disabled", "true");
    else
        pointbtn.removeAttribute("disabled");
    //Traiter le cas de vergule sans valeur precedante
    if (current.value == "" && clicked_value == ".")
        current.value += "0" + clicked_value;
    else
        current.value += clicked_value;
}
numbers.forEach(button => {
    button.addEventListener("click", (e) => afficher(button.value))
});
//Apres clicker sur un signe d'operation
operateSignes.forEach(button => {
        button.addEventListener("click", (e) => OperationChoix(button.value))

    })
    //manipuler les valeurs enter par clavier
window.addEventListener("keyup", (e) => {
        //manipulation des nombre
        if (e.key == '0' || e.key == '1' || e.key == '2' || e.key == '3' || e.key == '4' || e.key == '5' || e.key == '6' || e.key == '7' ||
            e.key == '8' || e.key == '9' || e.key == '.') {
            clickBtnNumber(e.key);
        }
        //manipulation des signe d'operations
        if (e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/' || e.key == '=')
            clickBtnOperator(e.key);

    })
    //Effectuer le click si l'utilisateur click sur un nombre 
function clickBtnNumber(key) {
    numbers.forEach(btn => {
        if (btn.value == key)
            btn.click();

    })
}
//Effectuer le click si l'utilisateur click sur un operant 

function clickBtnOperator(key) {
    operateSignes.forEach(btn => {
        if (btn.value == key)
            btn.click();
    })
}