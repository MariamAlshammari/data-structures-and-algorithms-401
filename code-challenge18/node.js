'use strict';

class Node{
    constructor(value, left=null,right=null){
        this.value=value;
        this.children=[];
    }
}

module.exports=Node;