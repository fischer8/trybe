let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let num = 0;
for (let number of numbers){
    if (number%2 !== 0){
        num++;
    }
}
if (num !== 0){
    console.log(num);
}else{
    console.log('nenhum valor impar encontrado');
}