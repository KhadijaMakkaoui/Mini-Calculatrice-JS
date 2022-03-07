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
current = document.getElementById("input_Affichage");
previous = document.getElementById("result");

// console.log(add(2,1));
function operate(operateur, p, c) {
    let n1 = parseFloat(p);
    let n2 = parseFloat(c);

    switch (operateur) {
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
    return parseFloat(result);
}

function OperationChoix(operateur) {
    valPrev = previous.value;
    // valPrev = previous.value;

    if (!previous.value) {

        previous.value = current.value + operateur;
    } else {
        previous.value = operate(operateur, valResult, current) + operateur;
    }
    current.value = " ";
}
// previous.value = operate(operateur, previous, current);



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
    current.value = " ";
    previous.value = " ";
}

function backspace() {
    current.value = current.value.slice(0, -1);
}