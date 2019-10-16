// Точка и круг
// Выяснить, находится ли точка на круге

function isRound(x, x0, r, y, y0) {
    if(y < Math.sqrt(Math.pow(r, 2) - Math.pow(x - x0, 2) + y0)) {
        return true;
    }

    else return false;
}

// Testing
console.log( isRound(1, 0, 3, 1, 0) ); // true
console.log( isRound(3, 0, 3, 3, 0) ); // false