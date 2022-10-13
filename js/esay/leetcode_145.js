var postorderTraversal = function (root) {
  let res = [];
  let stack = [];
  while (root || stack.length) {
    while (root) {
      res.push(root.val);
      stack.push(root);
      root = root.right;
    }
    root = stack.pop();
    root = root.left;
  }
  return res.reverse();
};
