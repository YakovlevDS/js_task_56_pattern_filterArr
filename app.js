// ? Task:У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

// Сделайте набор «готовых к употреблению» фильтров:

// inBetween(a, b) – между a и b (включительно).

// Пример: arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).



// Solution 1
let arr = [1, 2, 3, 4, 5, 6, 7];
const inBetween = (a, b) => x => x>=a&&x<=b;
const arrFilter=(x,y) => arr.filter(inBetween(x,y));


console.log(arrFilter(3, 6)); 

// ! Explanation: Используем замыкание, запоминаем параметры которые
//  были переданы в функцию inBetween и используем их в возвращаемой функции.
