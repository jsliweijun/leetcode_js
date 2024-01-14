/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

// 链表, 头节点,尾节点
const l1 = new ListNode(2, new ListNode(4, new ListNode(3, undefined)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4, undefined)));

// 逆序 存储, 说明头节点存储的是个位数, 加法计算也是从个位开始相加,然后满10进1

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let r = 0;
    const l3 = new ListNode(-1, undefined); // 初始化结果链表, 虚拟头节点
    let cur = l3; // 链表的尾节点, 每次都指向尾节点

    while (l1 || l2 || r) {
        let v1 = 0;
        let v2 = 0;
        if (l1) {
            v1 = l1.val;
            l1 = l1.next;
        }
        if (l2) {
            v2 = l2.val;
            l2 = l2.next;
        }
        let sum = v1 + v2 + r;
        let val = sum % 10;
        cur.next = new ListNode(val);
        cur = cur.next; // 指向尾节点
        r = parseInt(sum / 10);
    }

    return l3.next;
};

console.log(addTwoNumbers(l1, l2));
