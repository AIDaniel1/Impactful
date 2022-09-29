 const coundown = () => {
    const countDate = new Date('October 20, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor( gap / day);

    const textHour = Math.floor(
       ( gap % day ) / hour 
    )
    const textMinute = Math.floor(
        ( gap % hour) / minute
     )
     const textSecond = Math.floor(
        ( gap % minute) / second
     )
    // console.log(textDay);

    
 document.querySelector(".day").innerText = textDay;
 document.querySelector(".hour").innerText = textHour;
 document.querySelector(".min").innerText = textMinute;
 document.querySelector(".sec").innerText = textSecond;
 };

setInterval(coundown, 1000)


const counters = document.querySelector('.jscounter');
const speed = 2000;

counters.forEach(counter => {
   const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      const inc = target / speed;

      console.log(count);

      if(count < target) {

         counter.innerText = Math.ceil(count + inc);
         setTimeout(updateCount, 1);
      } else{
         count.innerText = target;
      }
   }  
   updateCount();
})