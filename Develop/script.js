//First i need to display time and date in the jumbotron on page load
//Using moment and the id of currentDay
$(document).ready(function () 
    
  var now = new Date().getHours();
  var today = moment();
  console.log(now)
  $(".currentDay").text(today.format('MMMM DD, YYYY'));

  function displayTime() {
      let today = moment();
      let timeNow = today.format('h:mm:ss a');
      $(".timeToday").text(timeNow);
  }
  setInterval(displayTime, 500);
)
