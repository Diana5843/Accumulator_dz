function Accumulator(startingValue) {
    return {
        value: startingValue,
        
        read: function() {
            this.value += +prompt('Введите число: ');
        }
    }
}
const value = +prompt('Введите 1е число: ');
const result = Accumulator(value);
const count = +prompt('Введите количество повторений: ');

for(let i = 0; i < count; i++){
    result.read();
}

console.log('result: ', result.value);

