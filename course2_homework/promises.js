// WEEK
const promiseWeek = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise resolved after 1 week');
    }, 7 * 24 * 60 * 60 * 1000);
});

promiseWeek.then((result) => {
    console.log(result);
});

// MONTH
const promiseMonth = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise resolved after 1 month');
    }, 30 * 24 * 60 * 60 * 1000);
});

promiseMonth.then((result) => {
    console.log(result);
});

// YEAR
const promiseYear = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise resolved after 1 year');
    }, 365 * 24 * 60 * 60 * 1000);
});

promiseYear.then((result) => {
    console.log(result);
});

