// Link: https://leetcode.com/problems/search-insert-position/description/

// Runtime: 76 ms, faster than 93.78% of JavaScript online submissions for Search Insert Position.

// Memory Usage: 38.8 MB, less than 5.02% of JavaScript online submissions for Search Insert Position.

// Binary Search

// Time complexity: O(logn)
// Space complexity: O(1)


var searchInsert = function (nums, target) { 
    let left = 0, right = nums.length - 1;
    while (left <= right) { 
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return left;
};