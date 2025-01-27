// ***Main***






    // Challenge 1
let start1 = document.getElementById("button-start");
let output1 = document.getElementById("output1");


// let width = 10;
// let height = 0;


start1.onclick = function() {
    let widthValue = prompt("Enter the width: ");
    let heightValue = prompt("Enter the height: ");
    output1.innerHTML = challenge1(widthValue, heightValue);
}

// myHeight.onclick = function() {
//     let heightValue = prompt("Enter the height: ");
//     height = heightValue
// }

// output.textContent = challenge1(width, height)



console.log(measure);


























// ***Functions***

// Challenge 1
// TODO: Draw a rectangle in the console using stars.
function challenge1(width, height) {
    let result = '';
    for(let i = 1; i <= height; i++ ) {
        for(let j = 1; j <= width; j++) {
            result += '*';
        }
        result += "\n";
    }
    result = result.replace(/\n/g, '<br>');
    return result;
};

// Challenge 2
// TODO: Reverse any array.
function challenge2(array) {
    let tempArray = [];
    let myLength = array.length;
    for(let i = (myLength - 1); i >= 0; i --) {
        tempArray.push(array[i]);
    }
    console.log(tempArray);
};


// Challenge 3
// TODO: Calculate the average grade of a list of student.
function challenge3(arrayGrade) {
    let result = 0; // set to double
    let counter = 0;

    if(arrayGrade.length === 0){ // Check the length of the array
        result = 0;
    } else {


        for(let i = 0; i < arrayGrade.length; i++) {
            result += arrayGrade[i];
            counter += 1;
        }
        result = result / counter;
    }
    console.log(result);
};


// Challenge 4
// TODO: Write a function to count how many times a character appears in a string.
function challenge4(text, char) {
    let counter = 0;
    for(let i = 0; i < text.length; i++) {
        if (text[i] === char) {
            counter += 1;
        }
    }
    console.log(counter);
};

// Challenge 5
// TODO: Count the numbers of words in a sentence

function challenge5(text) {
    text = text.trim();
    let counter = text.split(" ").length;
    console.log(counter);
};


// Challenge 6
// Simulate a voting system for three candidates (A/B/C)
function challenge6(arrayOfVotes) { 
    let a = 0;
    let b = 0;
    let c = 0;
    if(arrayOfVotes.length == 0) {
        console.log("There are not any vote yet.");
        return;
    }

    for(let i = 0; i < arrayOfVotes.length; i ++) {
        if(arrayOfVotes[i] === 'A') {
            a += 1;
        } else if (arrayOfVotes[i] === 'B') {
            b += 1;
        } else if (arrayOfVotes[i] === 'C') {
            c += 1;
        }
    }



    if (a === b && a === c && b === c) {
        console.log("A B and C are equal.");
    } else if(a === b) {
        console.log("A and B are both winners.");
    } else if(a === c) {
        console.log("A and C are both winners.");
    } else if(a > b && a > c) {
        console.log("A is the winner.");
    } else if (b > a && b > c) {
        console.log("B is the winner.");
    } else if (c > a && c > b) {
        console.log("C is the winner.");
    }
};



