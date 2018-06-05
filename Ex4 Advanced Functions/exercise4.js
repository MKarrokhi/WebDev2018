// Old-fashioned way
function first(){
    var greet = 'Hi';
    function second(){
        alert(greet);
    }
    return second;
}

var newFunc = first();
newFunc();

// * * * *  The new way  * * * * //
//   function keyword gone now, we use 'const' to make it not overwritable, then variable function name '=' 
//   then Brackets '()' and '=>' then CurlyBrackets '{}'      Ex:  const funcName = () => { const someVars, Some Code Here; }
//                                                            Ex2: const multiply = (a, b) => a * b; 

const first = () => {       
    const greet = 'You R D Best';
    const second =() =>{
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//Closure: A function ran. The function executed. It's never going to execute again
//         But it's going to remember that there are references to those variables.
//         so the child scope always has access to the parent scope but the parent doesn't

//Currying: The process of converting a function with multiple arguements into 
//          a function that takes them one at a time
const multiply = (a, b) => a * b;   
const curriedMult = (a) => (b) => a * b;
const multiplyBy5 = curriedMult(5);
curriedMult()


//Composing: The act of putting two functions together to form a third function where the output 
//           of first is used as the input for the second
const compose = (f, g) => (a) => f(g(a));

const  sum = (num) => num +1;

compose(sum, sum)(5)



// Avoiding Side Effects, functional purity.
var a = 1;
function b(){
    a = 2 ;
}













//Solve these problems:

//#1 Create a one line function that adds adds two parameters
function add(x, y){
    return x + y;
}

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)

//What are the two elements of a pure function?




/// PERSONAL USE
function addVAT(orginalAmt){
    return 'Amount: ' + (orginalAmt) +' SAR, VAT: ' + (orginalAmt * 0.05) + ' SAR, Total: ' + (orginalAmt * 1.05) + ' SAR'
}