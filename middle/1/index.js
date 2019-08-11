// Напишите простой метод .camelCase для строк. У всех слов должна быть прописная буква без пробелов.

// Например:
// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

const input = document.getElementById('inputField');
const button = document.getElementById('buttonClick');
const output = document.getElementById('text')

button.addEventListener('click', () => {
  output.textContent = camelCaseFunction(input.value)
  input.value = '';
})


function camelCaseFunction(input) {
  let camelCase = ''
  const text = input.split(' ');

  for (let i = 0; i < text.length; i++) {
    camelCase += text[i][0].toUpperCase() + text[i].substring(1).toLowerCase()
  }

  return camelCase
}