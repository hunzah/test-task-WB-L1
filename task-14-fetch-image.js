function loadImage(url) {
    return new Promise((resolve, reject) => {
      const image = new Image();
  
      // Устанавливаем обработчики событий для изображения
      image.onload = () => {
        resolve(image);
      };
  
      image.onerror = (error) => {
        reject(error);
      };
  
      // Загружаем изображение, указав URL
      image.src = url;
    });
  }
  
  // Пример использования
  const imageUrl = "https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg";
  
  loadImage(imageUrl)
    .then((image) => {
      // Изображение успешно загружено
      console.log("Изображение загружено:", image);
    })
    .catch((error) => {
      // Произошла ошибка при загрузке изображения
      console.error("Ошибка", error);
    });
  