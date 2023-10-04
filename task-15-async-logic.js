const asyncFunction = async () => {
    console.log(1);
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log(2);
        resolve();
      }, 1000); // Задержка в 1 секунду
    });
    console.log(3);
};
  
asyncFunction();
  