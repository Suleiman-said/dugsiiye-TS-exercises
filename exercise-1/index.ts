let productName: string = "Laptop";
let price: number = 1000;
let discountAvailable: boolean = true;

productName = "Desktop";
price = 49.99;
discountAvailable = false;

console.log("Product Name: " + productName);
console.log("Price: " + price);
console.log("Discount Available: " + discountAvailable);

function getDiscount(price: number, discount: number): number {
    return price - price * discount;
}

const finalPrice = getDiscount(100, 0.2)
console.log(finalPrice)

function printLength(x: string | any[]): void {
console.log(x.length);
}
printLength("hello")
printLength([1, 2, 3, 4, 5])

function printLength2(x: unknown): void {
    if(typeof x === "string" || Array.isArray(x)) {
        console.log(x.length);
    } else {
        console.log("Invalid input");
    }
}

printLength2("hello")
printLength2([1, 2, 3, 4, 5])