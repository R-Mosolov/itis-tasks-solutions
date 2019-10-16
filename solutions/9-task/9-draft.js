// Решение будет в следующем:
// 1) сгенерировать массив возможных расположений точек в круге;
// 2) проверить, соответствуют ли X и Y координаты точки на входе одному из значений

// Добавить
// 5 значений максимум на вход



// Checking, that point coordinates not equal center circle coordinates
// if (pointX === circleCenterX
//     && pointY === circleCenterY) {
//     return true;
// }



// const maxAndMinValueX = {
//     'positive': circleCenterX + r,
//     'negative': circleCenterX - r
// };
// const maxAndMinValueY = {
//     'positive': circleCenterY + r,
//     'negative': circleCenterY - r
// };


// function isRound(circleCenterX, circleCenterY, r, pointX, pointY) {
//
//     if ((pointX === circleCenterX + 3) && (pointY === circleCenterY + 3)
//     || (pointX === circleCenterX - 3) && (pointY === circleCenterY + 3)
//     || (pointX === circleCenterX - 3) && (pointY === circleCenterY - 3)
//     || (pointX === circleCenterX + 3) && (pointY === circleCenterY - 3)) {
//         return false;
//     }
//
//     if ((pointX <= circleCenterX + 3) && (pointX >= circleCenterX - 3)
//     && (pointY <= circleCenterY + 3) && (pointY >= circleCenterY - 3)) {
//         return true;
//     }
//
//     else return false;
// }

// export { isRound };


// Список вопросов:
// 1) Как экспортировать тесты?
// 2) Почему IDE ругается на if?
// 3) Какие ошибки Вы заметили на прошлом занятии (3.10)?
// 4) Сколько в среднем месяцев/лет требуется, чтобы изучить JavaScript до уровня Middle?


// // Testing: point IS into the circle
// console.log( isRound(0, 0, 3, 1, 1) );
// console.log( isRound(0, 0, 3, 2, 2) );
//
// console.log( isRound(0, 0, 3, 1, 0) );
// console.log( isRound(0, 0, 3, 2, 0) );
// console.log( isRound(0, 0, 3, 3, 0) );
//
// console.log( isRound(0, 0, 3, 0, 1) );
// console.log( isRound(0, 0, 3, 0, 2) );
// console.log( isRound(0, 0, 3, 0, 3) );
//
// // Testing: point ISN'T into the circle
// console.log( isRound(0, 0, 3, 3, 3) );
// console.log( isRound(0, 0, 3, -3, 3) );
// console.log( isRound(0, 0, 3, -3, -3) );
// console.log( isRound(0, 0, 3, 3, -3) );
//
// console.log( isRound(0, 0, 3, 5, 10) );
// console.log( isRound(0, 0, 3, -5, 10) );
// console.log( isRound(0, 0, 3, -5, -10) );
// console.log( isRound(0, 0, 3, 5, -10) );


// // Testing: point is in the circle center
// console.log( isRound(3, 3, 3, 3, 3) );
//
// // Testing: point IS into the circle
// console.log( isRound(0, 0, 3, 1, 1) );
// console.log( isRound(0, 0, 3, 2, 2) );
//
// console.log( isRound(0, 0, 3, 1, 0) );
// console.log( isRound(0, 0, 3, 2, 0) );
// console.log( isRound(0, 0, 3, 3, 0) );
//
// console.log( isRound(0, 0, 3, 0, 1) );
// console.log( isRound(0, 0, 3, 0, 2) );
// console.log( isRound(0, 0, 3, 0, 3) );
//
// // Testing: point ISN'T into the circle
// console.log( isRound(0, 0, 3, 3, 3) );
// console.log( isRound(0, 0, 3, -3, 3) );
// console.log( isRound(0, 0, 3, -3, -3) );
// console.log( isRound(0, 0, 3, 3, -3) );
//
// console.log( isRound(0, 0, 3, 5, 10) );
// console.log( isRound(0, 0, 3, -5, 10) );
// console.log( isRound(0, 0, 3, -5, -10) );
// console.log( isRound(0, 0, 3, 5, -10) );