//grab dom elements 
const textInput = document.getElementById('text');
const capatalize = document.getElementById('transformBtn');
const output = document.getElementById('transformedInput');

//create event listner
capatalize.addEventListener('click', transformText);

//create function to handle the event 
function transformText() {
  const text = textInput.value;

  if (text === '' || !text.trim()) {
    output.textContent = "Please enter valid text submission.";
    return;
  }

  const transformedText = textTransformer(text);

  output.textContent = transformedText;
}


//create function to handle the text transformation.
function textTransformer(text) {
  const words = text.toLowerCase().split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }

  return words.join(' ');
};