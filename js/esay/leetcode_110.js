var isBalanced = function (root) {
  if (!root) return true;
  let left = depth(root.left);
  let right = depth(root.right);
  console.log(left, right);
  return (
    Math.abs(left - right) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};

function depth(root) {
  if (!root) return 0;
  return Math.max(depth(root.left), depth(root.right)) + 1;
}
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.log(isBalanced([1, 2, 2, 3, 3, null, null, 4, 4]));
