	var BinarySearchTree = function(value) {


	  var bstRoot = Object.create(bstMethods);

	  bstRoot.left = null;
	  bstRoot.right = null;
	  bstRoot.value = value;

	  return bstRoot;
	};

	var bstMethods = {};

	bstMethods.insert=function(value){

		var node=BinarySearchTree(value);
	
		
			var temp=this;
			var prev=null;
			while(temp!==null)
			{
		
				if(value>temp.value)
				{
					prev=temp;
					temp=temp.right;
				}
				else
				{
					prev=temp;
					temp=temp.left;
				}
			}
			if(value>prev.value)
				prev.right=node;
			else
				prev.left=node;

		





	};

	bstMethods.contains=function(value){

		var temp=this;
		while(temp!==null)
		{
			if(temp.value===value)
				return true;
			if(value>temp.value)
					temp=temp.right;
			else
				temp=temp.left;

		}
		return false;
	};

	bstMethods.depthFirstLog=function(cb){


		function depth(node)
		{
			if(node===null)
				return;
			cb(node.value);

			depth(node.left);
			depth(node.right);
		}
		depth(this);

	};





	/*
	 * Complexity: What is the time complexity of the above functions?
	 */
