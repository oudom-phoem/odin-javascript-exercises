const removeFromArray = function (array, ...elementsToRemove) {
  let filteredArray = array.filter(
    (element) => !elementsToRemove.includes(element)
  );
  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
