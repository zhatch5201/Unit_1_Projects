'use strict';
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: 
   Date:   

*/
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();
// console.log(thisTime, timeStr); Was throwing a Reference error

document.getElementById('timeStamp').innerHTML = timeStr;
// Was throwing NullError because wrong ID
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
var mapNum = (2 * thisMonth + thisHour) % 24; // Formula for the skymap number
// console.log(mapNum);

var imgStr = '<img src=sd_sky' + mapNum + '.png />';
// console.log(imgStr); Was missing a '.'
document.getElementById('planisphere').insertAdjacentHTML('afterbegin', imgStr);
