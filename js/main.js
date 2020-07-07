let mesCourses = [
    "Pains",
    "Nutella",
    "Jambon",
    "Yahourt",
    "Pâtes complètes",
    "Bacon",
    "Steak",
    "Pain à burger",
    "Sauces"
]

function oubliePas(course){
    let dernier = course.length - 1;
    console.log(`oublies pas les ${course[0]} , les ${course[dernier]} et les ${course[4]} !`);
}

oubliePas(mesCourses);