///chapter 14 (if statement nested)
//part 1
var password = prompt("Enter your passoead lenght");
if (password.length <= 5) {
    alert("Password must be greater than 5");
} else {
    alert("OK");
}

//part 2 & 3
var a = prompt("Enter a number");
var c = ("Enter your name");
if (a === 1 && c === "Max") 
    alert("OK");

//part 4

var fistVariable = 10;
var secndVariable = 10;

if (fistVariable === secndVariable) 
    if (fistVariable <= secndVariable) {
        alert("Both conditions passed!");
    }else{
        alert("Condittion are failed");
    }



// chapter 15 (Array I)
var emptyarray = [];


var stelement = ["pakistan"];
alert(stelement);


var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]);


var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
var lengthOfArray = alphabet.length;
console.log("Total length of the array is: " + lengthOfArray)


var myArray = ["Hammad"];
myArray[1] = "Ahmed";
alert(myArray[1]);

// chapter 16 Array (II)
//part 1

var myArray = ["Abdul"];
myArray.push("Ghaffar");
alert(myArray[myArray.length - 1]); 

//part 2
var alp = ["h","i","j","k"];
alp.pop();
console.log(alp);

//part 3
var alpa = ["h","i","j","k"];
alpa.push("L");
document.write(alpa);

// chapter 17 (Array III)
//part 1

var siz = ["S","M","XL","XXL","XXXL"];
siz.shift();
document.write(siz);

//part 2

var size = ["S","M","XL","XXL","XXXL"];
size.unshift("1","2","3");
document.write(size);

//part 3
var Array1 = ["karachi-king"];
Array1.unshift("Islamabad-United");
alert(myArray[0]); 

//part 4
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L");
console.log(sizes); 

//part 5
var sizes1 = ["S", "M", "XL", "XXL", "XXXL"];
var newarray = sizes.slice(0, 3);
console.log(newarray); 

//part 6
var pets = ["dog", "cat", "ox", "duck", "frog"];
var dogIndex = pets.indexOf("dog");
pets.splice(dogIndex + 1, 3);
pets.splice(dogIndex + 1, 0, "hamster", "parrot");
console.log(pets);

//part 7
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var reducedPets = pets.slice(3, 5);
console.log(reducedPets); 
