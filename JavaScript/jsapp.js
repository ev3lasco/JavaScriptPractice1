console.log("Edwin Velasco");

function printFinalPrice(price,taxAmount){
console.log(price-taxAmount); 5
}

printFinalPrice(10,5);


function greetUser(name) {
  return `Hello, ${name}!`;
}

const name = "Edwin";
const greeting = greetUser(name);
console.log(greeting);

function buyCoffee(price,dollars){
  return dollars - price;
}

const price = 5;
let dollars = 4;
const total = price - dollars;
console.log(total);

function hobbies(hobbiesArray){
  for(let i = 0; i < hobbiesArray.length; i++){
    console.log(hobbiesArray[i]);
  }
}

let hobbiesArray = ["Friends", "Cars", "Computers", "Coding", "Bible Studies"];
hobbies(hobbiesArray);



function checkWeather(condition, temperature) {
  if (condition === "rain" && temperature < 50) {
    return "Please wear a coat and pants.";
  } else if (condition === "rain" && temperature >= 50) {
    return "It's warm but raining. Please use an umbrella.";
  } else if (condition === "sunny" && temperature >= 80) {
    return "It's hot and sunny. Please wear sunscreen and a hat.";
  } else if (condition === "sunny" && temperature < 80) {
    return "It's sunny. Please wear sunglasses.";
  } else {
    return "The world has ended pal now what";
  }
}

let condition = "rain";
let temperature = 60;
console.log(checkWeather(condition,temperature));


function areaOfTriangle(base, height){
  return (1/2) * base * height;
}

let base = 15;
let height = 30;
console.log(areaOfTriangle(base,height));


function diceRoller(){
   let result = Math.floor(Math.random() * 6) + 1;
  switch(result){
    case 1:
    console.log("rolled a 1");
    break;
    case 2:
    console.log("rolled a 2");
    break;
    case 3:
    console.log("rolled a 3");
    break;
    case 4:
    console.log("rolled a 4");
    break;
    case 5:
    console.log("rolled a 5");
    break;
    case 6:
    console.log("rolled a 6");
    break;
    default:
    console.log("Thats funny the dice broke")
  }
}

diceRoller();




function helloAliyahOrHakeem(){
  let person = prompt("Please enter your name", "Harry Potter");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}

helloAliyahOrHakeem("Aliyah");


function getInitials(FirstName, LastName){
  const initials = FirstName.charAt(0) + LastName.charAt(0);
  return initials;
}

let FirstName = "Edwin"
let LastName = "Velasco"
console.log(getInitials(FirstName,LastName));









const cars = ['buggati', 'lambo', 'nissan', 'ferrari'];


function getSecondToLastElement(cars) {
  return cars[cars.length - 2];
}


function loopThroughArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}





