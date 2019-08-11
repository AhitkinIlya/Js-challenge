// Напишите функцию toWeirdCase, которая принимает строку и возвращает ту же строку со всеми четными индексированными символами 
// в каждом слове в верхнем регистре и всеми нечетными индексированными символами в каждом слове в нижнем регистре. 
// Только что объясненное индексирование основано на нуле, поэтому индекс с нулевым i-м является четным, поэтому этот символ 
// должен быть в верхнем регистре.

// Переданная строка будет состоять только из буквенных символов и пробелов (''). Пробелы будут присутствовать только при наличии 
// нескольких слов. Слова будут разделены одним пробелом ('').

// Примеры:

// toWeirdCase ("String"); // => возвращает "StRiNg"
// toWeirdCase ("Странный случай строки"); // => возвращает "WeIrD StRiNg CaSe"

const input = document.getElementById('inputField');
const button = document.getElementById('buttonClick');
const output = document.getElementById('text')

button.addEventListener('click', () => {
  output.textContent = toWeirdCase(input.value)
  input.value = '';
})


function toWeirdCase(input) {
  let weirdCase = ''
  const text = input.split(' ')

  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < text[i].length; j++) {
      if (j % 2 === 0) {
        weirdCase += text[i][j].toUpperCase()
      } else {
        weirdCase += text[i][j].toLowerCase()
      }
    }
    weirdCase += ' '
  }

  return weirdCase
}