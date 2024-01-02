const fs = require('fs');

class helper {

  // constructor(page) {
  //   this.page = page;
  // }

  async writeToJSONFile(key, value) {
    // Create a JSON object with the key-value pair
    const data = {
      [key]: value,
    };
    // Convert the data object to a JSON string
    const jsonString = JSON.stringify(data, null, 2); // 2 is the number of spaces for indentation
    // Specify the file path
    const filePath = './utils/data.json';
    // Write the JSON string to the file
    fs.writeFileSync(filePath, jsonString);

  }

  async writeDataToJSONFile(key, value, path) {

    // Read the existing JSON data
    let jsonData = {};
    if (fs.existsSync(path)) {
      const fileContent = fs.readFileSync(path, 'utf8');
      jsonData = JSON.parse(fileContent);
    }
    const newEntry = { [key]: value };

    // Append the new entry to the existing JSON data
    Object.assign(jsonData, newEntry);
    fs.writeFileSync(path, JSON.stringify(jsonData, null, 2));
    // console.log(`Key-value pair (${key}: ${value}) has been written to ${path}`);
  }

  async lengthOfJSONFile(filePath) {

    let jsonData = {};
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      jsonData = JSON.parse(fileContent);
      const length = Object.keys(jsonData).length;
      // console.log("Length of JSON object: " + length);
      return length;
    }
  }

  async keysOfJSONFile(filePath) {
    let jsonData = {};
    let sum = 0;
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      jsonData = JSON.parse(fileContent);
      const keys = Object.keys(jsonData);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        sum = parseFloat(sum) + parseFloat(jsonData[key])
      }
       return sum;
    }
  }

}
module.exports = { helper }