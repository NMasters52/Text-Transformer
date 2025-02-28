//grab dom elements 
const textInput = document.getElementById('text');
const capatalize = document.getElementById('transformBtn');
const output = document.getElementById('transformedInput');

//create event listner
capatalize.addEventListener('click', transfromText);

//create function to handle the event 
function transfromText() {
  const text = textInput.value;

  const transformedText = textTransformer(text);

  output.innerHTML = transformedText;
}


//create function to handle the text transformation.
function textTransformer(text) {
  const words = text.toLowerCase().split(' ');

  for (i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }

  return words.join(' ');
};