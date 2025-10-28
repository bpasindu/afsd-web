// function helloWorld() {
//     return new Promise((resolve, reject) => {
//         resolve();
//     })
// }

// function helloWorld(value) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         if(value){
//             resolve();
//         }else{
//             reject();
//         }
//     },5000)
//     })
// }

function helloWorld(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if(value){
            resolve('Sucess..!');
        }else{
            reject('Rejected..!');
        }
    },1000)
    })
}


// asynchronize behabiour
// helloWorld(false)

async function getHellow(){
    try{
        const val = await helloWorld(true);
        const val1 = await helloWorld(true);
        const val2 = await helloWorld(false);
        console.log(val2);
    } catch (err){
        console.log(err)
    }
}

getHellow();