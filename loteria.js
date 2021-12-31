function sorteiaNúmero() {

    var num1 = Math.floor(Math.random() * 61);
    var num2 = Math.floor(Math.random() * 61);
    var num3 = Math.floor(Math.random() * 61);
    var num4 = Math.floor(Math.random() * 61);
    var num5 = Math.floor(Math.random() * 61);
    var num6 = Math.floor(Math.random() * 61);

    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log(num4);
    console.log(num5);
    console.log(num6);

    switch (num1, num2, num3, num4, num5, num6) {
        case num1 = num2, num1 = num3, num1 = num4, num1 = num5, num1 = num6:
            console.log('Número 1 Repitido!')
            break;
        case num2 = num1, num2 = num3, num2 = num4, num2 = num5, num2 = num6:
            console.log('Número 2 repitido!')
            break;
        case num3 = num1, num3 = num2, num3 = num4, num3 = num5, num3 = num6:
            console.log('Número 3 Repitido!')
            break;
        case num4 = num1, num4 = num2, num4 = num3, num4 = num5, num4 = num6:
            console.log('Número 4 Repitido!')
            break;
        case num5 = num1, num5 = num2, num5 = num3, num5 = num4, num5 = num6:
            console.log('Número 5 Repitido!')
            break;
        case num6 = num1, num6 = num2, num6 = num3, num6 = num4, num6 = num5:
            console.log('Número 6 Repitido!')
            break;
    }

}


sorteiaNúmero()