var lowestCommonAncestor = function (root, p, q) {
  if (root == null) return null;
  if (root == p || root == q) return root;
  var left = lowestCommonAncestor(root.left, p, q);
  var right = lowestCommonAncestor(root.right, p, q);
  if (left != null && right != null) return root;
  return left != null ? left : right;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

console.log(
  lowestCommonAncestor(new TreeNode(3), new TreeNode(5), new TreeNode(1))
);
