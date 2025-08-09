const userText = document.getElementById("textbox");
const toCelsius = document.getElementById("celtof");
const toFahrenheit = document.getElementById("fahtoc");
const result = document.getElementById("result");
const myBtn = document.getElementById("mybtn");

let temp;
function convert(){
    event.preventDefault(); // Stop form from submitting

  if (toCelsius.checked){
    temp = Number(userText.value)
    temp = temp * 9 / 5 + 32;
    result.textContent = temp + '∘F';
  }
  else if(toFahrenheit.checked){
    temp = Number(userText.value)
    temp = (temp - 32) * (5/9);
    result.textContent = temp + '∘C';
  }
  else{
    result.textContent = 'You must select a unit';
  }
}