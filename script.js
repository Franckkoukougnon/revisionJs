// Boucle For each

var color =['rouge', 'bleu', 'vert'];

var person = {
    firstName: 'Koukougon',
    lastName : 'Franck',
    age: 13,
    hasChild : true,
};

for (id in color){
    console.log(`Ma couleur préférée est ${color[id]}`);
};

for (prop in person){
    console.log(`la cle ${prop} est la propriété de ${person[prop]}`);
}