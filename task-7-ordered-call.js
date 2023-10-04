// решение 1 используется рекурсия для вызова каждой последующей функции по индуксу
const func1 = [
    () => {
      console.log(1);
      func1[1]();
    },
    () => {
      console.log(2);
      func1[2]();
    },
    () => {
      console.log(3);
    },
  ];
  
  func1[0](); // Вызываем первую функцию

  
// решение 2 с использованием промисов
const functionArray = [
    () => new Promise(resolve => {
      console.log(1); 
      resolve(); // Резолвим промис, чтобы перейти к следующей функции
    }),
    () => new Promise(resolve => {
      console.log(2); и
      resolve(); 
    }),
    () => new Promise(resolve => {
      console.log(3); 
      resolve(); 
    }),
  ];
  
  // Создаем асинхронную функцию для выполнения функций в массиве последовательно.
  async function executeFunctions() {
    for (const func of functionArray) {
      await func(); // Вызываем текущую функцию и ждем, пока она завершится (await)
    }
  }
  
  executeFunctions(); // Вызываем асинхронную функцию для начала выполнения всех функций.
  
  