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
        return "Désoler...la division sur 0 zéro ne peut pas être éffectué ";
    }
    return nb1 / nb2;
}
isfloat = false;
let result = 0;
let current = document.getElementById("input_Affichage");
let previous = document.getElementById("result");
let operateur;

function operate(op) {
    // alert(typeof(parseFloat(current.value)));
    n1 = parseFloat(current.value);
    n2 = parseFloat(previous.value);
    // let op = operateur;

    if (isNaN(n1) || isNaN(n2))
        return

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
            result = division(n1, n2);
            break;
        default:
            result = 0;
            break;
    }
    // return result;
}


function OperationChoix(op) {
    if (current.value === "") {
        return;
    }
    if (previous.value !== "") {
        operate(op)
        previous.value = result;

    } else
        previous.value = current.value;

    current.value = "";
}



//Affichage 
function afficher(clicked_value) {

    document.getElementById("input_Affichage").value += clicked_value;
    return clicked_value;
    // operate()
    // if (clicked_value == ".") {
    //     // if (output.value == " ") {
    //     //     output.value += 0;
    //     // }
    //     output.value += clicked_value;
    //     isfloat = true;
    // } else {
    //     if (isfloat) {
    //         document.getElementById("point").disabled = true;
    //         output.value += clicked_value;
    //     } else {
    //         // document.getElementById("point").disabled=false;
    //         output.value += clicked_value;
    //     }
    // }
}
//Supprimer tous
function ClearAll() {
    // isfloat = false;
    // alert("Please select");
    current.value = "";
    previous.value = "";
    result = 0;
}

function backspace() {
    current.value = current.value.slice(0, -1);
}