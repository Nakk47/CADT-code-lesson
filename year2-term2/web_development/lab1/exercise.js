// ***Main***

let string = "aaa bbbb";
challenge5(string);










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
    console.log(result);
};


// Challenge 2
// TODO: Reverse any array.
function challenge2(array) {
    let tempArray = [];
    for(let i = array.length - 1; i >= 0; i --) {
        tempArray.push(array[i]);
    }
    console.log(tempArray);
};


// Challenge 3
// TODO: Calculate the average grade of a list of student.
function challenge3(arrayGrade) {
    let result = 0; // set to double
    let counter = 0;

    if(array.length === 0){ // Check the length of the array
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
    let space = " ";
    let counter = 0;
    for(let i = 0; i < text.length; i++) {
        if(text[i] === space) {
            counter += 1;
        } else if(text[text.length-1] != space) {
            counter += 1;
        } else if (text[0] === space){
            continue;
        } else if (text[text.length-1] === space) {
            continue;
        }
    }
    console.log(counter);
};


// Challenge 6
function challenge6() { // Simulate a voting system for three candidates (A/B/C)

};



