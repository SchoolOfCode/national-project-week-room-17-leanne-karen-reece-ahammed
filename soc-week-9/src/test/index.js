const arrayData = [1,1,1,1,2,2,1,2,4,2,5,2,6,2,3,1,5,2,4,3,5,3,2,];

const countOccurrences = (array, val) => array.reduce((a, v) => (v === val ?  a + 1 : a), 0)

console.log(countOccurrences(arrayData, 6));