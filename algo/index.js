/**
 * 题目介绍：
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 示例：
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 */

/**
 * 解答：
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
const towSum = (nums, target) => {
  const length = nums.length;
  const temp_arr = [];
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if ((nums[i] + nums[j] === target)) {
        temp_arr.push(i, j);
      }
    }
  }
  return temp_arr;
};

console.log('正确结果应该是[0, 1]---->>>>', towSum([2, 7, 11, 15], 9));
console.log('正确结果应该是[0, 3]---->>>>', towSum([1, 2, 4, 6], 7));
console.log('正确结果应该是[]---->>>>', towSum([1, 2, 4, 6], 0));

/**
 * 题目介绍：
 * 给出两个非空的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 示例：
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 */

 /**
  * 解答：
  * @param {ListNode} l1
  * @param {ListNode} l2
  * @returns {ListNode}
  */
function ListNode (val) {
  this.val = val;
  this.next = null;
};
const addTwoNumbers = (l1, l2) => {
  let dummyH = new ListNode(0);
  let currentN = dummyH;
  let jingwei = 0;
  while(l1 !== null || l2 !== null){
    let x = (l1 !== null) ? l1.val : 0;
    let y = (l2 !== null) ? l2.val : 0;
    let sum = jingwei + x + y;
    jingwei = Math.floor(sum / 10);//取个位数
    currentN.next = new ListNode(sum % 10);
    currentN = currentN.next;
    if(l1 !== null){
      l1 = l1.next;
    }
    if(l2 !== null){
      l2 = l2.next;
    }
      
  }
  if(jingwei === 1){
    currentN.next = new ListNode(1);
  }
  return dummyH.next;
};

console.log(addTwoNumbers([2,4,3], [5,6,4]));
