void main(List<String> args) {
  var data = mergeTwoLists(ListNode(1), ListNode(2));
  print(data!.next!.val);
}

ListNode? mergeTwoLists(ListNode? list1, ListNode? list2) {
  if (list1 == null) {
    return list2;
  }
  if (list2 == null) {
    return list1;
  }
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}

class ListNode {
  int val;
  ListNode? next;
  ListNode([this.val = 0, this.next]);
}
