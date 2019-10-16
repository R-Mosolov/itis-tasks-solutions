function searchUnderarray(arr1, arr2) {
    for (let item of arr2) {

        if (item === arr[0]) {
            const firstItem = item;
        }

        if (item === arr[arr.length - 1]) {
            const lastItem = item;
        }
    }

    let result = [];
    result.push(firstItem, lastItem);
    return firstItem;

    // let underarray = [];
}

alert(searchUnderarray([3, 4, 5], [1, 2, 3, 4, 5, 6]));