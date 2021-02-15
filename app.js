'use strict';

let today = new  Date();
let formatDate = today.toLocaleString('en-gb', {weekday: 'long'});
let formatTime = today.toLocaleString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate.concat(" ",formatTime);