const data = require('../data/zoo_data');

function getSpeciesByIds(ids, ids2) {
  const result = data.species.filter((eachElement) => eachElement.id === ids
  || eachElement.id === ids2);
  return result;
}
module.exports = getSpeciesByIds;
