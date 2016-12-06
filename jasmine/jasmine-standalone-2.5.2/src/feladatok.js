// Find the most frequent integer in an array


function mostFreq(array) {
  var counter = {};
  array.map(function(element){
    if (!counter[element]) {
    counter[element] = 1
    }
    else {counter[element] += 1}
  })
  return Object.keys(counter).reduce(function(a, b){ return counter[a] > counter[b] ? a : b });
}

//Find pairs in an integer array whose sum is equal to 10 //(bonus: do it in linear time)
