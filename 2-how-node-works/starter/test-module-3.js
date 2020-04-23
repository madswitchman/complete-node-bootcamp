//Will only execute once due to caching in Node.js
console.log('Hello from the module');

module.exports = () => console.log('Log this beautiful text');
