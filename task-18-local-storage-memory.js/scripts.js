// Для подсчета максимального объема я воспользуюсь этой строкой, 
// которая  состоит из 1024 символов 'a' и занимает 1 килобайт в памяти.

const oneKBString = 'a'.repeat(1024); 
// воспользуемся try catch для отлова момента когда localStorage переполниться
try {
  // Очищаем localStorage
  localStorage.clear();
  // Цикл выполняется, пока localStorage не переполнится.
  while (true) {
    const key = `fakeString${localStorage.length}`;
    localStorage.setItem(key, oneKBString); // Записываем строку в localStorage под уникальным ключом.
  }
} catch (e) { 
  // Сюда попадем когда в localStorage не останется свободной памяти
  const allMemory = localStorage.getItem('fakeString0').length * localStorage.length / (1024 * 1024); // Подсчитываем общий размер
  alert(`Максимальный объем: ${allMemory} MБайт.`);
}
