let personalDatas = [
    {
        Nom : "Collignon",
        Prenom : "Baptsite",
        Age : 24,
        DateDeNaissance : "15/09/1995"
    },
    {
        Nom : "Zblah",
        Prenom : "Jean-Charles",
        Age : 64,
        DateDeNaissance : "15/09/1956"
    }
];

function idCard(datas){
    for (const person of datas) {
        for (const property in person) {
            console.log(`${property}: ${person[property]}`);
        }
        console.log("---------------");
    }
}
idCard(personalDatas);