const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const output = { child: 0, adult: 0, senior: 0 };

  entrants.forEach((verify) => {
    if (verify.age < 18) {
      output.child += 1;
    } if (verify.age >= 18 && verify.age < 50) {
      output.adult += 1;
    } if (verify.age >= 50) {
      output.senior += 1;
    }
  });
  return output;
}

function calculateEntry(entrants) {
  if (!entrants || !entrants.keys) return 0;

  const count = countEntrants(entrants);
  const child = count.child * data.prices.child;
  const adult = count.adult * data.prices.adult;
  const senior = count.senior * data.prices.senior;

  return child + adult + senior;
}

module.exports = { calculateEntry, countEntrants };
