let but = document.querySelector("button");
let nameI = document.querySelector(".nameI");
let dateI = document.querySelector(".dateI");
let amountI = document.querySelector(".amountI");
// let delet = document.querySelector(".delet");

document.addEventListener("click", function (e) {
  if (e.target.className === "delet") e.target.parentNode.remove();
});

function creatDeletButton(parent) {
  let but = document.createElement("button");
  but.className = "delet";
  but.textContent = "X";

  parent.appendChild(but);
}

function addTd(nameI, dateI, amountI) {
  let tr = document.createElement("tr");
  let n = document.createElement("td");
  let d = document.createElement("td");
  let a = document.createElement("td");

  n.textContent = nameI.value;
  tr.appendChild(n);

  d.textContent = dateI.value;
  tr.appendChild(d);

  a.textContent = amountI.value;
  tr.appendChild(a);

  creatDeletButton(tr);

  let firstTr = document.querySelector("tr");

  firstTr.after(tr);
}

let checkEmpty = function (input) {
  if (input.value === "") {
    input.style.border = "solid 1px red";
    return 1;
  }
  input.style.border = "solid 1px #c9c4c4";
  return 0;
};

but.onclick = function () {
  let b = 0;
  b += checkEmpty(nameI);
  b += checkEmpty(dateI);
  b += checkEmpty(amountI);
  if (b !== 0) return;
  let par = document.querySelector(".empty");
  if (par) par.remove();
  addTd(nameI, dateI, amountI);
  nameI.value = "";
  dateI.value = "";
  amountI.value = "";
};
