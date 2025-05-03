// let fio = prompt("Введите ФИО");

// do {
//     pol = prompt("Введите пол (М/Ж)");
// } while (pol !== "М" && pol !== "м" && pol !== "Ж" && pol !== "ж");

// let age = parseInt(prompt("Введите Age"));
// let email = prompt("Введите email");

// confirm(`Фио:  ${fio}\nПол:  ${pol}\nВозраст:  ${age}\nEmail:  ${email}`);

// Task 2 

// let num = prompt("Введите 6-е число: ");
// let sum1 = parseInt(num[0]) + parseInt(num[1]) + parseInt(num[2]);
// let sum2 = parseInt(num[5]) + parseInt(num[4]) + parseInt(num[3]);
// document.writeln(sum2);
// if(sum1 === sum2){
//     document.writeln("Число счастливое");
// }
// else {
//     document.writeln("Nou");
// }

//Task 3

let x = parseInt(prompt("Загадайте число от 1 до 100:"));
let number = 50;
let answer;
do{
    do{
        answer = prompt(`Напишите число больше(Б)/меньше(М): ${number}`);
    }while(answer !== "Б" && answer !== "М" );

    if( answer === "Б"){
        if( number % 2 != 0){
            number+= 1;
        }
        number = number + number/2
    }
    else if (answer === "М"){
        if( number % 2 != 0){
            number+= 1;
        }

        number = number - number/2
    }
    
}while(number !== x);

alert(`Ваше число ${number}`);



















