const salary = () => {
    const perDay = 100;
    let total = 0;
    for (let i = 0; i < 30; i++) {
        total += perDay;
    }
    return total;
}
const name = 'Ricardo';
const templateString = `my name is ${name} and my salary is ${salary()}`;
console.log(templateString)