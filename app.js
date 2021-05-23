console.log('Feladat1')

const names = ['István', 'Katalin', 'Attila', 'Gábor', 'Péter', 'Anna', 'Kitti'];

function vaneNév() {
  let valasz1 = 'Gábor név nincs'
  for (let i = 0; i < names.length; i++) {
    if (names[i] === 'Gábor') {
      valasz1 = 'van benne Gábor, ' + (i + 1) + '.-ik elem'
    }
  }
  return valasz1;
}
console.log(vaneNév());


console.log('Feladat2')

const nums = [4, 2, 2, 1, 1];

function Osszeg() {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  return sum;
}
console.log('A számok összege: ' + Osszeg());

console.log('Feladat3')

const numsi = ['a', 4, 2, 2, 1, 1];

function Osszeg2() {
  let sumi = 0;
  for (let i = 0; i < numsi.length; i++) {
    if (typeof (numsi[i]) === 'number') {

      sumi = sumi + numsi[i];
    }
    else console.log('"' + numsi[i] + '"' + ' is not a number')
  }
  return sumi;
}
console.log(Osszeg2());


console.log('Feladat4')

const numsj = ['a', 4, 2, 2, 1, 1];

function Osszeg3() {
  let sumj = 0;
  for (let i = 0; i < numsj.length; i++) {
    if (typeof (numsj[i]) === 'number') {

      sumj = sumj + numsj[i];
    }
    else {
      console.log('"' + numsj[i] + '"' + ' is not a number');
      let x = 0;
      x = parseInt(numsj[i]);

      if (isNaN(x) === false) {
        sumj = sumj + x;
      }
      else {
        console.log('nem sikerült a konvertálás')
      }

    }
  }
  return sumj;
}

console.log('A számok osszege ' + Osszeg3());