


let currentNumber = "";
let previousNumber = "";
let operator = "";
let sonuc = 0;


const one = document.querySelector(".box.box-one");
one.addEventListener("click", function () {
    currentNumber += "1";
})
const two = document.querySelector(".box.box-two");
two.addEventListener("click", function () {
    currentNumber += "2";
});
const three = document.querySelector(".box.box-three");
three.addEventListener("click", function () {
    currentNumber += "3";
});
const four = document.querySelector(".box.box-four");
four.addEventListener("click", function () {
    currentNumber += "4";
});
const five = document.querySelector(".box.box-five");
five.addEventListener("click", function () {
    currentNumber += "5";
});
const six = document.querySelector(".box.box-six");
six.addEventListener("click", function () {
    currentNumber += "6";
});
const seven = document.querySelector(".box.box-seven");
seven.addEventListener("click", function () {
    currentNumber += "7";
});
const eight = document.querySelector(".box.box-eight");
eight.addEventListener("click", function () {
    currentNumber += "8";
});
const nine = document.querySelector(".box.box-nine");
nine.addEventListener("click", function () {
    currentNumber += "9";
});
const zero = document.querySelector(".box.box-zero");
zero.addEventListener("click", function () {
    currentNumber += "0";
});



const plus = document.querySelector(".box.box-plus");
plus.addEventListener("click", function () {
    operator = "+";
    previousNumber = currentNumber; 
    currentNumber = "";
});
const minus = document.querySelector(".box.box-minus");
minus.addEventListener("click", function () {
    operator = "-"; 
    previousNumber = currentNumber; 
    currentNumber = "";
});
const multiply = document.querySelector(".box.box-multiply");
multiply.addEventListener("click", function () {
    operator = "*";
    previousNumber = currentNumber; 
    currentNumber = "";
});
const divide = document.querySelector(".box.box-divide");
divide.addEventListener("click", function () {
    operator = "/";
    previousNumber = currentNumber;
    currentNumber = "";
});
const clear = document.querySelector(".box.box-clear");
clear.addEventListener('click', function () {
    previousNumber = "";
    currentNumber = "";
    operator = ""
    sonuc = 0;
    document.querySelector("#sonuc-yazdir").textContent = "";
});
const del = document.querySelector(".box.box-delete");
del.addEventListener('click', function () {
    currentNumber = currentNumber.substring(0, currentNumber.length - 1)
})
const equals = document.querySelector(".box.box-equals");
equals.addEventListener('click', function () {
    if(operator === "+") {
        sonuc = parseFloat(previousNumber) + parseFloat(currentNumber);
    }
    if(operator === "-") {
        sonuc = parseFloat(previousNumber) - parseFloat(currentNumber);
    }
    if(operator === "*") {
        sonuc = parseFloat(previousNumber) * parseFloat(currentNumber);
    }
    if(operator === "/") {
        sonuc = parseFloat(previousNumber) / parseFloat(currentNumber);
    }
    if(operator === "") {
        sonuc = parseFloat(currentNumber);
    }
    const sonucYazdir = document.querySelector("#sonuc-yazdir");
    if (isNaN(sonuc)) {
        sonucYazdir.textContent = `Hata: Geçersiz işlem lütfen "C" ye basınız.`;
    } else {
        sonucYazdir.textContent = `Sonuç: ${sonuc}`;
    }
    currentNumber = sonuc.toString();
})

