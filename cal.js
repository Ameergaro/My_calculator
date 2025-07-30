function append(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = '';
} 

function calculate() {
  const result = eval(document.getElementById("display").value);
  document.getElementById("display").value = result;
}

function changeBg() {
  const color = document.getElementById("bgColor").value;
  document.body.style.backgroundColor = color;
}
