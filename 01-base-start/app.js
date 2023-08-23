"use strict";

const firstInput = document.getElementById("input1");
const secondInput = document.getElementById("input2");

const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

const submitBtn = document.getElementById("submit");
const printResult = document.getElementById("result");

function calculateExpression(firstValue, secondValue, action) {
    return action == "+" ? firstValue + secondValue : firstValue - secondValue;
}

let action = "+";

plusBtn.onclick = function () {
    action = "+";
};

minusBtn.onclick = function () {
    action = "-";
};

submitBtn.onclick = function () {
    let firstValue = Number(firstInput.value);
    let secondValue = Number(secondInput.value);
    printResult.textContent = calculateExpression(
        firstValue,
        secondValue,
        action
    );
};
