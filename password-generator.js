//Generating random password
const generator = require('generate-password');

const password = generator.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase:true,
    excludeSimilarCharacters: false,
    strict: true,

});

console.log("Your random password is :", password);

