
let hr = document.querySelector('#hr');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');

setInterval(() =>{
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;
    
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;



// ==========digital clock
let hours = document.querySelector('#hour');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let ampm = document.querySelector('#ampm');

let h = day.getHours();
let m = day.getMinutes();
let s = day.getSeconds();
let am = h >= 12 ? "PM" : "AM";

if(h > 12){
    h = h - 12;
}
if(h == 0){
    h = 12;
}

h = (h < 10) ? '0' + h : h;
m = (m < 10) ? '0' + m : m;
s = (s < 10) ? '0' + s : s;

hours.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;
ampm.innerHTML = am;

});

