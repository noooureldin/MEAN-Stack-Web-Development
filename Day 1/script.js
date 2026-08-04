//t1
console.log("JS is running successfully");


//t2
alert("ready to practice" );


//t3
let productName2 = "Laptop";
let price= 15000;
let isAvailable= true;

console.log(productName2, typeof productName2);
console.log( price , typeof price );
console.log ( isAvailable , typeof isAvailable);


//t4 
document.getElementById("mainTitle").innerText = "practice time";


//t5 
city = "Cairo";
country = "Egypt";
var place = city + ", "+ country ;
console.log( place);


//t6
var loc = `location : ${city} - ${country}`;
console.log(loc );


//t7 
let itemPrice = 120;
let quantity = 3;

let total = itemPrice *quantity;
let diff = 400-total;
let div = itemPrice/ quantity;
let remainder = itemPrice % quantity;
let square = quantity**2;

console.log(total);
console.log(diff);
console.log(div);
console.log(remainder);
console.log(square);


//t8
let color = prompt("what is ur favorite color:");
console.log(`Your favorite color is: ${color}`);


//t9
let score = 20;
let textScore = "20";

console.log(score == textScore); // true ( just compare the content regardless to the type )
console.log(score === textScore); // false ( compares both value and type)
 

//t10 
let num = prompt("Enter num ");

let num1 = Number(num);
console.log(typeof num1);

let num2 = parseInt(num);
console.log(typeof num2);

let num3 = +num;
console.log(typeof num3);


//t11 
var fruits =[ "apple" , "banana", "mango" ];
console.log( fruits[1]);
fruits[1]= "orange";
fruits.push("grape");
console.log(fruits);


//t12
let course ={
  title: "Js",
  hours: 60,
  level: "Beginner"
};
course.title = "angular";
console.log(course.hours);
console.log(course);


//t13 
let hasAccount = true;
let isVerified = false;

console.log(hasAccount && isVerified);
console.log(hasAccount || isVerified);
console.log(!isVerified);


//t14
let balance = 50;

balance += 30;  
balance *= 2;   
balance -= 20; 

console.log(balance);


//t15
let hotel = prompt("Enter hotel name:");
let nights = prompt("Enter num of nights:");
let confirmed = confirm("Is booking confirmed?");

let bookingMessage= `Hotel: ${hotel}, Nights: ${nights}, Confirmed: ${confirmed}`;
alert(bookingMessage);
console.log(bookingMessage);


// t16
console.log(2 + 8 + "0");   // 100
console.log("2" + 8 + 0);   // 280
console.log(2 + "8" + 0);   // 280


//t17
var city1 = "Alex";
var city2 = city1;
city2 = "Giza";
console.log(city1, city2);
// city1 is copied to city2 and saved and after that city2 changed so it doens't affect city1

var car1 = { brand: "Toyota" };
var car2 = car1;
car2.brand = "Honda";
console.log(car1, car2);
// here both are honda as object is saved by refrence

var car1 = { brand: "Toyota" };
var car2 = Object.assign({}, car1); 
car2.brand = "Honda";
console.log(car1); 
console.log(car2);
// here car1 , car2 are independent


//t18
let mixedBag = ["hello", 42,true, null , undefined, { key: "value" }, [1, 2, 3] ];

console.log(typeof mixedBag[0]); 
console.log(typeof mixedBag[1]);
console.log(typeof mixedBag[2]); 
console.log(typeof mixedBag[3]);
console.log(typeof mixedBag[4]); 
console.log(typeof mixedBag[5]); 
console.log(typeof mixedBag[6]);
// typeof null returns object, this is a historical bug in JS


//t19 
let customer = prompt("Enter your name:");
let price2= prompt("Enter order price:");
let paid3 = confirm("Is payment confirmed?");
price2 = Number(price2);
let orderMessage = `Customer: ${customer}, Price: ${price2}, Paid: ${paid3}`;
console.log(orderMessage);
alert(orderMessage);
document.getElementById("result").innerText = orderMessage;


//t20
let num5 = Number(prompt("Enter first number:"));
let num6 = Number(prompt("Enter second number:"));
console.log(`${num5} + ${num6} = ${num5 + num6}`);
console.log(`${num5} - ${num6} = ${num5 - num6}`);
console.log(`${num5} * ${num6} = ${num5 * num6}`);
console.log(`${num5} / ${num6} = ${num5 / num6}`);
console.log(`${num5} % ${num6} = ${num5 % num6}`);
console.log(`${num5} ** ${num6} = ${num5 ** num6}`);


//t21
var a = 40;
var b = 50;
var c = "60";
var d = 30;
var e = 30;
console.log(a+b+c+d+e);
// output is 90603030 as c is a string and can get ans of 210 by converting string into num

var a = 40;
var b = 50;
var c = Number("60"); 
var d = 30;
var e = 30;
console.log(a+b+c+d+e);


//t22
function makeInvoiceLine(item, qty, paid2) {
  return `Invoice => Item: ${item} | Qty: ${qty} | Paid: ${paid2}`;
}
let item = prompt("Enter item name:");
let qty = prompt("Enter quantity:");
let paid2 = confirm("Is it paid?");
let result = makeInvoiceLine(item, qty, paid2);
document.getElementById("result").innerText = result;
console.log(result);


//t23 
function saveUsername() {
  let username =document.getElementById("username").value;
  let resultElement = document.getElementById("result");
  if (username === "") {
    resultElement.innerText = "Username is required";
  } else {
    resultElement.innerText = `Saved successfully: ${username}`;
    console.log({ username: username, status: "saved" });
  }
}


//t24
var a ="15";
var b =15;
var c =null;
var d;
var e =[15];
var f ={ value: 15 };

console.log("value | typeof | == 15 | === 15");
console.log("a:", a, "|", typeof a, "|", a == 15, "|", a === 15);
console.log("b:", b, "|", typeof b, "|", b == 15, "|", b === 15);
console.log("c:", c, "|", typeof c, "|", c == 15, "|", c === 15);
console.log("d:", d, "|", typeof d, "|", d == 15, "|", d === 15);
console.log("e:", e, "|", typeof e, "|", e == 15, "|", e === 15);
console.log("f:", f, "|", typeof f, "|", f == 15, "|", f === 15);


// t25 
let productName = prompt("Enter product name:");
let brand = prompt("Enter brand:");
let price3 = prompt("Enter price:");
let category = prompt("Enter category:");
let inStock = confirm("Is this product in stock?");
price3 = Number(price3);


let productInfo={productName: productName,brand: brand,price: price3,category: category,
    inStock: inStock};
let productMessage  = `Product Card => Name: ${productName} | Brand: ${brand} | Price: ${price3} |
Category: ${category} | In Stock: ${inStock}`;    

alert(productMessage );
console.log(productInfo);
document.getElementById("mainTitle").innerText = productMessage ;
console.log("First letter of product name:", productName[0]);