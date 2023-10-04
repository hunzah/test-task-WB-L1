const wrapper = () => {
    // Внешняя функция создает переменную
    const a = 'closure';
  
    // Внутренняя функция
    const b = () => {
      return a;
    }
  
    return b;
  }

  console.log(wrapper()()); // двойной вызов что бы вызвать внутренюю функцию
  