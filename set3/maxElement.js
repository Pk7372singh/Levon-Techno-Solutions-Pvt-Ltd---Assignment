function maxElement(arr) {
    let max = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let arr = [3, 5, 7, 2, 8, 6];
console.log("The maximum element is: " + maxElement(arr));
