//Завдання 1
const arr = [1, 42, 18, 0, 412];
const doubledEven = arr
    .map(num => num * 2)
    .filter(num => num % 2 === 0);
    //2, 84, 36, 0, 824

console.log(doubledEven);

//Завдання 2
const sum = (a, b) => a + b; //Функція додавання двох чисел
console.log("Сума чисел 2 і з", sum(2,3)); //5

//Завдання 3
let Student = {
    name: "Андрій",
    age: 18,
    group: "ПЗ-21",
    ShowInfo: function() {
        console.log("Студент: " + this.name);
        console.log("Вік: " + this.age);
        console.log("Група: " + this.group);
    }
};

Student.ShowInfo();