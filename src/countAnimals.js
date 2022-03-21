const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.reduce((accumulator, specie) => {
      accumulator[specie.name] = specie.residents.length;
      return accumulator;
    }, {});
  }
  const findAnimal = data.species.find((getAnimal) => getAnimal.name === animal.specie);
  if (animal.sex) {
    const filterBySex = findAnimal.residents.filter((resident) => resident.sex === animal.sex);
    return filterBySex.length;
  }
  return findAnimal.residents.length;
}
module.exports = countAnimals;
