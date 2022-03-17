const data = require('../data/zoo_data');

function isManager(id) {
  const findManager = data.employees
    .some((getManager) => getManager.managers
      .find((findManagers) => findManagers === id));
  return findManager;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees
    .filter((employees) => employees.managers
      .includes(managerId))
    .map((manager) => `${manager.firstName} ${manager.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
