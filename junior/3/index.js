// Реализуйте функцию unique_in_order, которая принимает в качестве аргумента последовательность и возвращает список элементов
//  без каких-либо элементов с одинаковыми значениями рядом друг с другом и сохраняя исходный порядок элементов.

// Например:
// uniqueInOrder ('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder ('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder ([1,2,2,3,3]) == [1,2,3]


const input = document.getElementById('inputField');
const button = document.getElementById('buttonClick');
const output = document.getElementById('text')

button.addEventListener('click', () => {
  output.textContent = sort(input.value)
  input.value = '';
})


function sort(input) {
  const array = input.split('')
  let completedList = []
  let uniq

  for(let i = 0; i < array.length; i++) {
     if(uniq !== array[i] && array.length > 1) {
      uniq = array[i]
      completedList.push(array[i])
      array.splice(0, i + 1)
      i = -1
    }
  }
   uniq !== array[0] ? completedList.push(array[0]) : null

  return completedList
}

