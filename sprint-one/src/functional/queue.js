var Queue = function() {
  var someInstance = {};
  var size=0;
  var lowestIndex=0;
  var highestIndex=0;

  // Use an object with numeric keys to store values
  var storage = {}; // 1:b

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[highestIndex]=value;  
    size++;
    highestIndex++;

  };

  someInstance.dequeue = function() {
    if(size>0)
    {
      var value=storage[lowestIndex];
      delete storage[lowestIndex];
      lowestIndex++;
      size--;
    //  highestIndex++;
      return value;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
