let display = document.getElementById('display');

function appendNumber(number) {
    display.innerText += number;
    adjustFontSize();
}

function appendOperator(operator) {
    display.innerText += ' ' + operator + ' ';
    adjustFontSize();
}

function clearDisplay() {
    display.innerText = '';
    adjustFontSize();
    changeBoxShadow('rgba(0, 0, 0, 0.1)'); // Reset box-shadow to default
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText.replace(/×/g, '*').replace(/÷/g, '/'));
        changeBoxShadow('rgba(0, 0, 0, 0.1)'); // Reset box-shadow to default if no error
    } catch {
        display.innerText = 'Error';
        changeBoxShadow('rgba(248, 105, 3, 0.79)'); // Change box-shadow to orange if an error occurs
    }
    adjustFontSize();
}

function adjustFontSize() {
    let fontSize = 2; // Starting font size in em
    display.style.fontSize = fontSize + 'em';

    while (display.scrollWidth > display.clientWidth) {
        fontSize -= 0.1;
        display.style.fontSize = fontSize + 'em';
    }
}

function changeBoxShadow(color) {
    let calculator = document.querySelector('.calculator');
    calculator.style.boxShadow = `0 4px 30px ${color}`;
}
