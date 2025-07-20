const addressLat = 10;
const addressLong = 10;
const positionLat = 20;
const positionLong = 20;
const R = 6371

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

const res = R*Math.acos(Math.sin(toRadians(addressLat))*Math.sin(toRadians(positionLat)) + Math.cos(toRadians(addressLat))*Math.cos(toRadians(positionLat))*Math.cos(toRadians(positionLong - addressLong)));

console.log('Расстояние равно ' + res);

