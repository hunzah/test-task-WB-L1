// Определение класса для узла списка
class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function JSONtoLinkedList(jsonArray) {
    // Проверка на пустой входной массив
    if (!jsonArray || jsonArray.length === 0) {
      return null;
    }
  
    // Создание головы списка из первого элемента JSON
    const head = new ListNode(jsonArray[0]);
  
    // Текущий узел указывает на голову
    let current = head;
  
    // Проходим по оставшимся элементам JSON и создаем узлы списка
    for (let i = 1; i < jsonArray.length; i++) {
      const newNode = new ListNode(jsonArray[i]);
      current.next = newNode; // Текущий узел указывает на новый узел
      current = newNode; // Перемещаем указатель текущего узла на новый узел
    }
  
    return head; // Возвращаем голову списка
  }
  
  // Пример использования функции
  const jsonArray = [1, 2, 3, 4, 5];
  const linkedList = JSONtoLinkedList(jsonArray);
  
  // Проверяем, что связный список создан корректно
  let current = linkedList;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
  