// Написать функцию, которая создает пустой объект, но без прототипа.
const noPrototypeFunc = () => {return Object.create(null)};
console.log(noPrototypeFunc()); 