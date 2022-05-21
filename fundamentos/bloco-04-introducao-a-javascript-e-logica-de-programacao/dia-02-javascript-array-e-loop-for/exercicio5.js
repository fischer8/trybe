let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let num = 0;
for (let number of numbers){
    if (num < number){
        num = number;
    }
}

console.log(num);