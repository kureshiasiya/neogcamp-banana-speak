var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
btnTranslate.addEventListener("click", clickHandler);

function clickHandler() {
  outputDiv.innerText = "ajsjsjsjsjs" + txtInput.value;
}
