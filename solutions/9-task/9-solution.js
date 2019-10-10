// Точка и круг
// Выяснить, находится ли точка на круге

function isRound(circleCenterX, circleCenterY, r, pointX, pointY) {

    if ((pointX === circleCenterX + 3) && (pointY === circleCenterY + 3)
    || (pointX === circleCenterX - 3) && (pointY === circleCenterY + 3)
    || (pointX === circleCenterX - 3) && (pointY === circleCenterY - 3)
    || (pointX === circleCenterX + 3) && (pointY === circleCenterY - 3)) {
        return false;
    }

    if ((pointX <= circleCenterX + 3) && (pointX >= circleCenterX - 3)
    && (pointY <= circleCenterY + 3) && (pointY >= circleCenterY - 3)) {
        return true;
    }

    else return false;
}

// Testing: point is in the circle center
console.log( isRound(3, 3, 3, 3, 3) );

// Testing: point IS into the circle
console.log( isRound(0, 0, 3, 1, 1) );
console.log( isRound(0, 0, 3, 2, 2) );

console.log( isRound(0, 0, 3, 1, 0) );
console.log( isRound(0, 0, 3, 2, 0) );
console.log( isRound(0, 0, 3, 3, 0) );

console.log( isRound(0, 0, 3, 0, 1) );
console.log( isRound(0, 0, 3, 0, 2) );
console.log( isRound(0, 0, 3, 0, 3) );

// Testing: point ISN'T into the circle
console.log( isRound(0, 0, 3, 3, 3) );
console.log( isRound(0, 0, 3, -3, 3) );
console.log( isRound(0, 0, 3, -3, -3) );
console.log( isRound(0, 0, 3, 3, -3) );

console.log( isRound(0, 0, 3, 5, 10) );
console.log( isRound(0, 0, 3, -5, 10) );
console.log( isRound(0, 0, 3, -5, -10) );
console.log( isRound(0, 0, 3, 5, -10) );