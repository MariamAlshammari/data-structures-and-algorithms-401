
//   let arr = [4, 8, 15, 16, 23, 42];

  function BinarySearch(arr, val) {
    let low = 0;
    let high = arr.length - 1

    while(low <= high) {
        let mid = Math.floor((low + high) / 2)
        let theMiddle = arr[mid]
        if(theMiddle === val) {
            // console.log(mid)

            return mid;
        }
    
        if(theMiddle > val) {
            high = mid - 1
        } else {
            low =  mid + 1
        }

    }    
    // return ('Not found');
    return -1;
}
  // insertShiftArray(arr2,306);
  
  describe('Testing Array Binary Search ', () => {
      it('It should return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.', () => {
          expect(BinarySearch(([4, 8, 15, 16, 23, 42]),15)).toStrictEqual(2);
      });
    });