const data = require('../data/zoo_data');

function getAnimalMap(options) {

  // if (options.includeNames === true) {
  //   const nex = data.species.filter((element) => element.name && element.location === 'NE')
  //     .map((im) => im.name);
  //   return { NE: nex };
  // }

}
console.log(getAnimalMap({ includeNames: true }));
module.exports = getAnimalMap;
