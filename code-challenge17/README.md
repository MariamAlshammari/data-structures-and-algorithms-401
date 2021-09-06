# Trees
<!-- Short summary or background information -->
 Tree node is a component which may contain it’s own values, and references to other nodes
Root - The root is the node at the beginning of the tree

## Challenge
<!-- Description of the challenge -->
Write a function called breadth first
Arguments: tree
Return: list of all values in the tree, in the order they were encountered
> Traverse the input tree using a Breadth-first approach

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
BigO:
Time:BigO(n)
Space:BigO(1)

## Whiteboard Process
<!-- Embedded whiteboard image -->
![tree-breadth-first](/code-challenge17/tree-breadth-first.png)

Pseuducode:
finction breadthFirst(root)
// INPUT  <-- root node
// OUTPUT <-- front node
 breadth <-- new array()
  breadth.push(root)
  while breadth.root()
    recursive front.value
    if front.left is not NULL
      recursive (front.left)
    if front.right is not NULL
      recursive (front.right)
