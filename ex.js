// подключаем модуль для взаимодействия с консолью
const readline = require('readline');

// создаем интерфейс для ввода и вывода данных
const rl = readline.createInterface({
  input: process.stdin,  // ввод с консоли
  output: process.stdout // вывод на консоль
});

// объявляем функцию для поиска самого дорогого револьвера
function findMostExpensiveRevolver(n, s, prices) {
  let maxPrice = 0;

  // проходим по ценам всех револьверов
  for (let i = 0; i < n; i++) {
    // проверяем, что ковбой Джо может себе позволить этот револьвер
    if (prices[i] <= s) {
    	// если цена текущего револьвера больше максимальной цены, обновляем максимальную цену
      maxPrice = Math.max(maxPrice, prices[i]);
    }
  }
	// возвращаем самую большую цену
  return maxPrice;
}

// задаем вопрос о количестве револьверов в магазине и количестве долларов у ковбоя Джо
rl.question('', (input) => {
	// разбиваем введенную строку на два числа через пробел и преобразуем их в числовой формат
  const [n, s] = input.split(' ').map(Number);
	// задаем вопрос о ценах револьверов через пробел
  rl.question('', (priceStr) => {
		// разбиваем строку с ценами на массив чисел
    const prices = priceStr.split(' ').map(Number);
		// вызываем функцию и выводим результат в консоль
    const result = findMostExpensiveRevolver(n, s, prices);
    console.log(result);
		// завершаем работу интерфейса
    rl.close();
  });
});