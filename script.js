let result = 0,
    res2 = 0;

const current = document.getElementById("input_Affichage");
const previous = document.getElementById("result");
const pointbtn = document.getElementById("point");
const btnSigne = document.getElementById("signe");
const btnBackSp = document.getElementById("backspace");
const btnCA = document.getElementById("clearall");
let i = 0,
    countOp = 0;
let operateur;
let equals;
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

//multiplier par -1 pour rendre un nombre negatif
btnSigne.addEventListener("click", function Negative() {
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
const numbers = document.querySelectorAll(".numbers")
numbers.forEach(button => {
    button.addEventListener("click", (e) => afficher(button.value))
});

function afficher(clicked_value) {

    if (current.value.includes("."))
        pointbtn.setAttribute("disabled", "true");
    else
        pointbtn.removeAttribute("disabled");
    if (current.value == "" && clicked_value == ".")
        current.value += "0" + clicked_value;
    else
        current.value += clicked_value;
}
const operateSignes = document.querySelectorAll(".operateSigne");
operateSignes.forEach(button => {
    button.addEventListener("click", (e) => OperationChoix(button.value))

})