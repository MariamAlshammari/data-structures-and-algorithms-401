"use strict";

const BinaryTree = require("../binaryTree");
const Node = require("../node");
const fizzBuzzTree = require("../tree-fizz-buzz");

describe("K-ary tree", () => {
    it("value divisible by 3", () => {
        let tree = new BinaryTree();
        let node0 = new Node(2);
        let node1 = new Node(5);
        let node2 = new Node(7);
        let node3 = new Node(15);
        let node4 = new Node(20);
        let node5 = new Node(23);
        let node6 = new Node(25);
        let node7 = new Node(30);
        let node8 = new Node(31);


        node0.children.push(node1);
        node1.children.push(node2);
        node2.children.push(node3);
        node3.children.push(node4);
        node4.children.push(node5);
        node5.children.push(node6);
        node6.children.push(node7);
        node7.children.push(node8);


        tree.root = node0;

        // let result = fizzBuzzTree(tree);
        // let tree = new BinaryTree();
        tree.root = new Node(3);
        let result = fizzBuzzTree(tree);
        expect(result.root.value).toEqual("Fizz");
    });
    it("value divisible by 5", () => {
        let tree = new BinaryTree();
        tree.root = new Node(5);
        let result = fizzBuzzTree(tree);
        expect(result.root.value).toEqual("Buzz");
    }); it("value divisible by 5 & 3", () => {
        let tree = new BinaryTree();
        tree.root = new Node(15);
        let result = fizzBuzzTree(tree);
        expect(result.root.value).toEqual("FizzBuzz");
    });

    it("value not divisible by 5 & 3", () => {
        let tree = new BinaryTree();
        tree.root = new Node(7);
        let result = fizzBuzzTree(tree);
        expect(result.root.value).toEqual("7");
    });
    it("empty tree", () => {
        let tree = new BinaryTree();
        tree.root = null;
        let result = fizzBuzzTree(tree);
        expect(result.root).toEqual(undefined);
    });
})