// const hardestOneLiner = (a, b) => a.reduce((acc, val) => ({ ...acc, [val]: (acc[val] || 0) + b.filter(e => e === val).length }), {});

const a = ['apple', 'banana', 'cherry'];
const b = ['apple', 'banana', 'cherry', 'banana', 'cherry', 'cherry', 'grape'];

// const hardestOneLiner = (a, b) => a.reduce((acc, val) => ({
//     ...acc,
//     [val]: (acc[val] || 0) + b.filter(e => e === val).length
// }), {});



const hardestOneLiner = (a, b) => {
    // want to return value count in object format
    a.reduce((acc, value) => {
        return {
            ...acc,
            [value]: (acc[value] || 0) + b.filter(item => item === value).length
        }
    }, {})
}
const data = hardestOneLiner(a, b);
