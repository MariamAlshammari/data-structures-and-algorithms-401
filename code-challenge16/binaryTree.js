'use strict';

class binaryTree{
    constructor(root){
        this.root=root;
    }

    preOrder(){
        let arr=[];

        let recursive=(node)=>{
            arr.push(node.value);
            if(node.left){
                recursive(node.left);
            }
            if(node.right){
                recursive(node.right);
            }
        }
        recursive(this.root);
        return arr;
    }

    inOrder(){
        let arr=[];

        let recursive=(node)=>{
            if(node.left){
                recursive(node.left);
            }

            arr.push(node.value);
            
            if(node.right){
                recursive(node.right);
            }
        }
        recursive(this.root);
        return arr;
    }

    postOrder(){
        let arr=[];

        let recursive=(node)=>{
            if(node.left){
                recursive(node.left);
            }
            if(node.right){
                recursive(node.right);
            }
            arr.push(node.value);
        }
        recursive(this.root);
        return arr;
    }

    maximumValue(){
        if(!this.root){
            return 'empty';
        }
        let maxValue=this.root.value;
        let recursive=(node)=>{
            if(node.left){
                recursive(node.left);
            }
            if(node.right){
                recursive(node.right);
            }
            if(node.value> maxValue){
                maxValue=node.value;
            }

        }
        recursive(this.root);
        return maxValue;
    }




}
module.exports = binaryTree;