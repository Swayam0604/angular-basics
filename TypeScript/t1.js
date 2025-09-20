var a = 10;
a = 1;
var username = "ABC";
var colors = ["Red", "Yellow", "Blue"]; // THIS IS AN ARRAY OF STING 
var age = [1, 4, 2]; //  THIS IS AN ARRAY OF NUMBERS  
// PARAMETER TYPE       // OUTPUT DATATYPE 
function add(a, b) {
    return a + b;
}
add(4, 5);
// OBJECT IN TYPESCRIPT 
var student = {
    id: 1,
    name: "ABC",
    age: 20
};
var p1 = {
    productId: 1,
    productName: "Mobile",
    productPrice: 20000,
    discount: 10
};
// ARRAY OF OBJECTS
// now in the products array we have p1 but now in this array we only need array of object  in object type  
var products = [
    p1,
    {
        productId: 2,
        productName: "Laptop",
        productPrice: 50000,
        description: "This is a gaming laptop"
    }
];
