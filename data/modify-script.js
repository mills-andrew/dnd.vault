const fs = require('fs');

// Read the input JSON file
const inputFile = 'D:/Projects/Obsidian/dnd-vault/data/spells.json';
const inputData = fs.readFileSync(inputFile);

// Parse the input data as a JSON array
const data = JSON.parse(inputData);

// Modify the data
data.forEach(obj => {
  obj.alias = obj.name.toLowerCase().replace(/ /g, '-');
});

// Write the modified data to a new JSON file
const outputFile = 'D:/Projects/Obsidian/dnd-vault/data/output.json';
const outputData = JSON.stringify(data, null, 2);
fs.writeFileSync(outputFile, outputData);