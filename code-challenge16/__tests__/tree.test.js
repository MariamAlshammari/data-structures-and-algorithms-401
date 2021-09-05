'use strict';

const BinaryTree = require('../binaryTree');
const Node = require('../node');

describe('binary tree', () => {
    let tree = null;
    beforeAll(() => {
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        let eight = new Node(8);
        let nine = new Node(9);
        let ten = new Node(10);

        one.left = two;
        one.right = three;
        two.left = four;
        two.right = five;
        three.left = six;
        three.right = seven
        four.left = eight;
        four.right = nine;
        nine.left = ten;
        tree = new BinaryTree(one);
    });

    it('preOrder', () => {
        let preOrder = tree.preOrder();
        let expected = [1, 2, 4, 8, 9, 10, 5, 3, 6, 7];
        expect(preOrder).toEqual(expected);
    });
    it('inOrder', () => {
        let inOrder = tree.inOrder();
        let expected = [8, 4, 10, 9, 2, 5, 1, 6, 3, 7];
        expect(inOrder).toEqual(expected);
    });

    it('postOrder', () => {
        let postOrder = tree.postOrder();
        let expected = [8, 10, 9, 4, 5, 2, 6, 7, 3, 1];
        expect(postOrder).toEqual(expected);
    });
    it('Find the maximum value stored in the tree', () => {
        let maximumValue = tree.maximumValue();

        expect(maximumValue).toEqual(10);
    });
    it('return empty', () => {
        // let tree = null;
        tree = new BinaryTree
        // let maximumValue = tree.maximumValue();

        expect(tree.maximumValue()).toEqual('empty');
    });


})