//drill 1

//https://sketch.io/render/sk-97b291b63a6f7b2286ab22d1d75d27e7.jpeg

//http://prntscr.com/n9nq5p

//after removal http://prntscr.com/n9nbd9
//after removal http://prntscr.com/n9n9ur

const BinarySearchTree = require('./bst.js');

function main() {
  //drill 2
  const BST = new BinarySearchTree();
  //3,1,4,6,9,2,5,7
  BST.insert(3, '3');
  BST.insert(1, '1');
  BST.insert(4, '4');
  BST.insert(6, '6');
  BST.insert(9, '9');
  BST.insert(2, '2');
  BST.insert(5, '5');
  BST.insert(7, '7');
  //console.log(BST.right);

  const BST2 = new BinarySearchTree();
  //EA S Y Q U E S T I O N
  BST2.insert('E', 'E');
  BST2.insert('A', 'A');
  BST2.insert('S', 'S');
  BST2.insert('Y', 'Y');
  BST2.insert('Q', 'Q');
  BST2.insert('U', 'U');
  BST2.insert('E', 'E');
  BST2.insert('S', 'S');
  BST2.insert('T', 'T');
  BST2.insert('I', 'I');
  BST2.insert('O', 'O');
  BST2.insert('N', 'N');

  //console.log(BST2);

  console.log(tree(BST2));

  console.log(heightOfTree(BST));

  console.log(isBST(BST2));

  console.log(thirdLargest(BST));

  const BST3 = new BinarySearchTree();
  BST3.insert(899);
  BST3.insert(4, '');
  BST3.insert(8, '');
  BST3.insert(9, '');
  BST3.insert(20, '');
  BST3.insert(1000, '');
  BST3.insert(2, '');
  BST3.insert(5, '');
  BST3.insert(7, '');
  BST3.insert(2800, '');
  BST3.insert(1, '');
  BST3.insert(900, '');

  console.log('test', thirdLargest(BST3));
}

//drill 3 - this recursive alogrithm will print out the values of the tree in order
function tree(t) {
  if (!t) {
    return ' ';
  }
  return tree(t.left) + t.value + tree(t.right);
}

function heightOfTree(tree) {
  if (tree === null || tree.key === null) {
    return 0;
  } else {
    return 1 + Math.max(heightOfTree(tree.left), heightOfTree(tree.right));
  }
}

function isBST(tree) {
  if (tree === null || tree.key === null) {
    return true;
  } else {
    if (tree.left && tree.right) {
      return (
        isBST(tree.left) &&
        tree.value > tree.left.value &&
        (isBST(tree.right) && tree.value < tree.right.value)
      );
    } else if (tree.right) {
      return isBST(tree.right) && tree.value < tree.right.value;
    } else if (tree.left) {
      return isBST(tree.left) && tree.value > tree.left.value;
    } else {
      return true;
    }
  }
}

function thirdLargest(tree) {
  debugger;

  const largest = findLargest(tree);
  let secondLarg = null;
  if (largest.left) {
    secondLarg = findLargest(largest.left);
    if (secondLarg.left) {
      return findLargest(secondLarg.left);
    } else if (secondLarg.parent === largest) {
      return largest.parent;
    } else {
      return secondLarg.parent;
    }
  } else {
    secondLarg = largest.parent;
    if (secondLarg.left) {
      return findLargest(secondLarg.left);
    } else {
      return secondLarg.parent;
    }
  }
}

function findLargest(tree) {
  if (tree.right === null) return tree;
  else {
    return findLargest(tree.right);
  }
}

main();
