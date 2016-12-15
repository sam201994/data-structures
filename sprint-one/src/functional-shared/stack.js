

var stackMethods = {

	push: function(data)
	{
		this.top++;
		this.storage[this.top]=data;
		
	},
	pop: function()
	{
		if(this.top>0)
		{
			var value=this.storage[this.top];
			delete this.storage[this.top];
			this.top--;
			return value;

		}
	},
	size: function()
	{
		return this.top;
	}



};
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
   var instance={
  	storage: {},
  	top: 0,
  


  };
  _.extend(instance,stackMethods);
  return instance;

};

