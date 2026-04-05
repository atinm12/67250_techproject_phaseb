var x = 5;
var y = 7;
var z = x + y;
//console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
//console.log(C);

function sumnPrint(x1, x2){
    console.log(x1 + x2);
}

//sumnPrint(x, y);
//sumnPrint(A, B)

if (C.length > z) {
    if (C.length < z) {
        console.log(z);
    }
    console.log(C);
} else {
    console.log("good job!");
}
var L1 = ["Watermelon","Pineapple","Pear","Banana"];
var L2 = ["Apple","Banana","Kiwi","Orange"];

function findTheBanana(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "Banana") {
            alert("Banana found!");
        }
    }
}

//findTheBanana(L1);
//findTheBanana(L2);

function findTheBanana2(arr) {
    arr.forEach(function(item) {
        if (item === "Banana") {
            alert("Banana found!");
        }
    });
}

//findTheBanana2(L1);
//findTheBanana2(L2);

var now = new Date();
var hour = now.getHours();

function greeting(h) {
    if (document.getElementById("greeting")) {
        if (h < 5 || h >= 20) {
            document.getElementById("greeting").innerHTML = "Good night!";
        } else if (h < 12) {
            document.getElementById("greeting").innerHTML = "Good morning!";
        } else if (h < 18) {
            document.getElementById("greeting").innerHTML = "Good afternoon!";
        } else {
            document.getElementById("greeting").innerHTML = "Good evening!";
        }
    }
}

greeting(hour);

function addYear() {
    document.getElementById("copyYear").innerHTML = "© " + new Date().getFullYear() + " MonoMuse. All rights reserved.";
}