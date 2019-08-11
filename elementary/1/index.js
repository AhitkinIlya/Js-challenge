// Все просто, дана строка слов, верните длину самого короткого слова
// От себя: вернул еще схожей длины слова

const input = document.getElementById('inputField');
const button = document.getElementById('buttonClick');
const output = document.getElementById('text')

button.addEventListener('click', () => {
  output.textContent = shortestWord(input.value)
  input.value = '';
})


function shortestWord(input) {
  let theShortestWord = ''
  let sameWord = ''
  const array = input.split(' ');
  theShortestWord = array[0]

  for (let i = 1; i < array.length; i++) {
    if (array[i].length < theShortestWord.length) {
      theShortestWord = array[i]
      sameWord = ''
    } else if (array[i].length === theShortestWord.length) {
      sameWord = sameWord + ' ' + array[i] + ' '
    }
  }

  return theShortestWord + ' ' + sameWord
}