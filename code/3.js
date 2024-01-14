/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // 每次确定左窗口 i , 右指针就不断移动 rk ,只有移动到出现了窗口中的字符或者到最后就停止了

    let ans = 0;
    // i 是左指针
    let rk = -1; // 右指针
    const windowSet = new Set();
    const l = s.length;
    for (i = 0; i < l; i++) {
        // 左指针移动, 就是将 窗口左的元素删除
        if (i != 0) {
            windowSet.delete(s.charAt(i - 1));
        }
        // 右指针移动,窗口记录值
        while (rk + 1 < l && !windowSet.has(s.charAt(rk + 1))) {
            windowSet.add(s.charAt(rk + 1));
            ++rk;
        }
        ans = Math.max(ans, rk + 1 - i);
    }
    return ans;
};
