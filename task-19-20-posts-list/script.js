// Параметры запроса
const owner_id = 30111136;
let offset = 0;
let count = 10;
const callback = "callbackFunc"; // названик функции для JSONP 
const access_token = "f2be50baf2be50baf2be50baf6f1ab84fdff2bef2be50ba97a25c940bb12fedb7dfbe95";
const version = "5.131";

// Флаг, чтобы отслеживать, была ли выполнена первоначальная загрузка постов
let firstFetchDone = false;


// Функция отправляет запрос за данными, используя JSONP для обхода CORS
const fetchPosts = () => {
  try {
    const url = `https://api.vk.com/method/wall.get?owner_id=${owner_id}&offset=${offset}&count=${count}&callback=${callback}&access_token=${access_token}&v=${version}`;
    const script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
}


// функция длдя добавления данных в localStorage
const addToLocalStorage = (newPosts) => {

  // Получаем текущие данные из localStorage (если они есть)
  const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];

  // Объединяем новые посты с текущими данными
  const combinedPosts = existingPosts.concat(newPosts);

  try{ 
  // Сохраняем обновленные данные в localStorage
  localStorage.setItem("posts", JSON.stringify(combinedPosts))
  }catch{
      // Если количество постов превышает максимальное значение, удаляем старые
    combinedPosts.splice(0, count);
    localStorage.setItem("posts", JSON.stringify(combinedPosts))
  }
};

// Функция для получения постов из localStorage
const getPostsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("posts")) || [];
};

// Функция для отрисовки
const handleResponse = (data) => {
  const postList = document.getElementById("postList");

  // забираем данные из localStorage если они есть
  const postsFromLocalStorage = getPostsFromLocalStorage()
 
  // переменная в которой хранятся посты из LocalStorage если они там есть или же из сервера если LocalStorage пустой
  const postsToRender = postsFromLocalStorage.length !== 0 ? postsFromLocalStorage : data.response.items;
// отрисовываем посты
    postsToRender.forEach(item => {
      const postItem = document.createElement("li");
      postItem.innerHTML = `<strong>Дата:</strong> ${new Date(item.date * 1000).toLocaleString()}<br><strong>Текст:</strong> ${item.text}`;
      postList.appendChild(postItem);
    })

  // Увеличиваем offset для следующего запроса
  offset = 10;

  // сохраням загруженные посты в localStorage
  addToLocalStorage(data.response.items);
}

function callbackFunc(response) {
  handleResponse(response);
}

// Функция для загрузки постов при скролле
const loadMorePosts = () => {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

  // Проверяем, достиг ли скролл самого низа страницы
  if (scrollTop + clientHeight >= scrollHeight - 1) {
    fetchPosts(); // Вызываем функцию для загрузки следующей порции постов
  }
}

// Обработчик события scroll для бесконечной загрузки
window.addEventListener("scroll", loadMorePosts);

// Вызываем функцию для первоначального получения постов
fetchPosts();



// задание 20 
// Функция для подсчета объема памяти, занимаемого данными в localStorage
const getLocalStorageSize = () => {
  const data = JSON.stringify(localStorage);
  // здесь я использую TextEncoder он используется для преобразования текстовых данных в байты в соответствии с заданной кодировкой по умолчанию UTF 8.
  const encoder = new TextEncoder();
  const bytes = encoder.encode(data);
// возвращать нужно именно bytes.length;
  return bytes.length;
}
const bytes = getLocalStorageSize();
console.log(`Всего в localStorage используется: ${bytes} байтов`);
console.log(`Занято памяти: ${(bytes / 1024).toFixed(2)} килобайтов`);
console.log(`Занято памяти: ${(bytes / (1024 * 1024)).toFixed(2)} мегабайтов`);