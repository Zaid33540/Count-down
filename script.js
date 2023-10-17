 const endDate = "19 December 2023 10:00 AM"
 document.getElementById('end-date').innerText = endDate;
const inputs = document.querySelectorAll('input')
const clock=()=>{
    const end = new Date(endDate) /*It will convert end date into milliseconds*/
    
    const now = new Date()/*It will convert current date into milliseconds*/
    
    // console.log(end)
    // console.group(now)

    const diff = (end - now)/1000; /*It will calculate the diff b/w end and current date in seconds */

    if(diff<0) return; /* #### For stopping it at zero */

    // conevert into days
    inputs[0].value=(Math.floor(diff/3600/24 )); /* For putting data in inputs we use value */
  
// Converting to hours
inputs[1].value = (Math.floor(diff/3600)%24)

// Converting into minutes
inputs[2].value = (Math.floor(diff/60)%60);

// Converting into seconds
inputs[3].value = (Math.floor(diff)%60)

}

clock()

/**
 * 1 day = 24hrs
 * 1hr = 60mins
 * 60min = 3600sec
 */

// For calling funtion at each second

setInterval(
   ()=>{
    clock()
   },
   1000
)