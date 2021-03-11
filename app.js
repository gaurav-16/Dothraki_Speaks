let btnTranslate = document.querySelector("button");
let textInput = document.querySelector("#txt-input");
let outputMsg = document.querySelector("#output-msg");

const serverURL = "https://cors-anywhere.herokuapp.com/https://api.funtranslations.com/translate/dothraki.json";

const constructUrl = inputText => serverURL + "?" + "text=" + inputText;

const errorHandler = error => {
  console.log("error occurred", error);
  alert(
    "Error occured! Please try after sometime we will resolve the issue very soon."
  );
}

const clickHandler = () => {
  let inputText = textInput.value;

  fetch(constructUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      outputMsg.innerText = json.contents.translated;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);