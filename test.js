//给定两个数组，编写一个函数来计算它们的交集。                
//示例 1：
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]        
// 输出：[2,2]       

// 示例 2:                
// 输入：nums1 = [4,9,5,4,4], nums2 = [9,4,9,8,4]        
// 输出：[4,9,4]                         
//说明：输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。        
//我们可以不考虑输出结果的顺序。                
/**
 * @param {number[]} nums1         
 * @param {number[]} nums2         
 * @return {number[]}         
 */        
// nums1 = [4,9,5,4,4]
// nums2 = [9,4,9,8,4]
var intersect = function(nums1, nums2) {
  const res = [];
  for (let i = 0; i < nums1.length; i++) {
    const a = nums1[i];
    const index = nums2.findIndex(b => a === b);
    if (index !== -1) {
      res.push(a);
      nums2.splice(index, 1);
    }
  }
  return res;
};

// example:    
// 1000ms后    
// 输出hello world    
// 输出hello world 2    
// 又过1000ms后    
// 输出hello world    
// 输出hello world 2    
// 又过1000ms后    
// 输出hello world    
// 输出hello world 2

function repeat(times, mills, func) {
  return function(...params) {
    const self = this;
    let num = times;
    function inner() {
      if (num < 0) {
        return;
      }
      setTimeout(() => {
        func.apply(self, params);
        num--;
        inner();
      }, mills);
    }
    inner();
  }
}    

// let log3 = repeat(3, 1000, console.log);
// log3('hello', 'world');
// log3('hello', 'world', '2');