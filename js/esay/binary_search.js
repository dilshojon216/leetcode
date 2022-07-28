var search = function(nums, target) {
  //initialize left and right pointers
    let l = 0, r = nums.length-1;
    while(l <= r){
		//find the middle for each iteration of the while loop since we know the array is sorted
        let middle = Math.floor((l + r) / 2);
		//check if the target number is in the first or second half of the array
		//return the left or right pointer if equals target
        if(target >= nums[middle]){
            l = middle;
            if(nums[l] === target){
                return l;
            }
            if(nums[r] === target){
                return r;
            }
            else{
                l++;
                r--;
            }
        }
        if(target < nums[middle]){
            r = middle - 1;
            if(nums[r] === target){
                return r;
            }
            if(nums[l] === target){
                return l;
            }
            else{
                l++;
                r--;
            }
        }
    }
	//return -1 if not in array
    return -1;
};