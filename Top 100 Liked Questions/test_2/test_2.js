function ListNode(val) {
  this.val = val;
  this.next = null;
}
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let head = new ListNode(0);
  let current = head;
  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return head.next;
};

console.log(
  addTwoNumbers(
    ListNode(2, ListNode(4, ListNode(3, null))),
    ListNode(5, ListNode(6, ListNode(4, null)))
  )
);
