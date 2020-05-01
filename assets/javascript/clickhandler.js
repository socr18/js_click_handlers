const  colorBox = document.querySelector("#color-box");

// JS for the gray button
const grayButton = document.querySelector("#gray-button");

grayButton.addEventListener("click", function () {
    colorBox.className = "gray";
})

// JS for the blue button
const blueButton = document.querySelector("#blue-button");

blueButton.addEventListener("click", function () {
    colorBox.className = "blue";
})

// JS for the pink button
const pinkButton = document.querySelector("#pink-button");

pinkButton.addEventListener("click", function () {
    colorBox.className = "pink";
})

// JS for adding one to the count

let count = 0;
const countspan = document.querySelector("#countspan");
const counterButton = document.querySelector("#counter-button");

counterButton.addEventListener("click", function () {
    count ++;
    if ( count > 0) {
        countspan.innerHTML = count;
    }
})

// JS for even or odd

const evenOrOddButton = document.querySelector("#even-or-odd-button");

evenOrOddButton.addEventListener("click", function () {
    numberCount = Number(countspan.innerHTML);

    if (numberCount % 2 == 0)
        return alert("Even Number");
    else
        return alert("Odd Number");
})