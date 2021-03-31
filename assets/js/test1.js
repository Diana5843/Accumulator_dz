let newArray = [
    'ffff', 
    5, 
    'ggggg', 
    10, 
    {
        value: 5,
        text: 'nnnn',
    }, 
];

for(const element of newArray) {
    console.log(typeof(element));

    const count = funcArray(element);
    console.log(count);
}


function funcArray(elem){
    switch(typeof elem){
        case 'string':{
            return elem.length;
        }
        case 'number':{
            return Math.cbrt(elem) - 2 * elem - Math.sqrt(elem);
        }
        case 'object':{
            if(elem.text === elem.value){
                return elem;
            } else{
                return { error: 'values are not equal'};
            }
        }
        default:{
            return 0;
        }
    }
}

// let animals = ['dog', 'cat', 'bird', 'elephand', 'dolphin',];
// alert(animals);

//  animals.push('volf');    
// //  добавляет в конец 1 и более елем.
// alert(animals);

// animals.pop('volf');    
// //  удаляет последний 1 елем. shift - первый елемент удал.
// alert(animals);

// alert(animals.shift());
// // удаляем первый елемент и выводим его
// alert(animals);

// animals.unshift('crocodile', 'lion');
// //добавляет в начало массива 1 и более елем.
// alert(animals);


