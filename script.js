function add(nb1,nb2) {
    return nb1+nb2;
}
function soustract(nb1,nb2) {
    return nb1-nb2;
}
function multiple(nb1,nb2) {
    return nb1*nb2;
}
function divise(nb1,nb2) {
    if(nb2==0){
        return "Désoler...la division sur 0 zéro ne peut pas être éffectué ";
    }
    return nb1/nb2;
}
// console.log(add(2,1));
function operate(operateur,n1,n2) {
    switch (operateur) {
        case "+":
            result=add(n1,n2);
        break;
        case "-":
            result=soustract(n1,n2);
        break;
        case "*":
            result=multiple(n1,n2);
        break;
        case "/":
            result=division(n1,n2);
        break;
        default:
            result=0;
            break;
    }
    return result;
}