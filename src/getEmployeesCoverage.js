const data = require('../data/zoo_data');

const getSpecies = ((element) => {
  const specie = data.species
    .filter((getSpecie) => element.some((e) => e === getSpecie.id));
  const mps = specie.map((sp) => sp.name);
  return mps;
});

const getLocation = ((element) => {
  const specie = data.species
    .filter((getSpecie) => element.some((e) => e === getSpecie.id));
  const mpl = specie.map((sp) => sp.location);
  return mpl;
});

function getEmployee(params) {
  return { id: params.id,
    fullName: `${params.firstName} ${params.lastName}`,
    species: getSpecies(params.responsibleFor),
    locations: getLocation(params.responsibleFor) };
}

function listAll() {
  const arr = [];
  data.employees.forEach((e) => arr.push(getEmployee(e)));
  return arr;
}

function getEmployeesCoverage(input) {
  if (!input) return listAll();
  const employee = data.employees
    .find((element) => element.firstName === input.name
    || element.lastName === input.name
    || element.id === input.id);
  if (!employee) throw new Error('Informações inválidas');
  return getEmployee(employee);
}

module.exports = getEmployeesCoverage;
