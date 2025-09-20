let a:number = 10;
a = 1


let username: string =  "ABC";


let colors:string[] = ["Red","Yellow","Blue"]       // THIS IS AN ARRAY OF STING 

let age: number[] = [1,4,2]         //  THIS IS AN ARRAY OF NUMBERS  



            // PARAMETER TYPE       // OUTPUT DATATYPE 
function add(a:number, b: number) : number          // THE NUMBER AT THE LAST IS FOR THE OUTPUT THAT IT SHOULD BE A NUMBER IF ITS A DIFFERENT DATATYPE THEN IT SHOWS ERROR 
{
    return a + b  
}

add(4,5)



// OBJECT IN TYPESCRIPT 
let student: { id: number, name: string, age: number , email?:string} = {
    id: 1,
    name: "ABC",
    age: 20
}
// email is optional here it wont give an error if we dont provide it


// INTERFACE -> IT IS A BLUEPRINT OF AN OBJECT / WHICH REPRESENTS TYPE OF YOUR OBJECT 
interface Product 
{
    productId: number,
    productName: string,
    productPrice: number,
    discount?: number,
    description?: string
}

let p1: Product = {
    productId: 1,
    productName: "Mobile",
    productPrice: 20000,
    discount: 10
}

// ARRAY OF OBJECTS
// now in the products array we have p1 but now in this array we only need array of object  in object type  
let products : Product[] = [
    p1,
    {
        productId: 2,
        productName: "Laptop",
        productPrice: 50000,
        description: "This is a gaming laptop"
    }
]