function init() {
  let value = 0;

  const buttonPlus = document.querySelector(".js-plus");
  const buttonMinus = document.querySelector(".js-minus");
  const tabs = document.querySelector(".js-tabs");
  index=0;

  function plusClick() {
    const el = document.createElement('button');
    const new_el = tabs.appendChild(el);

    index = index+1;
    new_el.style.fontSize = 5*index+'px';
    new_el.innerText = "Таб " + index;
    new_el.id = "button" + index
    

    if (index%2===0) {
      new_el.style.backgroundColor='green';
    }
  }

  function minusClick() {
    const el_del = document.getElementById("button" + index)
    tabs.removeChild(el_del)
    index = index-1;
  }

  buttonPlus.onclick = plusClick;
  buttonMinus.onclick = minusClick;
}

window.onload = init;
