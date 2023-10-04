const MathX = (function () {

  // Вычисления числа Фибоначчи используя рекурсию
  const customFibonacciCalc = n => n <= 1 ? n : fib(n - 1) + fib(n - 2);
  
  // Внутренняя функция для проверки, является ли число простым
  const customisPrimeCalc = n => {
    if (n <= 1) return false;
    // если число меньше 1 то это не простое число
    if (n === 2 || n === 3) return true;
    // если число равно 2 или 3 то это простое число можно сразу закончить что бы не запускать цикл
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      // проверяем от 5 простые числа имеют вид 6k ± 1 (где k - натуральное число). Таким образом, можно пропустить проверку большинства составных чисел, что ускоряет алгоритм.
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  }

  return {
    // Функция для вычисления N-го числа Фибоначчи
    fibonacci: function (n) {
      return customFibonacciCalc(n);
    },

    // Функция для вычисления всех чисел Фибоначчи до N
    fibonacciSeries: function (n) {
      const series = [];
      for (let i = 0; i <= n; i++) {
        // пушим все числа фибоначи в массив
        series.push(customFibonacciCalc(i));
      }
      return series;
    },

    // Функция для вычисления N-го простого числа
    prime: function (n) {
      let count = 0;
      let num = 2;
      while (count < n) {
        if (customisPrimeCalc(num)) {
          count++;
        }
        num++;
      }
      return num - 1;
    },

    // Функция для вычисления всех простых чисел до N
    primeSeries: function (n) {
      const series = [];
      for (let i = 2; i <= n; i++) {
        if (customisPrimeCalc(i)) {
          series.push(i);
        }
      }
      return series;
    },
  };
})();

// Примеры использования
console.log(MathX.fibonacci(5)); // Вывод: 5
console.log(MathX.fibonacciSeries(8)); // Вывод: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(MathX.prime(4)); // Вывод: 7
console.log(MathX.primeSeries(20)); // Вывод: [2, 3, 5, 7, 11, 13, 17, 19]
