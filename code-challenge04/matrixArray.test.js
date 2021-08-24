// let arr2 = [[4, 5, 1,3],[3,2,1],[2,1]];
// let arr=[ [1, 2, 3], [3, 5, 7], [1, 7, 10] ];
// let arr3=[ [0, 1, 5], [-4, 7, 2], [-3, 12, 11] ];

let i = 0;
let sum = 0;
let matrixArr = [];


function matrixArray(arr) {

    for (i = 0; i <= arr.length - 1; i++) {
        for (let j = 0; j <= arr[i].length - 1; j++) {
            sum = sum + arr[i][j];
        }
        matrixArr.push(sum);
        sum = 0;
    }
    return matrixArr;
}

// matrixArray(arr);


describe('Testing Sum Matrix Array ', () => {
    it('It should add up sum of each row in a matrix of arbitrary size, and return an array with the appropriate values.', () => {
        expect(matrixArray(
            [ [0, 1, 5], [-4, 7, 2], [-3, 12, 11] ])
            ).toStrictEqual([6, 5, 20]);
    });
  });
  
