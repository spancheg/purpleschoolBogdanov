const addressLat = 10;
const addressLong = 10;
const positionLat = 20;
const positionLong = 20;

const res = Math.acos(Math.sin(addressLat)*Math.sin(positionLat) + Math.cos(addressLat)*Math.cos(positionLat)*Math.cos(positionLong - addressLong))

console.log('Расстояние равно ' + res);

