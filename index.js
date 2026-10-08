require('datejs');

function combineUsers(...args) {
  // Step 2: Initialize the return object
  const combinedObject = {
    users: []
  };

  // Step 3 + 4: Loop through args and merge each inner array using spread
  for (let i = 0; i < args.length; i++) {
    combinedObject.users = [...combinedObject.users, ...args[i]];
  }

  // Step 5: Add today's date in M/d/yyyy format
  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  // Step 7: Return the object
  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};