
let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.dataset.num;
        console.log('button text is', buttonText);
        if (buttonText == "=") {
            screen.value = eval(screenValue);
        }
        else if (buttonText == "AC") {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == "OFF") {
            screenValue = "";
            screen.value = screenValue;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
};




