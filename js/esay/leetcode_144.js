var preorderTraversal = function (root) {
  let res = [];
  let stack = [];
  while (root || stack.length) {
    while (root) {
      res.push(root.val);
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    root = root.right;
  }
  return res;
};
