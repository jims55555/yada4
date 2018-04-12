console.log(__dirname);
console.log(__filename);
console.log(myFunction('yes', 'no'));

let myFunction = (yarp, narp) => {
  console.log(yarp, narp);
};
//
// myFunction('hello', 'goodbye');
//
// setTimeout(() => {
//   console.log('3 seconds have passed');
// }, 3000);

// var time = 0;
//
// setInterval(function() {
//   time += 2;
//   console.log(time + ' seconds have passed');
//   if (time > 5) {
//     clearInterval(time);
//   }
// }, 2000);
