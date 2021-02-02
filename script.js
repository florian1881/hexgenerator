const letterValues = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F'
];

function getRandomArrayValue(array) {
    return array[Math.floor(Math.random() * Math.floor(array.length))];
}


function createHexArray() {
    const numberValues = [];
    for (let i = 0; i < 10; i++) {
        numberValues.push(i);
    }
    const hexArray = [...numberValues, ...letterValues];
    return hexArray;
}

function getRandomHexValue() {
    let hexValue = "#";
    for (let i = 0; i < 6; i++) {
        hexValue += getRandomArrayValue(hexArray);
    }
    return hexValue;
}

function assignHexValue(id) {
    let elt = document.getElementById(id);
    elt.innerHTML = hexValue;
}

function changeColor(id) {
    let elt = document.getElementById(id);
    elt.style.backgroundColor = hexValue;
}

function doTheJob() {
    hexArray = createHexArray();
    hexValue = getRandomHexValue();
    assignHexValue("but");
    changeColor("page");
}

// event listener


// let button = document.getElementById("but");
// button.addEventListener("mouseover", doTheJob());
 
// I need to debug this part.

// Tests 
console.log(letterValues.length === 6);
console.log(hexArray.length === 16);
console.log(hexValue.length === 7);
console.log(hexValue.includes("#"));
console.log(hexValue.indexOf("#")===0);