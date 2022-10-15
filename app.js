var btnTranslate = document.getElementById("btn-translate");
var txtInput = document.getElementById("txt-Input");
var outputDiv = document.getElementById("output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL = "https://api.funtranslations.com/translate/vulcan.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

function handleError(error) {
  console.log("error occured", error);
  alert("Something went wrong please try again later");
}

function clickHandler() {
  var inputText = txtInput.value;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((data) => {
      var translatedText = data.contents.translated;
      outputDiv.innerText = translatedText;
      console.log(translatedText);
    })
    .catch(handleError);
}

btnTranslate = addEventListener("click", clickHandler);
