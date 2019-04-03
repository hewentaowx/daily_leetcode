<div id="tow-sum"></div>

### 两数之和

```javascript
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
```

<div id="node-two-numbers"></div>

### 链表两数之和

```javascript
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
```

<div id="longest-substring"></div>

### 最长无重复字符子串

```javascript
/**
 * 题目介绍：
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 示例：
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 */

 /**
  * 解答：
  * @param {string} s
  * @returns {number}
  */
const lengthOfLongestSubstring = s => {
  let maxLen = 0;
  let start = 0;
  let end = 0;
  for (; end < s.length; end++) {
    let indexOf = s.substring(start, end).indexOf(s.charAt(end));
    if (indexOf !== -1) {
      maxLen = Math.max(maxLen, end - start);
      start += indexOf + 1;
    }
  }
  return Math.max(maxLen, end - start);
  // const map = {};
  //   let left = 0;
  //   return s.split('').reduce((r, c, i) => {
  //     left = map[c] >= left ? map[c] + 1 : left;
  //     map[c] = i;
  //     return Math.max(r, i - left + 1);
  //   }, 0);
};
```

<div id="median-sort-array"></div>

### 有序数组中位数

```javascript
/**
 * 题目介绍：
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。假设 nums1 和 nums2 不会同时为空
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))
 * 示例：
 * nums1 = [1, 3]
 * nums2 = [2]
 * 则中位数为 2.0
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 则中位数是 (2 + 3) / 2 = 2.5
 */

/**
 * 解答：
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  let nums = [...nums1, ...nums2].sort((a, b) => a - b);
  const length = nums.length;
  if (length % 2 === 0) {
    return (nums[length / 2 - 1] + nums[length / 2]) / 2;
  } else {
    return nums[Math.floor(length / 2)];
  }
};
```

<div id="longest-palindrome"></div>

### 最长回文字串

```javascript
/**
 * 题目介绍：
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 示例：
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 */

/**
 * 解答：
 * @param {string} s
 * @returns {string}
 */
const longestPalindrome = s => {
  let start = 0;
  let maxlength = 0;
  let p = [];
  for(let i = 0; i < s.length; i++){
    for(let j = 0; j < i + 1; j++){
      if (p[j] === undefined) {
        p[j] = [];
      }
      if(i - j < 2) {
        p[j][i] = s[i] === s[j];
      } else {
        p[j][i] = (p[j + 1][i-1] && s[j] === s[i]);
      }
      if (p[j][i] && maxlength < i -j + 1) { //判断为回文串且长度大于最大
        start = j;
        maxlength = i -j + 1;
      }
    }
  }
  return s.substr(start, maxlength)
};
```