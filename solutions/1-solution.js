// Глубина колодца
// Вычислить глубину колодца, имея только камень и секундомер. 
// Программа на вход получает любые данные, полученные 
// в эксперименте и выдаёт результирующее значение в метрах.

function calculateHeight(fallTimeInSeconds, heightInMetres = 0) {

    if (fallTimeInSeconds === 0) {
        return 'Камень не упал. Пожалуйста, попробуйте еще раз.';
    }

    for (let i = 0; i <= fallTimeInSeconds; i++) {
        if (fallTimeInSeconds === i) {
            heightInMetres = i;
            let result = heightInMetres * 3;
            return `Глубина колодца равна: ${result}`;
        }
    }
}

alert(calculateHeight(11));