// Write your code below
let isUnique = false;
let hasUniqueChars = function(userWord) {
    let userString = userWord;
    let strArray = userString.split("");
    for (let i = 0; i < strArray.length; i++) { 
        for (let j = 0; j < strArray.length; j++) {
            if(strArray[i] == strArray[j] && i != j) {
                isUnique = false;
                return isUnique;
            }
        }
    }
    isUnique = true;
    return isUnique;
}

console.log(hasUniqueChars("Quickredfox"));
