const arrayData = [0,0,0,0,,0,1,2,1,2,0,1,2,1,0,1,2,1,0]

const countOccurrences = (array, val) => array.reduce((a, v) => (v === val ?  a + 1 : a), 0)

const sad = countOccurrences(arrayData, 0);
const ok = countOccurrences(arrayData, 1);
const happy = countOccurrences(arrayData, 2)


console.log(sad, ok, happy);