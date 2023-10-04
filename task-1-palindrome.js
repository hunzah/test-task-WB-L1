
// первый метод с использолванием цикла
const isPalindrome1 = (str) => {

// создадим указатели- индексы первой и последней буквы для того что бы их сравнивать в дальнейшем

let left = 0
let right = str.length - 1

  while (left < right) {
// проверка на пробелы и знаки препинания
    if(str[left].toLowerCase() === str[left].toUpperCase()) {
      left++ 
      continue
    }

    if(str[right].toLowerCase() === str[right].toUpperCase()) {
      right-- 
      continue
    }
// далее процесс сравнения первой и последней букв
    if (str[left] === str[right]) {
      left++ 
      right-- 
    } else {
      // возвращаем false в случае если буквы не равны
      return false
    }
  }
  return true
}
  console.log(isPalindrome1("аргентина манит негра")); 
  

  
// второй метод с использолванием массивов для переварачивания строки 
const isPalindrome2 = (str) => str.split('').filter(el => el !== ' ').join('') === str.split('').filter(el => el !== ' ').reverse().join('') 
// тут используется split для создания массива из строки filter для удаления пробелов reverse для переворачивания и join для возвращения массива в строку 
  console.log(isPalindrome2("аргентина манит негра"));


  // третий метод с использолванием регулярных выражений для удалени я пробелов
  const isPalindrome3 = (str) =>{
    const cleaned = str.toLowerCase().replace(/ /g, '');
    return cleaned === cleaned.split('').reverse().join('');
  }
  
console.log(isPalindrome3("аргентина манит негра"));

// решить данную задачу можно еще многими способами 
// но в своих примерах я показал 3 основных метода которые 
// скорее всего будут использоваться во всех возможных реешниях: циклы, методы, рег выражения 