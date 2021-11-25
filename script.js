// 1.	Написать функцию которая принимает в себя строчное значение состоящее из одного слова. В слове могут быть буквы разных регистров. Результатом выполнения данной функции должна быть строка, в которой первая буквы заглавная, а все последующие в нижнем регистре
// Пример:
// someFn(‘пиТеР’) // Питер
// someFn(‘javaScript’) // Javascript

const transformWord = (word) => {
  if (typeof word !== "string" || word.split(" ").length > 1) {
    return;
  }
  return `${word.substr(0, 1).toUpperCase()}${word.substr(1).toLowerCase()}`;
};

// 2. Лизе нужно написать функцию sayHello(name), которая возвращает приветствие для пользователя. Тем не менее, она влюблена в пользователя с именем 'Mark', и хотела бы поприветствовать его немного иначе. Помогите ей.
//Пример вызовов:
// sayHello('Oleg'); //Hello, Oleg!
// sayHello('Viktor'); //Hello, Viktor!
// sayHello('Mark'); //Hi, Mark!

const sayHello = (name) => {
  if (typeof name !== "string") {
    return;
  }
  const convertedName = transformWord(name);
  return convertedName.indexOf("Mark") !== -1
    ? `Hi, ${convertedName}!`
    : `Hello, ${convertedName}!`;
};

// 3.	Написать функцию, которая принимает массив строк и допустимую длину. Результатом выполнения должен быть новый массив, состоящий из строк, длина которые не превышают допустимую длину.
// Пример
// filterStrings([‘I love JS’, some very long string, ‘hell’], 9)
// [‘I love JS’, ‘hell’]
// filterStrings([‘a’, ‘ab’, ‘abc’], 2) // [‘a’, ‘ab’]
const filterStrings = (stringsArray, maxLength) => {
  if (!Array.isArray(stringsArray) || typeof maxLength !== "number") {
    return;
  }
  for (let elem of stringsArray) {
    if (typeof elem !== "string") {
      return;
    }
  }
  return stringsArray.filter((str) => str.length <= maxLength);
};