const split400Output = document.getElementById('split400')
const milePaceOutput = document.getElementById('milePace')
const distanceInput = document.getElementById('distance')
const timeInput = document.getElementById('time')

document.getElementById('button').onclick = function() {
   distance = parseInt(distanceInput.value)
   time = timeInput.value

   if(isNaN(distance)) {
      invalid()
      return
   }

   laps = distance / 400
   miles = laps / 4

   //parse time for minutes and seconds
   if(time.includes(':')) {
      times = time.split(':')
      if(times.length != 2 || isNaN(times[0] || isNaN(times[1]))) {
         invalid()
         return
      }
      minutes = parseInt(times[0])
      seconds = parseInt(times[1])
   } else {
      if(isNaN(time)) {
         invalid()
         return
      }
      minutes = 0
      seconds = parseInt(time)
   }

   total_seconds = (minutes * 60) + seconds
   lap_time = total_seconds / laps
   lapTimeStr = Math.floor(lap_time / 60) + ':' + (lap_time % 60).toFixed(2)

   mileTime = total_seconds / miles
   mileTimeStr = Math.floor(mileTime / 60) + ':' + (mileTime % 60).toFixed(2)

   split400Output.innerHTML = lapTimeStr
   milePaceOutput.innerHTML = mileTimeStr
};

function invalid() {
   split400Output.innerHTML = 'Invalid input'
   milePaceOutput.innerHTML = 'Invalid input'
}