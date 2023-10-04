const apiKey = '8a01cec7-41a6-4b13-a35d-724b8330f537';

// Функция для дебаунса.
const debounce = (func, delay) => {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

// Функция для геокодирования адреса.
const geocodeAddress = debounce(async (address) => {
    const suggestionsList = document.getElementById('suggestionsList');
    suggestionsList.innerHTML = ''; // Очищаем предыдущие предложения

    // Отправка запроса 
    await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&geocode=${address}&format=json`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка HTTP: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            const featureMembers = data.response.GeoObjectCollection.featureMember;
            updateAddressList(featureMembers);
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
        });

    // Функция для обновления выпадающего списка адресов.
    function updateAddressList(featureMembers) {
        const suggestionsList = document.getElementById('suggestionsList');
        suggestionsList.style.display = 'block';

        const inputRect = addressInput.getBoundingClientRect();
        // Устанавливаем позицию для выпадающего списка, чтобы он находился прямо под input.
        suggestionsList.style.top = inputRect.bottom + 'px';
        suggestionsList.style.left = inputRect.left + 'px';

        // Проходимcя по массиву объектов featureMembers, который содержит информацию об адресах.
        featureMembers.forEach((featureMember) => {
            const addressResult = featureMember.GeoObject.metaDataProperty.GeocoderMetaData.Address.formatted;
            const listItem = document.createElement('li');
            listItem.textContent = addressResult;
            suggestionsList.appendChild(listItem);

       // Добавляем обработчик события click для элемента списка.
        // Когда пользователь выбирает адрес из списка, мы устанавливаем значение input равным выбранному адресу
        // и скрываем выпадающий список.
        listItem.addEventListener('click', function () {
            addressInput.value = listItem.textContent;
            suggestionsList.style.display = 'none'; // Скрываем выпадающий список.
            });
        });
    }
}, 300);

// получаем инпут 
const addressInput = document.getElementById('addressInput');
addressInput.addEventListener('input', (e) => {
    const inputText = e.target.value;
    if (inputText.trim() !== '') {
        // отправляем в параметрах функции  geocodeAddress написанные в инпуте значения
        geocodeAddress(inputText);
    } else {
        const suggestionsList = document.getElementById('suggestionsList');
        suggestionsList.style.display = 'none';
    }
});
