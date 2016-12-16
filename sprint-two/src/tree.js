var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children=[];
  


  // your code here
//  newTree.children = null;  // fix me
_.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

	var treeNode=Tree(value);
	this.children.push(treeNode);
};

treeMethods.contains = function(target) {

var result=false;

	function helper(root)
	{
		
		if(root.value===target)
			return true;


		else
		{
			for(var i=0;i<root.children.length;i++)
			{

				result=helper(root.children[i])
			}
			return result;
		}
	
	}

	return helper(this);
	
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild() - O(1)
 conatins()-O(n)
 */
