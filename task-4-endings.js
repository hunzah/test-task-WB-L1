const NounDeclension = (function() {
    function getNoun(number, one, two, five) {
      let n = Math.abs(number);
      n %= 100;
      if (n >= 5 && n <= 20) {
        return five;
      }
      n %= 10;
      if (n === 1) {
        return one;
      }
      if (n >= 2 && n <= 4) {
        return two;
      }
      return five;
    }
  
    return {
      getNoun,
    };
  })();
  
  console.log("112 " + NounDeclension.getNoun(112, 'сообщение', 'сообщения', 'сообщений'));
  console.log("12 " + NounDeclension.getNoun(2, 'сообщение', 'сообщения', 'сообщений'));
  console.log("1 " + NounDeclension.getNoun(1, 'сообщение', 'сообщений', 'сообщения'));
  console.log("1024 " + NounDeclension.getNoun(1024, 'пользователь', 'пользователя', 'пользователей'));
  console.log("1026 " + NounDeclension.getNoun(1026, 'пользователь', 'пользователя', 'пользователей'));
  console.log("1021 " + NounDeclension.getNoun(1021, 'пользователь', 'пользователя', 'пользователей'));
  