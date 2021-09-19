const selectionSort = require('../insertionSort')
const insertionSort=require('../insertionSort')

describe("Selection Sort",()=>{
    it("return sorted array ",()=>{
        let arr=[20,18,12,8,5,-2]
        let result=[-2,5,8,12,18,20]

        expect(selectionSort(arr)).toEqual(result)
    });
    it("Reverse-sorted ", () => {
        let arr = [20, 18, 12, 8, 5, -2];
        let result = [-2, 5, 8, 12, 18, 20];
    
        expect(selectionSort(arr)).toEqual(result);
      });
    
      it("Few uniques", () => {
        let arr = [5,12,7,5,5,7];
        let result = [5, 5, 5, 7, 7, 12];
    
        expect(selectionSort(arr)).toEqual(result);
      });
    
      it("Nearly-sorted  ", () => {
        let arr = [2,3,5,7,13,11];
        let result = [2,3,5,7,11,13];
    
        expect(selectionSort(arr)).toEqual(result);
      });
})