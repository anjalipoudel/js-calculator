(function () {
    let screen = get.document.querySelector('.screen');
    let buttons = get.document.querySelectorAll('.btn')
    let clear = get.document.querySelector('.btn-clear');
    let equal = get.document.querySelectorAll('.btn-equal')
    buttons.forEach(function (button) {


        button.addEventListener('click', function (e) {
            let vlaue = e.target.dataset.num;
            screen.Value += vlaue;
        });
    });
    equal.addEventListener('click', function (e) {
        if (screen.Value === '') {
            screen.Value = "please enter";
        }
        else {
            let answer = eval(screen.Value);
            screen.Value = answer;
        }
    });
    clear.addEventListener('click', function (e) {
        screen.Value = '';
    })()
});