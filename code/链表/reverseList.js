// 链表的复杂操作之链表的反转
// 定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。
// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

// null, 1,   2,   3,   4,   5
//                          pre  cur  next
function reverseList(head) {
    let pre = null
    let cur = head
    let next
    while(cur !== null) {
        next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
}