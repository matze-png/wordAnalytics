const textareaEl = document.querySelector('.textarea');
const charactersWordsEl = document.querySelector('.stat__number--words');
const charactersNumberEl = document.querySelector('.stat__number--characters');
const charactersTwitterEl = document.querySelector('.stat__number--twitter');
const charactersFacebookEl = document.querySelector('.stat__number--facebook');

const inputHandler = () => { 
    // example of input validation
    if (textareaEl.value.includes('<script>')){
        alert("You can't use <script> in your text.");
        textareaEl.value = textareaEl.value.replace('<script>', '');
    }

    // determine new numbers
    const numberOfCharacters = textareaEl.value.length;
    const twitterCharLeft = 280 - numberOfCharacters;
    const facebookCharLeft = 2200 - numberOfCharacters;
    let numberOfWords = textareaEl.value.split(' ').length;

    if(textareaEl.value.length === 0) {
        numberOfWords = 0;
    }

    // set new numbers
    charactersNumberEl.textContent = numberOfCharacters;
    charactersTwitterEl.textContent = twitterCharLeft;
    charactersFacebookEl.textContent = facebookCharLeft
    charactersWordsEl.textContent = numberOfWords;

    // stop character counting at 0
    if(charactersTwitterEl.innerHTML < 0) {
        charactersTwitterEl.textContent = 0;
    }

    if(charactersFacebookEl.innerHTML < 0) {
        charactersFacebookEl.textContent = 0;
    }
};

textareaEl.addEventListener('input', inputHandler);