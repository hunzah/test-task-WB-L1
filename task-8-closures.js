const applyFunctions = (functions) => {
    // возвращаем функцию
    return function () {
      const results = [];
      
      // Перебираем функции в массиве и вызываем их, затем сохраняем результаты в массив
      for (const func of functions) {
        results.push(func());
      }
  
      return results;
    };
  }
  
  // Пример использования:
  const functions = [
    () => 1,
    () => 2,
    () => 3,
  ];
  
  console.log(applyFunctions(functions)());
  