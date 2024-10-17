function removeDuplicates(arr) {
    if (arr.length === 0) return 0;

    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j]; 
        }
    }

    return i + 1; 
}

let arr2 = [1, 1, 2, 2, 3, 4, 4, 5];
let newLength = removeDuplicates(arr2);

console.log("Array with unique elements:", arr2.slice(0, newLength));  
console.log("New length:", newLength);  
