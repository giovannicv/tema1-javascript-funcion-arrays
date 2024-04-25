//arreglos
const list = ['one', 'two', 'three', 'four']
const numbers = [1, 2, 4, 3, 4, 12, 4, 23, 3, 4]
const orderNumbers = numbers.sort((a, b) => {
    return a - b;
});
console.log(orderNumbers);
let person = {
    name: 'Ricardo',
    lastName: 'Flores',
}
const personList = [];
for (let i = 0 ; i < 20; i ++){
    const newName = 'Nombre ' + i;
    const newLastName = 'Apellido' + i;
    const newPerson = {...person, name: newName, lastName: newLastName}
    personList.push(newPerson)
}
console.log(personList);

console.log('init for');
const filteredList = list.filter((item) => {
    return !!item.match(/o/g);
});
const newPersonList = personList.map((item) => {
    const newItem = {...item, age: 33};
    return newItem;
});
console.log(newPersonList);
