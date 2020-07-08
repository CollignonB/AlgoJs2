let tableNum = [1,2,5,7,684512,23,0,654,8];
let tableStrings = ["sbfg","wzexrctubyiregfdghsdf", "zgdnnh", "ugfmlkdfblpns","za"];

function bigger (table){
    let isBigger = 0;
    if (isStringArray(table)){
        let isBiggerChain = "";
        for (const value of table) {
            if(value.length > isBiggerChain.length){
                isBiggerChain = value;
            }
        }
        return isBiggerChain;
    }else if(isIntArray(table)){
        for (const value of table) {
            if(value > isBigger){
                isBigger = value;
            }
        }
        return isBigger;
    }
}

function isIntArray(table){
    for (const value of table) {
        return (typeof(value) !== "number") ? false : true;
    }
}

function isStringArray(table){
    for (const value of table) {
        return (typeof(value) !== "string") ? false : true;
    }
}

console.log(bigger(tableStrings));