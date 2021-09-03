"use strict";

const pseudoQueue = require('../stack-queue-pseudo');

describe('Sudo queue', () => {
it('Can successfully enqueue ontopseudoQueue,Can successfully peek the next item on the stack ', () => {
    const pseudo = new pseudoQueue();
    // stack.push(1);
    // expect(stack.peek()).toBe(1);
    // stack.push(2);
    // stack.push(3);
    expect(pseudo.enqueue(5)).toBe(5);
});
it('Can successfully dequeue from pseudoQueue, ', () => {
    const pseudo = new pseudoQueue();
    // pseudo.enqueue(9);
    pseudo.enqueue(6);
    expect(pseudo.dequeue()).toBe(6);
    // expect(stack.top).toBe(null);
});
it('Can successfully return empty ', () => {
    const pseudo = new pseudoQueue();
    // pseudo.enqueue(9);
    // pseudo.enqueue(6);
    expect(pseudo.dequeue()).toBe("empty");
    // expect(stack.top).toBe(null);
});




})
