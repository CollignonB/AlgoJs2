let table = [1,2,5,7,684512,23,0,654,8];

function bigger (table){
    let isBigger = 0;

    for (const value of table) {
        if(value > isBigger){
            isBigger = value;
        }
    }
    return isBigger;
}

console.log(bigger(table));