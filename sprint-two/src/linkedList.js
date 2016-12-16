var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value) {
    var node=Node(value);
    if(list.head===null)
    {
      
      list.head=node;
      list.tail=node;
    }
    else
    {
      list.tail.next=node;
      list.tail=node;
    }


  };

  list.removeHead = function() {

    var node=list.head;
    list.head=list.head.next
    return node.value;

  };

  list.contains = function(target) {
    var temp=list.head;
    while(temp!==null){
      if(temp.value===target)
        return true;
      else
        temp=temp.next;

    }
    return false;
  };

  

  list.print=function () {

    // var temp=list.head;
    // while(temp!==null)
    // {
    //   console.log(temp.value);
    //   temp=temp.next;
    // }
    console.log(JSON.stringify(list));
  };
  return list;
};




/*
 * Complexity: What is the time complexity of the above functions?
 addtoTail() - O(1)
 removeHead() - O(1);
 contains()- O(n);
 */
