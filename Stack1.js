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
    size(){
        return this.length
    }

}

/*const s = new Stack(1,2,3)
s.push(100)

console.log(s.peek()) /*

/* Check if the following strings are correctly allign */


const string1 ="[[{([[({})]])}]]"
const string2 ="[[{([[({})]])}]"

function check(string) {
    const arr = string.split('') // returns array of individual string
    const stack = new Stack()

    for(let i=0; i<arr.length; i++) {
        const currentElem = arr[i] // gives us access to the splited array
        if(currentElem === "[" || currentElem === "{" || currentElem ==="("){
            stack.push(currentElem)
        } else{
            if(stack.size() === 0){  //the next block won't execute if stack.size === 0
            console.log("Failed at 1")   
            return false
            }
            const lastElem = stack.peek()
            stack.pop()
            if(lastElem ==="[" && currentElem === "]") {
                //ok
            } else if (lastElem ==="{" && currentElem === "}"){
                //ok
            } else if (lastElem ==="(" && currentElem === ")"){
                //ok
            } else{
                //not ok
                console.log("Failed at 2") 
                return false
            }
        }   
    }

    if(stack.size() !==0) {
        return false
    }
    return true
    
}
console.log(check(string1))
console.log(check(string2))