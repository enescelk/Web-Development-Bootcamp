import superheroes from 'superheroes';
import generateName from 'sillyname';

var sillyName = generateName();
var randomSuperheroes = superheroes.random();

console.log(`My name is ${sillyName}.`);

console.log(`Hello ${randomSuperheroes}`); 