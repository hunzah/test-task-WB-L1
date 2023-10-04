function createAndStyleElement() {
    // Создаем новый элемент, например, <div>
    const newElement = document.createElement("div");
  
    // Устанавливаем стили для нового элемента
    newElement.style.backgroundColor = "blue";
    newElement.style.color = "white";
    newElement.style.padding = "10px";
    newElement.style.fontSize = "18px";
    newElement.textContent = "Hello World";
  
    // Добавляем новый элемент в DOM (например, в body)
    document.body.appendChild(newElement);
  }
  
  // Вызываем функцию 3 раза что бы получить у элемента
  createAndStyleElement();
  createAndStyleElement();
  createAndStyleElement();
  