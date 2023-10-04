// Получаем элемент кнопки
const button = document.getElementById("button");

// Функция для добавления или удаления стиля при клике
function toggleStyleOnClick() {
  // Проверяем, есть ли класс "styled-button" на кнопке
    // Если класс есть, удаляем его Если класса нет, добавляем его
  button.classList.contains("styled-button") ? button.classList.remove("styled-button") : button.classList.add("styled-button");
}
// Добавляем обработчик события клика на кнопку
button.addEventListener("click", toggleStyleOnClick);
