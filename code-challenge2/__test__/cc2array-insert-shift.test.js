'use strict';
// const supertest = require('supertest');
// const cc2array = require('../cc2array-insert-shift');
// const request = supertest(cc2array);


// let arr2 = [0, 55,6,5,4,0,99,77,6];

// let arr=[89, 2354, 3546, 23, 10, -923, 823, -12];

function insertShiftArray(arr,value){
  let theMiddle = Math.floor(arr.length / 2);
  // let val = arr[theMiddle]; 
  arr.splice(theMiddle,0,value);
  console.log(arr)
  return arr;


}

// insertShiftArray(arr2,306);

describe('Testing Array insert shift', () => {
    it('It should return an array with the new value added at the middle index', () => {
        expect(insertShiftArray(([1, 2, 3, 5, 6,7]),4)).toStrictEqual([1, 2, 3,4, 5, 6,7]);
    });
  });
 
