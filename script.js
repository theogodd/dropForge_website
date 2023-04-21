const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

// info.textContent = 'Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.';

document.body.appendChild(info);
document.body.appendChild(list);

// Function to update time elements if they are less than 10
// Append 0 before time elements if they are less than 10
function update(t){
  if (t < 10) {
  return "0" + t;
  }
  else {
  return t;
  }
}

function Time(){
  // Creating object of the Date class
  var date = new Date();
  // Get current hour
  var hour = date.getHours();
  // Get current minute
  var minute = date.getMinutes();
  // Get current second
  var second = date.getSeconds();
  // Variable to store AM / PM
  var period = "";
  // Assigning AM / PM according to the current hour
  // if (hour >= 12) {
  // period = "PM";
  // } else {
  // period = "AM";
  // }
  // Converting the hour in 12-hour format
  if (hour == 0) {
  hour = 24;
  } else {
  if (hour > 24) {
  hour = hour - 24;
  }
  }
  // Updating hour, minute, and second
  // if they are less than 10
  hour = update(hour);
  minute = update(minute);
  second = update(second);
  // Adding time elements to the div
  document.getElementById("digital-clock").innerText = hour + ":" + minute + ":" + second + " " + period;
  // Set Timer to 1 sec (1000 ms)
  setTimeout(Time, 1000);
 }
 
 Time();