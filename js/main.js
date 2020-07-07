function toUnderscore (chaine) {
   if(typeof(chaine) !== "string"){
       return "Erreur, veuillez rentrer une chaine de caractère valable"

   }else{
    return chaine.replace(/-/g, "_");
   }
}

let chaine = "Je-suis-un-chat";
let pasChaine = 4;
console.log(toUnderscore(pasChaine));
console.log(toUnderscore(chaine));
