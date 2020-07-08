var inputUser = [];
let i = 0;
do {
    inputUser.push(prompt("cc"));
}while(!inputUser.includes("fin"));

inputUser.pop();
console.log(inputUser);