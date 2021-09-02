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







}

module.exports = binarySearchTree;