const split400Output = document.getElementById('split400')
const milePaceOutput = document.getElementById('milePace')
const targetOutput = document.getElementById('targetPace')
const distanceInput = document.getElementById('distance')
const timeInput = document.getElementById('time')
const targetInput = document.getElementById('target')

document.getElementById('button').onclick = function() {
   distance = parseInt(distanceInput.value)
   time = timeInput.value
   target = parseInt(targetInput.value)

   if(isNaN(distance)) {
      invalid()
      return
   }

   if(isNaN(target)) {
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
   if(lap_time>=100) {
      if((lap_time % 60).toFixed(2) < 10){
         lapTimeStr = Math.floor(lap_time / 60) + ':0' + (lap_time % 60).toFixed(2)
      } else {
      lapTimeStr = Math.floor(lap_time / 60) + ':' + (lap_time % 60).toFixed(2)
      }
   } else {
      lapTimeStr = lap_time.toFixed(2)
   }

   mileTime = total_seconds / miles
   if(Math.round(mileTime % 60) < 10){
      mileTimeStr = Math.floor(mileTime / 60) + ':0' + Math.round(mileTime % 60)
   } else {
      if(Math.round(mileTime % 60) == 60){
         mileTimeStr = (Math.floor(mileTime / 60) + 1) + ':00'
      } else {
      mileTimeStr = Math.floor(mileTime / 60) + ':' + Math.round(mileTime % 60)
      }
   }

   target_time = mileTime * (target / 1600)
   if(target_time>=100) {
      if((target_time % 60).toFixed(2) < 10){
         targetTimeStr = Math.floor(target_time / 60) + ':0' + (target_time % 60).toFixed(2)
      } else {
      targetTimeStr = Math.floor(target_time / 60) + ':' + (target_time % 60).toFixed(2)
      }
   } else {
      targetTimeStr = target_time.toFixed(2)
   }

   split400Output.innerHTML = lapTimeStr
   milePaceOutput.innerHTML = mileTimeStr
   targetOutput.innerHTML = targetTimeStr
};

function invalid() {
   split400Output.innerHTML = 'Invalid input'
   milePaceOutput.innerHTML = 'Invalid input'
   targetOutput.innerHTML = 'Invalid input'
}
