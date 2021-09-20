const mergeSort=require('../mergeSort')

describe('Merge Sort', () => {

  it('array sorted from lowest to highest value', () => {
      let arr = [8, 4, 23, 42, 16, 15];
      mergeSort(arr);
      // console.log(arr);
      expect(arr).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('can Reverse-sorted: ', () => {
      let arr = [20,18,12,8,5,-2];
      mergeSort(arr);
      expect(arr).toEqual([-2, 5, 8, 12, 18, 20]);
  });
  it('Few uniques: ', () => {
    let arr = [5,12,7,5,5,7];
    mergeSort(arr);
    expect(arr).toEqual([5, 5, 5, 7, 7, 12]);
});

});