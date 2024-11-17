let but = document.querySelector("button");
let nameI = document.querySelector(".nameI");
let dateI = document.querySelector(".dateI");
let amountI = document.querySelector(".amountI");

document.addEventListener("click", function (e) {
  if (e.target.className === "delet") {
    e.target.parentNode.remove();
    printTotal();
  }
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
  a.className = "prix";
  tr.appendChild(a);

  creatDeletButton(tr);

  let firstTr = document.querySelector("tr");

  firstTr.after(tr);
}

let checkEmpty = function (input) {
  if (input.value === "") {
    input.style.border = "solid 1px #e13232";
    return 1;
  }
  input.style.border = "solid 1px #c9c4c4";
  return 0;
};

function printTotal() {
  let prices = document.querySelectorAll(".prix");
  let par = document.querySelector(".empty");
  let span = document.querySelector("span");
  let total = 0;

  for (let prix of prices) {
    total += isNaN(prix.textContent) ? 0 : +prix.textContent;
  }
  if (prices.length !== 0) {
    par.textContent = `The totale amounts is:`;
    par.style.backgroundColor = "transparent";
    par.style.border = "0";
    span.textContent = `${total}`;
    par.style.textAlign = "center";
    par.style.marginTop = "50px";
  } else {
    par.style.backgroundColor = "#cac9c9";
    par.style.width = "calc(90vw - 10px);";
    par.style.textAlign = "left";
    par.style.marginTop = "0";
    par.textContent = "No expense added yet!";
    span.textContent = "";
  }
}

but.onclick = function () {
  let b = 0;
  b += checkEmpty(nameI);
  b += checkEmpty(dateI);
  b += checkEmpty(amountI);
  if (b !== 0) return;
  addTd(nameI, dateI, amountI);
  nameI.value = "";
  dateI.value = "";
  amountI.value = "";
  printTotal();
};
