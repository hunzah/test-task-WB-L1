// решение 1 с использованием регулярных выражений
const uniquePassword1 = (password) => {
    // все необходимые атрибуты для того что бы пароль считался
    const minLength = 8;
    const minLowerCase = 1;
    const minUpperCase = 1;
    const minDigits = 1;
    const minSpecialChars = 1;
    const specialChars = "!@#$%^&*()_-+=<>?/[]{}|";

    // Проверка каждого атирибута
    // Проверка длины пароля
    if (password.length < minLength) {
        return "Слишком короткий пароль. Длина должна быть не менее " + minLength + " символов.";
    }

    // Проверка на наличие букв в разных регистрах
    let lowerCaseCount = 0;
    let upperCaseCount = 0;
    let digitCount = 0;
    let specialCharCount = 0;

    // Проходимся по каждому символу и записываем в переменные
    for (const char of password) {
        if (char >= "a" && char <= "z") {
            lowerCaseCount++;
        } else if (char >= "A" && char <= "Z") {
            upperCaseCount++;
        } else if (char >= "0" && char <= "9") {
            digitCount++;
        } else if (specialChars.includes(char)) {
            specialCharCount++;
        }
    }

    // Проверка на наличие различных типов символов
    if (lowerCaseCount < minLowerCase) {
        return `Пароль должен содержать минимум ${minLength} в нижнем регистре.`;
    }

    if (upperCaseCount < minUpperCase) {
        return `Пароль должен содержать минимум ${minUpperCase} в верхнем регистре.`;
    }

    if (digitCount < minDigits) {
        return `Пароль слабый Добавьте цифры для улучшения пароля`;
    }

    if (specialCharCount < minSpecialChars) {
        return `Пароль слабый добавьте специальные символы для улучшения пароля.`
    }

    // Если все условия выполнены, пароль считается надежным
    return "Надежный пароль.";
}

// Пример использования
console.log(uniquePassword1('A'));
console.log(uniquePassword1('AbbbrtWE'));
console.log(uniquePassword1('AbbbrtWE123'));
console.log(uniquePassword1('AwwwP@ss0'));


// решение 2 с использованием регулярных выражений
const uniquePassword2 = (password) => {
    // Минимальная длина пароля
    const minLength = 8;
    
    // Проверка длины пароля
    if (password.length < minLength) {
        return "Слишком короткий пароль. Минимальная длина: " + minLength + " символов.";
    }
    
    // Проверка наличия цифр
    if (!/\d/.test(password)) {
        return "Добавьте цифры для улучшения пароля.";
    }
    
    // Проверка наличия букв в верхнем и нижнем регистре
    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
        return "Используйте буквы в разных регистрах для улучшения пароля.";
    }
    
    // Проверка наличия специальных символов (например, !, @, #, $)
    if (!/[\W_]/.test(password)) {
        return "Добавьте специальные символы для улучшения пароля.";
    }
    
    // Если все условия выполнены, пароль считается сильным
    return "Надежный пароль!";
}

console.log(uniquePassword2('A'));
console.log(uniquePassword2('AbbbrtWE'));
console.log(uniquePassword2('AbbbrtWE123'));
console.log(uniquePassword2('AwwwP@ss0'));