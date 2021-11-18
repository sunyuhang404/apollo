
// 快排
const sort = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('参数不正确');
  }
  let len = arr.length;
  // 结束递归条件
  if (len <= 1) return arr;
  let left = [];
  let right = [];
  // 中间基数
  let midIndex = Math.floor(len / 2);
  let mid = arr[midIndex];
  for (let i = 0; i < len; i++) {
    if (arr[i] === mid) {
      continue;
    } else if (arr[i] < mid) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return sort(left).concat([mid], sort(right));
};
