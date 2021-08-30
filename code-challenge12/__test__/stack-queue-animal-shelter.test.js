"use strict";

const AnimalShelter = require('../stack-queue-animal-shelter');

describe('Stack', () => {
it('Can successfully enqueue animal (cat or dog to queue', () => {
    const Queue = new AnimalShelter();
   let animal1={pref:'cat'};
   let animal2={pref:'dog'};

    expect(Queue.enqueue(animal1)).toBe(animal1);
    expect(Queue.enqueue(animal2)).toBe(animal2);
});
it('Can successfully dequeue animal from queue, ', () => {
    const Queue = new AnimalShelter();
   let animal1={pref:'cat'};
   let animal2={pref:'dog'};

Queue.enqueue(animal1);
    expect(Queue.dequeue('cat')).toBe(animal1);
    Queue.enqueue(animal2);
    expect(Queue.dequeue('dog')).toBe(animal2);
});
it('Can not enqueue  animal  either a dog or a cat  ', () => {
    const Queue = new AnimalShelter();
   let animal1={pref:'hourse'};

Queue.enqueue(animal1);
expect(Queue.enqueue(animal1)).toBe('Wrong animals');
  
});
it('Can not dequeue  animal when queue is empty ', () => {
    const Queue = new AnimalShelter();
   let animal1={pref:'cat'};

Queue.enqueue(animal1);
    expect(Queue.dequeue('cat')).toBe(animal1);
    expect(Queue.dequeue('hourse')).toBe(null);
  
});




})
