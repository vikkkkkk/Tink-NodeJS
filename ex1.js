// подключаем модуль для взаимодействия с консолью
const readline = require('readline');

// создаем интерфейс для ввода и вывода данных
const rl = readline.createInterface({
  input: process.stdin,  // ввод с консоли
  output: process.stdout // вывод на консоль
});

// объявляем функцию для подсчета максимального количества слов "sheriff"
function countSheriffWords(s) {
  const sheriffWord = 'sheriff';
  const letterCount = {};

  // заполняем объект, подсчитывая количество каждой буквы в строке
  for (const letter of s) {
    if (letterCount[letter]) {
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  }

  let minCount = Number.MAX_VALUE;

  // проверяем каждую букву в слове "sheriff" и находим минимальное количество, которое можно составить
  for (const letter of sheriffWord) {
    if (letterCount[letter]) {
      minCount = Math.min(minCount, letterCount[letter]);
    } else {
      minCount = 0;
      break; // если буквы для какой-либо из букв "sheriff" не хватает, то больше нельзя составить слово
    }
  }

  return minCount;
}

// задаем вопрос и ждем ввода строки с консоли
rl.question('', (input) => {
  // вызываем функцию для обработки введенной строки и получения результата
  const result = countSheriffWords(input);

  // выводим результат в консоль
  console.log(result);

  // завершаем работу интерфейса
  rl.close();
});