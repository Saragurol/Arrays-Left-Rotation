// O(n) -Time | O(n) -Space
function rotLeft(a, d) {
  let results = new Array(a.length);
  // edge case for when the num of shifts to the left-'d' is larger than the array's length 
  if(d > a.length){
    d = d % a.length;
    for(let i = 0; i < a.length; i++){
    let idx = i - d;
    if(idx < 0){
      idx = a.length + idx;
      results[idx] = a[i];
    } else {
      results[idx] = a[i];
      }
    }
  } else {
    for(let i = 0; i < a.length; i++){
      let idx = i - d;
      if(idx < 0){
        idx = a.length + idx;
        results[idx] = a[i];
      } else {
        results[idx] = a[i];
      }
    }
  }
  return results; 
}
rotLeft([ 1, 2, 3, 4, 5 ], 4) 
// expect [ 5, 1, 2, 3, 4 ]

