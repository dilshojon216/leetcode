function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isSymmetric = function (root) {
  return isMirror(root, root);
};
function isMirror(p, q) {
  if (p == null && q == null) {
    return true;
  }
  if (p == null || q == null) {
    return false;
  }
  return (
    p.val === q.val && isMirror(p.left, q.right) && isMirror(p.right, q.left)
  );
}
