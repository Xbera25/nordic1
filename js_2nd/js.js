function init() {
    let value  = 0;

    const valueEl = document.querySelector(".js-value");
    const buttonPlus = document.querySelector(".js-plus");
    const buttonMinus = document.querySelector(".js-minus");
    const buttonReset = document.querySelector(".js-reset");
    const diffValue = document.querySelector(".js-diff");
    

    function plusClick() {
        value = value+Number(diffValue.value);
        valueEl.innerText  = value;
    };

    function minusClick() {
        value = value-Number(diffValue.value);
        valueEl.innerText  = value;
    };
    
    function resetClick() {
        value = 0
        valueEl.innerText  = value;
    };

    buttonPlus.onclick = plusClick;
    buttonMinus.onclick = minusClick;
    buttonReset.onclick = resetClick;
    
};

window.onload = init