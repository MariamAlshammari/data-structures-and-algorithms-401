const HashTable=require('../hashtable');


describe("HASH TABLE TESTS", () => {
    let hashTable;
    beforeAll(() => {
      hashTable = new HashTable(50);
      hashTable.add("name", "Mariam");
      hashTable.add("age", "23");
    });
  
    //Adding a key/value to  hashtable .
    it("add the key and value pair to the table.", () => {
      let hash1 = hashTable.hash("name");
      let hash2 = hashTable.hash("age");

      expect(hashTable.map[hash1].head.value).toEqual({ name: "Mariam" });

      expect(hashTable.map[hash2].head.value).toEqual({age: "23" });
      
      
    });
  
    //get value based on a key 
    it("Returns: Value associated with that key in the table", () => {
      expect(hashTable.get("name")).toEqual("Mariam");
      expect(hashTable.get("age")).toEqual("23");
     
    });
  

 
  
   //hash a key
    it("Returns: Index in the collection for that key", () => {
     
        expect(hashTable.hash("name")).toBeLessThan(50);
    });
  
  //, indicating if the key exists in the table
    it(" Returns: Boolean,indicating if the key exists in the table already ", () => {
      expect(hashTable.contains("name")).toBeTruthy();
      expect(hashTable.contains("cat")).toBe(false);
    });
  });