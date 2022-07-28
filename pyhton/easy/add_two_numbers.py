class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
          if not l1:
              return l2
          if not l2:
              return l1
          dummy = ListNode(0)
          cur = dummy
          carry = 0
          while l1 or l2:
              if l1:
                    carry += l1.val
                    l1 = l1.next
              if l2:
                    carry += l2.val
                    l2 = l2.next
              cur.next = ListNode(carry % 10)
              cur = cur.next
              carry //= 10
          if carry:
              cur.next = ListNode(carry)
          return dummy.next