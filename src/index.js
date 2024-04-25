const handlerEvent = () => {
    console.log('Finished intensive operation');
}
const someIntensiveOperation = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            handlerEvent();
            resolve();
        }, 3000);
        
    })
    //setTimeout(handlerEvent, 3000);
    //handlerEvent();
}
const init = async() =>{
    console.log('Inicia')
    someIntensiveOperation();
    console.log('Termina')
}
init();