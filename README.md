### Regex exercise

[Learn Regular Expressions (Regex)](https://www.youtube.com/watch?v=ZfQFUJhPqMM)

```JavaScript
// src/index.js

// RegExp.prototype.test() method
console.log(/the/.test("The dog chased the cat")); // true
console.log(/Hello/.test("Hello, World!")); // true

// Match a literal string
console.log(/Waldo/.test("Somewhere Waldo is hiding in this text.")); // true

// Match a literal string with different possibilities
console.log(/cat|dog|bird|fish/.test("James has a pet cat.")); // true
console.log(/cat|dog|bird|fish/.test("James has a pet dog.")); // true
console.log(/cat|dog|bird|fish/.test("James has a pet bird.")); // true
console.log(/cat|dog|bird|fish/.test("James has a pet fish.")); // true

// Ignore case while matching
console.log(/HELLO, WORLD!/i.test("Hello, World!")); // true

// String.prototype.match() method - Extract matches
console.log("Extract the word 'coding' from this string.".match(/coding/)); // [ 'coding' ]

// Find more than the first match
console.log("Repeat, Repeat, Repeat".match(/repeat/gi)); // [ 'Repeat', 'Repeat', 'Repeat' ]

// Match anything with wildcard .
console.log("I'll hum a song".match(/hu./)); // [ 'hum' ]
console.log("Bear hug".match(/hu./)); // [ 'hug' ]

// Match single character with multiple possibilities
console.log("Beware of bug in the code.".match(/[aeiou]/gi)); // [  'e', 'a', 'e',  'o', 'u', 'i',  'e', 'o', 'e']

// Match letters of the alphabet
console.log("The quick brown fox jumps over the lazy dog.".match(/[a-z]/gi)); // [  'T', 'h', 'e', 'q', 'u', 'i', 'c',  'k', 'b', 'r', 'o', 'w', 'n', 'f',  'o', 'x', 'j', 'u', 'm', 'p', 's',  'o', 'v', 'e', 'r', 't', 'h', 'e',  'l', 'a', 'z', 'y', 'd', 'o', 'g']

// Match numbers and letters of the alphabet
console.log("Blueberry 3.141592653s are delicious".match(/[0-9a-z]/gi)); // [  'B', 'l', 'u', 'e', 'b', 'e',  'r', 'r', 'y', '3', '1', '4',  '1', '5', '9', '2', '6', '5',  '3', 's', 'a', 'r', 'e', 'd',  'e', 'l', 'i', 'c', 'i', 'o',  'u', 's']

// Negate in characters group
console.log("3 blind mice".match(/[^0-9aeiou]/gi)); // [  ' ', 'b', 'l',  'n', 'd', ' ',  'm', 'c']

// Match characters that occur one or more times
console.log("Mississippi".match(/s+/g)); // [ 'ss', 'ss' ]

// Match characters that occur zero or more times
console.log("gooooooooal!".match(/go*/)); // [ 'goooooooo' ]
console.log("gut feeling!".match(/go*/)); // [ 'g' ]
console.log("over the moon!".match(/go*/)); // null
console.log("Aaaaaaaaaaarrrgh!".match(/Aa*/)); // [  'Aaaaaaaaaaa']

// Find characters with lazy matching - ?
console.log("titanic".match(/t[a-z]*i/)); // [ 'titani' ]
console.log("titanic".match(/t[a-z]*?i/)); // [ 'ti' ]
console.log("<h1>Winter is coming</h1>".match(/<.*>/)); // [ '<h1>Winter is coming</h1>' ]
console.log("<h1>Winter is coming</h1>".match(/<.*?>/)); // [ ''<h1>'' ]

// Find one or more criminals in a hunt
const crowd = "P1P2P3P4P5P6CCCP7P8P9";
console.log(crowd.match(/C+/g)); // [ 'CCC' ]

// Match beginning string pattern
console.log(/^Cal/.test("Cal and Ricky both like racing.")); // true

// Match ending string pattern
console.log(/caboose$/.test("The last car on a train is the caboose")); // true

// Match all letters and numbers
console.log("The 5 boxing wizards jump quickly.".match(/\w/g)); // [  'T', 'h', 'e', '5', 'b', 'o',  'x', 'i', 'n', 'g', 'w', 'i',  'z', 'a', 'r', 'd', 's', 'j',  'u', 'm', 'p', 'q', 'u', 'i',  'c', 'k', 'l', 'y']
console.log("The 5 boxing wizards jump quickly.".match(/[a-z0-9_]/gi)); // [  'T', 'h', 'e', '5', 'b', 'o',  'x', 'i', 'n', 'g', 'w', 'i',  'z', 'a', 'r', 'd', 's', 'j',  'u', 'm', 'p', 'q', 'u', 'i',  'c', 'k', 'l', 'y']

// Match everything but letters and number
console.log("The 5 boxing wizards jump quickly.".match(/\W/g)); // [ ' ', ' ', ' ', ' ', ' ', '.' ]

// Match all numbers
console.log("Your sandwich will be $5.00".match(/\d/g)); // [ '5', '0', '0' ]
console.log("Your sandwich will be $5.00".match(/[0-9]/g)); // [ '5', '0', '0' ]

// Match all non-numbers
console.log("Your sandwich will be $5.00".match(/\D/g)); // [  'Y', 'o', 'u', 'r', ' ',  's', 'a', 'n', 'd', 'w',  'i', 'c', 'h', ' ', 'w',  'i', 'l', 'l', ' ', 'b',  'e', ' ', '$', '.']

// Restrict possible usernames
// 1) If there are numbers, they must be at the end.
// 2) Letters can be lowercase and uppercase.
// 3) At least two characters long. Two-letter names can't have numbers.
console.log(/^[a-z]{2,}\d*$/i.test("JackOfAllTrades")); // true
console.log(/^[a-z]{2,}\d*$/i.test("JC")); // true
console.log(/^[a-z]{2,}\d*$/i.test("J2")); // false

// Match whitespaces
console.log("Whitespace is important in separating words.\nA new line. \tTabbed!".match(/\s/g)); // [  ' ',  ' ', ' ',  ' ',  ' ', '\n',  ' ',  ' ', ' ',  '\t']

// Match non-whitespaces
console.log("Whitespace is important in separating words.\nA new line. \tTabbed!".match(/\S/g));

// Specify upper and lower number of matches
console.log(/Oh{0,5} no/.test("Ohhh no")); // true
console.log(/Oh{5,} no/.test("Ohhh no")); // false
console.log(/Haz{3,6}ah/.test("Hazzzzah")); // true
console.log(/Tim{4}ber/.test("Timmmmber")); // true
console.log(/Tim{3}ber/.test("Timmmmber")); // false

// Check for all  or none - ?
console.log(/favou?rite/.test("favorite")); // true
console.log(/favou?rite/.test("favourite")); // true

// Positive and negative lookahead

// Positive lookahead - If there is a 'u' after 'q', match the 'q'
console.log("qu".match(/q(?=u)/)); // [ 'q' ]
console.log("qt".match(/q(?=u)/)); // null

// Negative lookahead - If there is no 'u' after 'q', match the 'q'
console.log("qu".match(/q(?!u)/)); // null
console.log("qt".match(/q(?!u)/)); // [ 'q' ]

// Use lookahead to check two or more patterns within one string
// Match 5 or more characters and 2 or more digits
console.log(/(?=\w{5})(?=\D*\d{2})/.test("astronaut")); // false
console.log(/(?=\w{5})(?=\D*\d{2})/.test("astronaut22")); // true
console.log(/(?=\w{5})(?=\D*\d{2})/.test("astro22naut")); // true
console.log(/(?=\[a-zA-Z]{5})(?=\D*\d{2})/.test("ast22ronaut")); // false

// Reuse patterns using capture groups

// '\1' represents the '(\w+)' capture group
// 'regex regex' is the full match
// 'regex' is what captured in a single capture group
console.log("regex regex".match(/(\w+)\s\1/)); // [  'regex regex',  'regex',]

console.log("regex string".match(/(\w+)\s\1/)); // null

console.log("42 42 42".match(/(\d+)\s\1\s\1/)); // [ '42 42 42', '42' ]
console.log(/(\d+)\s\1\s\1/.test("42 42 42")); // true

// Use capture groups to search and replace
console.log("The sky is silver.".replace(/silver/, "blue")); // The sky is blue.

// '$1' refers to the 1st capture group '(\w+)' in the regex
// '$2' refers to the 2nd capture group '(\w+)' in the regex
console.log("Denny Hong".replace(/(\w+)\s(\w+)/, "$2 $1")); // Hong Denny

// Remove whitespace from start and end
console.log("    Hello, World!   ".replace(/^\s+|\s+$/g, "")); // Hello, World!
```
