const person = {
    name: 'Ricardo',
    lasName: 'Flores',
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
console.log(person)