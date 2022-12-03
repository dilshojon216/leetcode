void main(List<String> args) {}

ListNode? addTwoNumbers(ListNode? l1, ListNode? l2) {
  int carry = 0;
  ListNode? head = new ListNode(0);
  ListNode? p = l1, q = l2, curr = head;
  while (p != null || q != null) {
    int x = (p != null) ? p.val : 0;
    int y = (q != null) ? q.val : 0;
    int sum = carry + x + y;
    carry = sum ~/ 10;
    curr!.next = new ListNode(sum % 10);
    curr = curr.next!;
    p = p?.next;
    q = q?.next;
  }
  if (carry > 0) {
    curr!.next = new ListNode(carry);
  }
  return head.next!;
}

class ListNode {
  int val;
  ListNode? next;
  ListNode([this.val = 0, this.next]);
}
