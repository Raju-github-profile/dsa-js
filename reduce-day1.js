/*
Find average age of all people who has atleast one skill common to each other.
Using es6 reduce method.
*/

const people = [
    { name: 'Alice', age: 28, skills: ['JavaScript', 'Python', 'SQL'] },
    { name: 'Bob', age: 35, skills: ['Java', 'C++', 'Python'] },
    { name: 'Messi', age: 20, skills: ['Typescript','webRTC'] },
    { name: 'Carol', age: 20, skills: ['JavaScript', 'Ruby', 'Rust'] },
    { name: 'David', age: 40, skills: ['Python', 'Go', 'Rust'] },
];

// arr automatically understands that it is original array
const commonSkillsPeople =
    people
        .reduce((acc, curr, index, arr) => {
            const validPeople = curr.skills.filter((skill) =>
                arr.some(user => user === curr ? false : user?.skills.includes(skill))
            )
            if (validPeople.length > 0) {
                let totalAge = acc.totalAge + curr.age;
                let count = acc.count + 1;
                return { totalAge, count }
            }
            return acc;
        }, { totalAge: 0, count: 0 })

const averageAge=commonSkillsPeople.totalAge/commonSkillsPeople.count
console.log({averageAge})


const arr = [
    { id: 11, name: 'Raju', age: 23 },
    { id: 22, name: 'Sameer', age: 20 },
    { id: 33, name: 'Priyanka', age: 24 },
    { id: 44, name: 'Smriti', age: 21 },
]

const sumOfAges = arr.reduce((acc, current) => acc + current.age, 0);
console.log({ sumOfAges });