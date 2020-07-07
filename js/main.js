function facto (number){
    let result = 1;
    if (!Number.isInteger(number)){
        return ("Erreur : veuillez rentrer un nombre entier");
    }else{
        for (let i = 1; i <= number; i++){
            result *= i;
        }
    }
    return result;
}

console.log(facto(4.1));