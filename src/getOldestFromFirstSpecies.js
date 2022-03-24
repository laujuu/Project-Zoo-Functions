const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const findEmployee = data.employees.find((employee) => employee.id === id);
  const findResponsable = findEmployee.responsibleFor.find((animal) => animal);
  const findAnimal = data.species.find((specie) => specie.id === findResponsable);
  const getOlder = findAnimal.residents.reduce((value, animal) => Math.max(value, animal.age), 0);
  const output = findAnimal.residents.find(({ age }) => age === getOlder);
  return [output.name, output.sex, output.age];
}

module.exports = getOldestFromFirstSpecies;
