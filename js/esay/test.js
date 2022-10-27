// Input: event1 = ["01:15","02:00"], event2 = ["02:00","03:00"]
// Output: true
// Explanation: The two events intersect at time 2:00.
var haveConflict = function (event1, event2) {
  let event1Start = event1[0];
  let event1End = event1[1];
  let event2Start = event2[0];
  let event2End = event2[1];
  if (event1Start < event2Start && event1End > event2Start) {
    return true;
  }
  if (event1Start > event2Start && event1Start < event2End) {
    return true;
  }
  return false;
};
