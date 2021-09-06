'use strict';

let breadthFirst=(tree)=>{
let arr=[];
arr.push(tree.root.value);

let recursive=(node)=>{
    arr.push(node.left.value);
    arr.push(node.right.value);

    if(node.left.left){
        recursive(node.left);
    }
    if(node.right.right){
        recursive(node.right);
    }
}
recursive(tree.root);
return arr;
       



}
module.exports = breadthFirst;