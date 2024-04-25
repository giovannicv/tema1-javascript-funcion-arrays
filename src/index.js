//funciones
function functionName () {
    console.log('hi i am a function')
}
functionName = () => {
    console.log('overwrite function');
};
//usar esta funcion
const functionName2 = () => {
    console.log('hi i am a function 2')
}
functionName();