var diaSem = new Date().getDay()

switch (diaSem) {
    case 0: 
        diaSem = "Sunday"
        break;
    case 1: 
        diaSem = "Monday"
        break;
    case 2: 
        diaSem = "Tuesday"
        break;
    case 3: 
        diaSem = "Wednesday"
        break;
    case 4: 
        diaSem = "Thursday"
        break;
    case 5: 
        diaSem = "Friday"
        break;
    case 6: 
        diaSem = "Saturday"
        break;    
}

console.log(diaSem)

/* 
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sabado
*/