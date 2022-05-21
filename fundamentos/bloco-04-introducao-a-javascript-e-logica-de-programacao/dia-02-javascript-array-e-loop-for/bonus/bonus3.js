let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let novoArray=[];


for (var i = 0; i < numbers.length-1; i++) {
    novoArray.push(numbers[i]*numbers[i+1])
}   
if (i%2 !==0){
    novoArray.push(numbers[numbers.length-1]*2)
}

console.log(novoArray);