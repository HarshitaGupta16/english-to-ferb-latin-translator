import "./styles.css";

const ferbLatinURL =
  "https://api.funtranslations.com/translate/ferb-latin.json";

const inputRef = document.querySelector("textarea");
const buttonRef = document.querySelector("button");
const outputRef = document.querySelector("#output");

function concatInputTextWithURL(inputValue) {
  return ferbLatinURL + "?" + "text=" + inputValue;
}

function errorHandler(error) {
  console.log(error);
  alert("error:");
}

buttonRef.addEventListener("click", clickHandler);

function clickHandler() {
  let inputText = inputRef.value;

  fetch(concatInputTextWithURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      outputRef.innerHTML = json.contents.translated;
    })
    .catch(errorHandler);
}
