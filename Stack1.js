class Stack extends Array {
    constructor(...elems){ 
        super(...elems)  //super represent array
    }

    pop(){
        if(this.length === 0) throw new Error("Nothng here to pop mehn")
        super.pop()
    } 

    peek() {
        if(this.length === 0) throw new Error ("stack is damn empty")
        return this[this.length - 1]
    }

}



const s = new Stack(1,2,3)
s.push(100)

console.log(s.peek())