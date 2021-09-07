'use strici';

let fizzBuzzTree = (tree) => {
    if (tree.root === null) {
        return 'empty';
    }
    // let maxValue=this.root.value;
    let recursive = (node) => {
        if (node.value % 3===0 && node.value % 5===0) {
            node.value = 'FizzBuzz';
            console.log(node.value);
        }
        else if (node.value % 3 === 0) {
            node.value = 'Fizz';
            console.log(node.value);

        }
        else if (node.value % 5 === 0) {
            node.value = 'Buzz';
        }
        else node.value=node.value.toString();

        for (let i = 0; i < node.children.length; i++) {
           recursive(node.children[i]);
            
        }


    };
    recursive(tree.root);
    return tree;
}

module.exports=fizzBuzzTree;