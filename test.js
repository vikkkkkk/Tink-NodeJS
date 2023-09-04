// подключаем модуль для работы с вводом/выводом в консоли
const readline = require('readline');

// создаем интерфейс для взаимодействия с консолью
const rl = readline.createInterface({
  input: process.stdin,  // ввод с консоли
  output: process.stdout // вывод на консоль
});

// инициализируем переменную sum для хранения суммы чисел
let sum = 0;

// объявляем функцию, которая будет читать числа с консоли
function readNumber() {
	// запрашиваем ввод пользователя и ожидаем введенное значение
  rl.question('', (number) => {
		// преобразуем введенное значение в целое число и сохраняем
    const num = parseInt(number);
		// проверяем, удалось ли успешно преобразовать введенное значение в число
    if (!isNaN(num)) {
			// если удалось, добавляем его к текущей сумме
      sum += num;
    }
		// запрашиваем ввод следующего числа и ожидаем введенное значение
    rl.question('', (nextNumber) => {
			// преобразуем введенное значение в целое число и сохраняем
      const nextNum = parseInt(nextNumber);
			// проверяем, удалось ли успешно преобразовать введенное значение в число
      if (!isNaN(nextNum)) {
				// если удалось, добавляем его к текущей сумме
        sum += nextNum;
      }
			// закрываем интерфейс после ввода обоих чисел
      rl.close();
			// выводим сумму введенных чисел в консоль
      console.log(sum);
    });
  });
}

// вызываем функцию для начала процесса ввода
readNumber();