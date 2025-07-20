const addressLat = 10;
const addressLong = 10;
const positionLat = 20;
const positionLong = 20;

const res = (positionLong - addressLong)**2 + (positionLat - addressLat)**2;

console.log('Расстояние равно ' + res);

