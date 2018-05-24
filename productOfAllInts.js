function getProductsOfAllIntsExceptAtIndex(arr, i) {
    const beforeIndex = [];
    const afterIndex = [];
    const solutionArr = [];
    const len = arr.length;

    let accumulated = 1;
    for(let i = 0; i < arr.length; i++) {
        accumulated *= arr[i];
        beforeIndex[i] = accumulated;
    }
    accumulated = 1;
    for(let i = len - 1; i >= 0; i--) {
       accumulated *= arr[i];
       afterIndex[i] = accumulated; 
    }
    let product = 1; 
    for(let i = 0; i < len; i++) {
        if((i > 0) && (i < len - 1)) {
            product = beforeIndex[i - 1] * afterIndex[i + 1]; 
        }
        else if ( i == 0) {
            product = afterIndex[1];
        }
        else {
            product = beforeIndex[len - 2]
        }
       solutionArr[i] = product;
    } 

    return solutionArr;
}

console.log(prod([1,7,3,4], 1));

