let container = document.querySelector('.container');let timeNow = new Date().getHours();
// console.log(timeNow);
// timeNow = 13;
let greeting =
  timeNow >= 5 && timeNow < 12
    ? 'Good Morning'
    : timeNow >= 12 && timeNow < 18
    ? 'Good Afternoon'
    : 'Good evening';

// console.log(greeting);

container.innerHTML = `<h1> ${greeting} <\h1>`;
