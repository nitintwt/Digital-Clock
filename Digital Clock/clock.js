const hour = document.getElementById('hour'); // saving different elements using dom into a variable, so we can use it further in the code.
const minute = document.getElementById('minute');
const second = document.getElementById('second');

setInterval(function () { // using a setInterval method , that will  automatically update the current time at a specific interval of time
  const currentTime = new Date();  // new Date() method will give the current date and time 
  let hours = currentTime.getHours();  // will assign the hour , which we got from the Date() , to a new variable
  let minutes = currentTime.getMinutes();// will assign the minute , which we got from the Date() , to a new variable
  let seconds = currentTime.getSeconds();// will assign the second , which we got from the Date() , to a new variable


  hours = hours < 10 ? '0' + hours : hours;   //This line of code checks if the hours,minutes or seconds variable is less than 10.
  minutes = minutes < 10 ? '0' + minutes : minutes; // //it means it's a single digit (for example, 1, 2, 3, etc.). In this case, the code adds a leading zero before the single digit.                                        
  seconds = seconds < 10 ? '0' + seconds : seconds;

  hour.textContent = hours;  // this will show the hour , minute and seconds  in a HTML elements
  minute.textContent = minutes;
  second.textContent = seconds;

}, 1000);  // at every 1 seconds , the time will be updated automatically


