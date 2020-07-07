function isEven(number){
    var int = Math.round(number);
    return int % 2 === 0 ? true : false;
}

console.log(isEven(prompt("rentrez un nombre : ")));