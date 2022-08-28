const x = [5,2,1,9,10,11];
const y = [15,11,21,10,1199,6115];

const sortArray = [...x.sort((a,b) => a-b), ...y.sort((a,b) => a-b)];
console.log(sortArray);