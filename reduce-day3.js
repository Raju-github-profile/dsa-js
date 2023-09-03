const expenses = [
    { category: 'Food', amount: 50 },
    { category: 'Transportation', amount: 30 },
    { category: 'Transportation', amount: 10 },
    { category: 'Food', amount: 20 },
    { category: 'MOMO', amount: 40 },
    { category: 'SNACKS', amount: 60 },
    { category: 'RefreshEnh.', amount: 80 },
    { category: 'Travel.', amount: 90 },

];

const expenseSummary = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
}, {});

console.log(expenseSummary);
// { Food: 70, Transportation: 30 }
// operational transforming that leads to make ip the tomorroe