const binarySearchTree=require('../binarySearchTree');
const Node=require('../node');

describe('binary search tree',()=>{
    // let tree=null;
    // beforeAll(()=>{
     
    //     tree=new binarySearchTree();
    //     tree.Add(2);
    //     tree.Add(5);
    // });

    it('Adds a new node with that value in the correct location in the binary search tree.',()=>{
        tree=new binarySearchTree();
            tree.Add(2);
            tree.Add(5);


expect(tree.root.value).toEqual(2);
expect(tree.root.right.value).toEqual(5);
tree.Add(1);
expect(tree.root.left.value).toEqual(1);


    });
    it('Returns: boolean indicating whether or not the value is in the tree at least once',()=>{
        let five = new Node(5);
        let three = new Node(3);
        let four = new Node(4);
        let six = new Node(6);
        let seven = new Node(7);
        let nine = new Node(9);
        let ten=new Node(10);

        five.left=four;
        five.right=nine;
        four.left=three;
        four.right=six;
        nine.left=seven;
        nine.right=ten
      
        tree=new binarySearchTree(five);
            // tree.Add(2);
            // tree.Add(5);


expect(tree.contain(9)).toEqual(true);
expect(tree.contain(1)).toEqual(false);
expect(tree.contain(5)).toEqual(true);
expect(tree.contain(2)).toEqual(false);
expect(tree.contain(10)).toEqual(true);



    });
   
})
  