function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; // Found the target
      } else if (arr[mid] < target) {
        left = mid + 1; // Search the right half
      } else {
        right = mid - 1; // Search the left half
      }
    }
  
    return -1; // Target not found
  }
  
  const sortedArray = [1, 2, 3, 4, 5, 6, 7];
  const targetValue = 4;
  console.log(binarySearch(sortedArray, targetValue)); // Output: 3
  