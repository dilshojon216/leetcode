var isValidBST = function (root) {
  if (!root) return true;
  let stack = [];
  let prev = null;
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (prev && root.val <= prev.val) return false;
    prev = root;
    root = root.right;
  }
  return true;
};

// * Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
console.log(isValidBST(new TreeNode(2, new TreeNode(1), new TreeNode(3))));
