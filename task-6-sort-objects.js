// решение 1 с ииспользованием localeCompare для сортировки по алфавиту если возраст равен. Метод сорт сортирует массивы b.age - a.age
// так же условияч написаны через тернарный оператор что позволяет написать решение в одну строчку скорость выполнения O(n^2)
const sort1 = array => array.sort((a, b) => b.age === a.age ? a.name.localeCompare(b.name) : a.age - a.age)

  console.log(sort1([
    { name: 'John', age: 25 },
    { name: 'Ali', age: 25 },
    { name: 'Marley', age: 45 },
    { name: 'Curtis', age: 48 },
  ]
  ));
  
// решение 2 с ииспользованием сортировки слиянием данное решения является оптимальнее таких сортировок как сортировка пузырьком итд скорость выполнения O(n log n)
const sort2 = array => {
    if (array.length <= 1) {
      return array;
    }
  
    // делим массив на 2 части 
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

  // Рекурсивно сортируем левый и правый подмассивы
  return merge(sort2(left), sort2(right));
  }
  
  // Функция слияния двух отсортированных массивов
 const merge = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Сравниваем элементы из левого и правого подмассивов и добавляем минимальный в результирующий массив
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex].age === right[rightIndex].age) {
      // Если возрасты равны, сравниваем имена в алфавитном порядке
      // Если имя из левого подмассива меньше или равно имени из правого подмассива, добавляем его в результат и увеличиваем leftIndex
      // В противном случае добавляем имя из правого подмассива и увеличиваем rightIndex
            result.push(left[leftIndex].name.localeCompare(right[rightIndex].name) <= 0 ? left[leftIndex++] : right[rightIndex++]);
        } else {
      // Если возрасты разные, добавляем элемент с меньшим возрастом в результат
            result.push(left[leftIndex].age < right[rightIndex].age ? left[leftIndex++] : right[rightIndex++]);
        }
    }

  // Добавляем оставшиеся элементы из левого и правого подмассивов
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
  
  console.log(sort2([
    { name: 'John', age: 25 },
    { name: 'Ali', age: 25 },
    { name: 'Marley', age: 45 },
    { name: 'Curtis', age: 48 },
  ]));

  
// сортировка пузырьком не саммая оптимальная сортировка скорость выполнения тут  O(n^2)
  const sort3 = array => {
    const n = array.length;
    let swapped;
  
    while (swapped) {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (
          array[i].age > array[i + 1].age || // Сравниваем по возрасту
          (array[i].age === array[i + 1].age && array[i].name.localeCompare(array[i + 1].name) > 0) // При равных возрастах, сравниваем по имени
        ) {
          // Если текущий элемент больше следующего по возрасту или по имени, меняем их местами
          const temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapped = true;
        }
      }
    }
  
    return array;
  }

  console.log(sort3([
    { name: 'John', age: 25 },
    { name: 'Ali', age: 25 },
    { name: 'Marley', age: 45 },
    { name: 'Curtis', age: 48 },
  ]));
  