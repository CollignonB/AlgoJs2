var chaine = "";
for (var i = 1; i < 10; i ++){
    if ( i % 2 === 0){
        for(var j = 0; j < 17; j ++){
            (j % 2 !== 0 ? chaine += "#" : chaine += " " );
        }
        chaine +="\n";
    }else{
        for(var j = 0; j < 17; j ++){
            (j % 2 === 0 ? chaine += "#" : chaine += " " );
        }
        chaine +="\n";
    }
}
console.log(chaine);