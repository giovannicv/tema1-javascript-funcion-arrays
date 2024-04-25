//desestructuracion, de arreglos, y de objetos.
const person = {
    name: 'Ricardo',
    lastName: 'Flores',
    cars:[ 
        'Nissan', 'Toyota'
    ],
    sons: ['Pepito', 'Ricardo'],
    salary: () =>   {
        {
            const perDay = 100;
            let total = 0;
            for (let i = 0; i < 30; i++) {
                total += perDay;
            }
        return total;
        }
    }
}
//arreglo
const list = ['perro', 'gato', 'raton', 'cabra'];
//objeto desestructuracion
const name = 'another data';
const { name: personName, sons, salary} = person;
console.log(salary());
console.log(personName, sons);
const [,,item] = list;
console.log(item);