var Stack = function(){
    this.count = 0;
    this.storage ={};

//Adds a value onto the end of the stack
this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
}

//Remove & returns value at the end of stack
this.pop = function(){
    if(this.count === 0){
        return undefined;

    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
}
this.size = function() {
    return this.count;
}

//Returns the value at the end of stack
this.peek = function(value) {
    return this.storage[this.count-1];
}

}