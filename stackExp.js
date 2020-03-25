var Stack = function(){
    this.count = 0;
    this.storage ={};

//Adds a value onto the end of the stack
this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
}



}