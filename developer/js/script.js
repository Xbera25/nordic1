function init() {
  
   const output = document.querySelector(".js-output");
   const num = Number(prompt("Сколько блоков сделать?")); 

    for(let index = 1; index<=num; index+=1){
      const el = document.createElement('button');
      const new_el = output.appendChild(el);

      new_el.innerText = "Таб " + index;   
  
      if (index%4===0) {
        new_el.style.backgroundColor='red';
      }
    }
}


window.onload = init;