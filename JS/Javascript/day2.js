console.log("Pasindu")
console.log("pass")
console.log("passi")


var sumArray = (arrr) => {
    var total = 0;
    for(let i=0; i<arrr.length; i++){
        total += arrr[i];
    }
    return total;
}

const number = [1,2,3];

console.log(sumArray(number));


/* Dayyyyyyyyyyyyyyyyyyy 2 */

// Object

const car = {
    brand: 'bmw',
    color: 'black',

    drive: function Drive() {
        console.log('Move forward')
    }

}

console.log(car.brand);
car.drive();

car.wheelCount = 4;

//console.log(car);


////// Array

const array1 = [24 , 'Pasindu' , true , car1={}, []]

console.log(array1.length);
console.log('test')
console.log(array1[3])

const child = ['Dasun' , 'Kamal' , 'Amal']

// push()

console.log(child)
child.push('Pasindu');
console.log(child);

// pop() -- delete last item

// child.pop();
// console.log(child);

// child.pop('kamal');
// console.log(child);

///// shift()

child.shift();
console.log(child);

//// unshift()

child.unshift('Nadun');
console.log(child);

//splice

child.splice(1 , 2, 'Janaka' , 'saman' , 'kumara')
console.log(child)