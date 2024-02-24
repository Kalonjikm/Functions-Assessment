const firstLetterName = function(name) {
    alert("The name " + name + " starts with the letter " + name[0]);
}


const divisibleByTwo = function(num) {
    return console.log("is " + num + " divisible by 2: " + (num % 2 == 0));
}


const largestNum = (arr1) => {
    return console.log("The largest number in the array: [" + arr1 + "] is " + (Math.max(...arr1)))
};


firstLetterName("James");
divisibleByTwo(78);
largestNum([5, 73, 98, 56, 8]);