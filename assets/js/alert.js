'use strict'

let div = document.body.children[0];
console.log(div);
let ul = div.nextElementSibling;
console.log(ul);
let li = ul.lastElementChild;
console.log(li);
first.className = 'li__class';
second.className = 'li__class';

let a = +prompt('Введите число');
for (let i = 0; i < a; i++){
    const block = document.createElement('div');
    block.innerText = 'Блок ' + (i + 1);
    div.before(block)
}




let form = document.createElement("form");
form.className = "form";
form.style.marginTop = "5px";
form.style.border = "1px solid black";
form.style.padding = "20px";
form.style.width = "500px";
document.body.append(form);

let inputName = document.createElement("input");
inputName.className = "input";
inputName.style.marginTop = "5px";
inputName.style.border = "1px solid blue";
inputName.style.padding = "10px";
inputName.style.width = "100%";
form.append(inputName);

let inputMail = document.createElement("input");
inputMail.className = "input";
inputMail.style.marginTop = "5px";
inputMail.style.border = "1px solid blue";
inputMail.style.padding = "10px";
inputMail.style.width = "100%";
form.append(inputMail);

let newBtn = document.createElement("button");
newBtn.className = "btn__red";
newBtn.innerHTML = "Регистрация";
newBtn.style.background = "red";
newBtn.style.marginTop = "20px";
form.append(newBtn);