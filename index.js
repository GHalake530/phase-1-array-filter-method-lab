// function that returns drivers name matching
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  // Function that find drivers whose name start with the letters they want
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  // check if name matches
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  // testing
  module.exports = {
    findMatching,
    fuzzyMatch,
    matchName,
  };
  