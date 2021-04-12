// RegExp.prototype.test() method
console.log(/the/.test("The dog chased the cat")); // true
console.log(/Hello/.test("Hello, World!")); // true

// Match a literal string
console.log(/Waldo/.test("Somewhere Waldo is hiding in this text.")); // true

// Match a literal string with different possibilities
console.log(/cat|dog|bird|fish/.test("James has a pet cat.")); // true
