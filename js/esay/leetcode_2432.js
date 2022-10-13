var hardestWorker = function (n, logs) {
  let map = new Map();
  for (let log of logs) {
    let [id, start, end] = log.split(":");
    let time = (end - start) / 60;
    if (map.has(id)) {
      map.set(id, map.get(id) + time);
    } else {
      map.set(id, time);
    }
  }
  let max = 0;
  let res = [];
  for (let [id, time] of map) {
    if (time > max) {
      max = time;
      res = [id];
    } else if (time == max) {
      res.push(id);
    }
  }
  return res;
};
