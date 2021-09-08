'use strict';

const binaryTree = require('./binaryTree');
const Node = require('./node');


class binarySearchTree extends binaryTree {
    constructor(root) {
        super(root);
    }

    Add(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            // this.recursive(this.root,newNode);
            let node = this.root;

            let recursive = (value) => {
                let newNode = new Node(value);

                if (newNode.value < node.value) {
                    if (!node.left) {
                        node.left = newNode;
                    }
                    else {
                        node=node.left;
                        recursive( newNode);
                    }
                } else {
                    if (!node.right) {
                        node.right = newNode;
                    }
                    else {
                        node=node.right
                        recursive(newNode);
                    }
                }
            }
            recursive(value);
        }
    }

    contain(value){
        let bool=false;
        let recursive=(node)=>{
            if (node.value===value){
                bool= true;
            }
            if(node.left){
                recursive(node.left);

            }
            if(node.right){
                recursive(node.right);
            }
        }
        recursive(this.root,value);
        return bool;


    }

    
  oddNumSum() {
    let arr = [];
    let oddSum =0;

    let oddNumber = (node) => {
      if (node !== null && node.value % 2 !== 0) {
        arr.push(node.value);
      }

      if (node.left) {
        oddNumber(node.left);
      }

      if (node.right) {
        oddNumber(node.right);
      }
    };
    oddNumber(this.root);
    console.log(arr);

    for (let i=0; i<arr.length; i++){
        oddSum =oddSum+ arr[i];
    }
    return oddSum;
  }







}

module.exports = binarySearchTree;