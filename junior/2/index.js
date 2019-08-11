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
// "{[)}"

const input = document.getElementById('inputField');
const button = document.getElementById('buttonClick');
const output = document.getElementById('text')

button.addEventListener('click', () => {
  output.textContent = findCorrectBracket(input.value)
  input.value = '';
})


function findCorrectBracket(input) {
  const text1 = input.replace(/\s/g, "").split('')
  const text2 = input.replace(/\s/g, "").split('')
  const text3 = input.replace(/\s/g, "").split('')
  if (checkBrackets(text1, "[", "]") && checkBrackets(text2, "{", "}") && checkBrackets(text3, "(", ")")) {
    return 'Верное расположение скобок'
  }

  return 'Некорректное расположение скобок'

}

function checkBrackets(array, symbolOne, symbolTwo) {
  let a = true
  let bracketOne = 0
  let bracketTwo = 0
  let count = 0
   while (a) {
    bracketOne = array.indexOf(symbolOne)
    bracketTwo = array.indexOf(symbolTwo)

    if (bracketOne === -1 && bracketTwo === -1) {
      return true
    }

    if (bracketOne !== -1 && bracketTwo !== -1) {
      ++count
      if (bracketOne < bracketTwo && (bracketTwo - bracketOne) % 2 !== 0) {
        array.splice(bracketOne - 1, bracketTwo - bracketOne)
      } else {
        return false
      }
    } else if (count === 0) {
      return false
    } else {
      return true
    }
  }

}

// function checkDistanceBetweenBrackets(array, ) {

// }

// function checkEven(array) {
//   let count1 = 0;
//   let count2 = 0;
//   let count3 = 0;

//   for(let i = 0; i < array.length; i++) {
//     switch(array[i]) {
//       case '[':
//       case ']':
//         ++count1
//         break
//       case '{':
//       case '}':
//         ++count2
//         break
//       case '(':
//       case ')':
//         ++count3
//         break
//       default:
//         break
//     }
//   }

//   if (count1 % 2 !== 0 || count2 % 2 !== 0 || count3 % 2 !== 0) {
//     return false
//   }

//   return true
// }