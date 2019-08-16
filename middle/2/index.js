// Создайте функцию, которая принимает список неотрицательных целых чисел и строк и возвращает новый список
//  с отфильтрованными строками.

// Примеры:

// filter_list ([1,2, 'a', 'b']) == [1,2]
// filter_list ([1, 'a', 'b', 0,15]) == [1,0,15]
// filter_list ([1,2, 'aasf', '1', '123', 123]) == [1,2,123]

const input = document.getElementById('inputField');
const button = document.getElementById('buttonClick');
const output = document.getElementById('text')

button.addEventListener('click', () => {
  output.textContent = filter(input.value)
  input.value = '';
})


function filter(input) {
  const array = input.split(/\D+/g)
  return array.sort((a, b) => {
    return a - b
  })
}

