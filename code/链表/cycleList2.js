// 链表的复杂操作之环形链表2
// 给定一个链表，返回链表开始入环的第一个结点。 如果链表无环，则返回 null。
// 输入：3->2->4->1->(2) 注意：此处的2是就是前面3后面的2
// 输出：2

function cycleList(head) {
    while(head) {
        if (!head.flag) {
            head.flag = true
        } else {
            return head 
        }
    }
    return null 
}