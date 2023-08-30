// Boolean representation of the data structure
const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 72 },
    { name: 'Charlie', score: 45 },
    { name: 'David', score: 93 },
];

const someResult = students.some(std => std.score > 92)
console.log({ someResult })

const everyResult=students.every(std=>std.score > 50);
console.log({everyResult})