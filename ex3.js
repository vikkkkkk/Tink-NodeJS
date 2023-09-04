/*

На Диком западе ходят купюры номиналами a_1, a_2, … , a_m долларов. Однажды ковбой Джо решил ограбить банк. 
Он выбрал очень неудачный момент для ограбления, ведь сейчас в банке находятся ровно 
по две купюры каждого существующего номинала.
Ковбой Джо хочет украсть ровно n долларов, ни долларом больше, ни долларом меньше. Помогите ему или сообщите, что его план неосуществим. 

Формат входных данных:

В первой строке даны целые числа n, m (1 ≤ n ≤ 10^9, 1 ≤ m ≤ 10) — необходимая ковбою Джо сумма и количество номиналов купюр.
Во второй строке вводятся m попарно различных целых чисел a_1, a_2, … , a_m (1 ≤ a_i ≤ 10^9) — существующие номиналы купюр. 

Формат выходных данных:

Если ковбой Джо сможет украсть ровно n долларов, выведите число k — количество украденных купюр. 
Затем выведите k целых чисел — номиналы купюр. Если решений несколько, вы можете вывести любое.
В противном случае выведите −1.

*/

function bankRobbery(n, m, denominations) {
    const usedDenominations = [];
    const originalDenominations = [...denominations]; // Сохраняем оригинальный порядок номиналов
  
    denominations.sort((a, b) => b - a); // Сортируем номиналы по убыванию
  
    for (let i = 0; i < m; i++) {
      const currentDenomination = denominations[i];
  
      while (n >= currentDenomination) {
        n -= currentDenomination;
        usedDenominations.push(currentDenomination);
      }
    }
  
    if (n === 0) {
      const result = [];
      for (let d of originalDenominations) {
        const count = usedDenominations.filter(ud => ud === d).length;
        result.push(...Array(count).fill(d));
      }
      return result; // Возвращаем номиналы в оригинальном порядке
    }
  
    return -1; // Не удалось найти набор купюр для украденной суммы
  }
  
  const readline = require("readline-sync");
  const firstInput = readline.question("");
  const [n, m] = firstInput.split(" ").map(Number);
  
  const secondInput = readline.question("");
  const denominations = secondInput.split(" ").map(Number);
  
  const result = bankRobbery(n, m, denominations);
  
  if (Array.isArray(result)) {
    console.log(result.length);
    console.log(result.join(" "));
  } else {
    console.log(result);
  }
  