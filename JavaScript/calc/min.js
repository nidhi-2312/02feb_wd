let result = document.getElementById('inp');
let buttons = document.querySelectorAll('button');
let screenValue = '';
for (i of buttons) {
    i.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText; //screenValue = screenValue + buttonText
            result.value += screenValue;
        }
        
        else if (buttonText == 'C') {
            screenValue = "";
            result.value = screenValue;
        }
        else if (buttonText == '=') {
            result.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            result.value = screenValue;
        }
        
    })
}

