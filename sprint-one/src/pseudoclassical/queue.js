var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.head= 0,
  this.tail=0,
  this.storage={}

};
Queue.prototype.enqueue = function(data){
  this.storage[this.tail] = data;
  this.tail++;
};
Queue.prototype.dequeue = function(){
	if(this.tail-this.head>0)
		{
			var value=this.storage[this.head];
			delete this.storage[this.head];
			this.head++;
			return value;
		}
};
Queue.prototype.size = function(){
  return this.tail - this.head;
};

 

