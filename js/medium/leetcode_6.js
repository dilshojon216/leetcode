var convert = function (s, numRows) {
  if (targetRows == 1) {
    return inputString;
  }

  // Start the process on row 1, heading down
  let currentRow = 1;
  let headingDown = true;

  // Initialise an array to store the zigzag data
  let zigZagArray = [];

  // Loop through the requested number of rows
  for (let i = 0; i < targetRows; i++) {
    // Initialise each zigzag row as an empty array
    zigZagArray[i] = [];
  }

  // Loop through the string
  for (let i = 0; i < inputString.length; i++) {
    // Add the current letter to the current row
    zigZagArray[currentRow - 1].push(inputString[i]);

    if (headingDown) {
      currentRow++;

      // Check if we've exceeded the maximum number of rows
      if (currentRow > targetRows) {
        // Start heading back up again
        currentRow = targetRows - 1;
        headingDown = false;
      }
    } else {
      currentRow--;

      // Check if we've exceeded the top row
      if (currentRow < 1) {
        // Start heading down again
        currentRow = 2;
        headingDown = true;
      }
    }
  }

  // Initialise a return string
  let totalString = "";

  // Loop through the constructed rows
  for (let i = 0; i < targetRows; i++) {
    // Append the row's characters joined together
    totalString += zigZagArray[i].join("");
  }

  return totalString;
};
