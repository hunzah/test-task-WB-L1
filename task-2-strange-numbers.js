//самый обычный метод с использованием цикла
const strangeNumbers1 = (number) => {
    if (number <= 0) {
return false; }
//   создаем переменую где будем хранить сумму делителей
    let sum = 0;
    
    for (let i = 1; i < number; i++) {
        // проверяем делится ли итерируемое число 
      if (number % i === 0) {
        // прибавляем делители
        sum += i;
      }
    }
//   сравниваем сумму делителей и изначальное число
    return sumOfDivisors === number;
}

//метод с созданием массива и использованием reduce не совсем оптимальный так как создание массива использует память а так же этот метод не оптимизирован
const strangeNumbers2 = num => {
    if (num <= 0) {
        return false;
      }
    
      let divisors = [];
    
      for (let i = 1; i < num; i++) {
        if (num % i === 0) {
          divisors.push(i);
        }
      }
    
      const sumOfDivisors = divisors.reduce((acc, val) => acc + val, 0);
    
      return sumOfDivisors === num;
}
