var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.top=0;
  this.storage={};
};
Stack.prototype.push = function(data) {
	// body...
		this.top++;
		this.storage[this.top]=data;
};
Stack.prototype.pop=function ()
{

	if(this.top>0)
		{
			var value=this.storage[this.top];
			delete this.storage[this.top];
			this.top--;
			return value;

		}
};
Stack.prototype.size=function(){
	return this.top;
}


