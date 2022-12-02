const utils = require('./utils.js');
const prompt = require('readline-sync');

//Task 1

console.log("MATRIX PRODUCT-------------");
utils.print(utils.matProduct
(
[[1,2,3],[4,5,3], [2,1,3], [2,9,2]], 
[[4,2,10,3],[9,1,15,15],[8,9,6,0]]
));

//TASK 2
console.log("\n\n\n\nMATRIX SUM-------------");
utils.print(utils.matSum
(
[[1,3,4],[1,11,3], [2,22,3], [2,2,32]], 
[[4,12,1],[6,14,10],[8,6,17], [7,81,10]]
));

//Task 3
console.log("\n\n\n\nMATRIX ROW SUM-------------");
console.log(utils.matRowSum
(
    [[1,2,2],[4,5,10],[7,18,9]]
));

//Task 4
const sentence_1 = prompt.question("Type a sentence\n");
console.log(`The sentence was \"${sentence_1}\".The number of words is: `, utils.count(sentence_1));


//Task 5
const sentence_2 = "     Hi  I am a sentence    ,    ";
console.log(`The sentence was \"${sentence_2}\"`);
console.log(`The trimmed sentence is\"${utils.trim(sentence_2)}\"`);