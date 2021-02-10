let inputText = document.getElementById("inputText")
let alert = document.getElementById("alert");
let outputText = document.getElementById("outputText")
let alertMessage = "Gib bitte eine Nachricht ein!"

function sendMessage() {
    if (inputText.value == '') {
        alert.innerHTML = alertMessage
    } else {
        document.getElementById("outputText").innerHTML = inputText.value
        inputText.value = ""
    }

}