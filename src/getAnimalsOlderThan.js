const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const findAnimal = data.species
    .find((animalName) => animalName.name === animal);
  return findAnimal.residents
    .every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;
