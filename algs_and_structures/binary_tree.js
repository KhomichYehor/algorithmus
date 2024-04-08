/* Бінарне дерево - структура даних, де кожен вузол є також деревом,
 тобто є рекурсивною. 
 У кожного вузла може бути лише 2 потомки. 
 Якщо значення вузла піддерева менше ніж вузол вищого дерева - воно уходить 
 вліво, якщо більше, то вправо
*/

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (!this.root) {
      this.root = new TreeNode(value);
    } else {
      let node = this.root;
      let newNode = new TreeNode(value);
      while (node) {
        if (value > node.value) {
          if (!node.right) {
            break;
          }
          node = node.right;
        } else {
          if (!node.left) {
            break;
          }
          node = node.left;
        }
        if (value > node.value) {
          node.right = newNode;
        } else {
          node.left = newNode;
        }
      }
    }
  }
}

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
