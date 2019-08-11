// Напишите функцию, которая принимает строку скобок и определяет, является ли порядок фигурных скобок действительным. 
// Он должен возвращать true, если строка верна, и false, если она недействительна.

// Все входные строки будут состоять только из круглых скобок, квадратных и фигурных скобок: () [] {}.

// Что считается действительным?

// Строка скобок считается действительной, если все скобки сопоставлены с правильной скобкой.

// Примеры

// "() {} []" => true
// "([{}])" => true
// "(}" => False
// "[(])" => False
// "[({})] (]" => False

const input = document.getElementById('inputField');
const button = document.getElementById('buttonClick');
const output = document.getElementById('text')

button.addEventListener('click', () => {
  output.textContent = findCorrectBracket(input.value)
  input.value = '';
})


function findCorrectBracket(input) {
  let count1 = 0;
  let count2 = 0;
  let count3 = 0
  const text = input.split('')
  console.log(text)

  for(let i = 0; i < text.length; i++) {
    switch(text[i]) {
      case '[':
      case ']':
        ++count1
        break
      case '{':
      case '}':
        ++count2
        break
      case '(':
      case ')':
        ++count3
        break
      default:
        break
    }
  }

  if (count1 % 2 !== 0 || count2 % 2 !== 0 || count3 % 2 !== 0) {
    return 'false'
  }


  return 'true'
}