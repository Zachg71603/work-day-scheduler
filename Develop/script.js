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

  //Give button onclick that runs a function that saves the input text and
  //adds to local storage.
  //local storage fixed. Reached out to bcs learning assistant and got great help
  //Issue was on line 28 regarding me targeting only one text area for the value
  //I am storing
  $(".hourBlock").each(function (i) {
      //console.log(i)
      //console.log(this); 
      const parent = $(this).children()[2];
      $(parent).children().on("click", function (event) {

          event.preventDefault();
          var text = $(this).parent().siblings(".textSave").val()

          localStorage.setItem(("text-" + i), text);

      })
  })
  $("#hour9 .textSave").val(localStorage.getItem("text-0"))
  $("#hour10 .textSave").val(localStorage.getItem("text-1"))
  $("#hour11 .textSave").val(localStorage.getItem("text-2"))
  $("#hour12 .textSave").val(localStorage.getItem("text-3"))
  $("#hour1 .textSave").val(localStorage.getItem("text-4"))
  $("#hour2 .textSave").val(localStorage.getItem("text-5"))
  $("#hour3 .textSave").val(localStorage.getItem("text-6"))
  $("#hour4 .textSave").val(localStorage.getItem("text-7"))
  $("#hour5 .textSave").val(localStorage.getItem("text-8"))