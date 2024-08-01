// ================== 14 Aug===============================

var newDate = new Date("Aug 14, 2024 00:00:00").getTime();

var setDate = setInterval(function () {
  var currentDate = new Date().getTime();
  var distanceBtw = newDate - currentDate;
  var day = Math.floor(distanceBtw / (1000 * 60 * 60 * 24));
  var hour = Math.floor(distanceBtw % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var min = Math.floor(distanceBtw % (1000 * 60 * 60) / (1000 * 60))
  var sec = Math.floor(distanceBtw % (1000 * 60) / 1000)
  document.getElementById("days").innerHTML = day
  document.getElementById("hours").innerHTML = hour
  document.getElementById("min").innerHTML = min 
  document.getElementById("sec").innerHTML = sec 

  if (distanceBtw < 0) {
    clearInterval(setDate)
    document.getElementById("wtf").innerHTML = "Expired"
  }
}, 1000)