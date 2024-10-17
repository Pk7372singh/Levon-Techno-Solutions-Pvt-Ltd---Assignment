function rotateArray(arr, k) {
    k = k % arr.length;  
    function reverse(arr, start, end) {
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);

    return arr;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log("Rotated Array:", rotateArray(arr1, k)); 
