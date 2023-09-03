// const isSubarray = (arr1, arr2) => {
//     return arr1.every(value => arr2.includes(value));
//   };

//   const array1 = [1, 2, 3,6];
//   const array2 = [0, 1, 2, 3, 4, 5];

//   console.log(isSubarray(array1, array2)); // Output: true


const kirana = ['dal', 'chamal', 'tel',];
const wholeSale = ['bora-chamal', 'dal', 'chamal', 'tel'];

const isSubArray = (arr1, arr2) => {
    return arr1.every(item => arr2.includes(item))
}
console.log(isSubArray(kirana, wholeSale));