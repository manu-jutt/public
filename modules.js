import { PI, getcircumference, getArea, getVolume } from './mathUtil.js';

console.log(PI);

const Circumference = getcircumference(10);
const area = getArea(10);
const Volume = getVolume(10);

console.log(`${Circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${Volume.toFixed(2)}cm^3`);