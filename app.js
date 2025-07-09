//  function chapter20() {
//       let firstNames = ["Lil", "Big"];
//       let lastNames = ["Zzz", "Boom"];
//       for (let i = 0; i < firstNames.length; i++) {
//         for (let j = 0; j < lastNames.length; j++) {
//           if (i !== j) {
//             console.log(firstNames[i] + " " + lastNames[j]);
//           }
//         }
//       }
//     }

//     function chapter21() {
//       let input = prompt("Enter a city:");
//       alert("Lowercase: " + input.toLowerCase());
//       if (input.toUpperCase() === "KARACHI") {
//         alert("Welcome to Karachi!");
//       }
//     }

//     function chapter22() {
//       let str = "JavaScriptRocks";
//       console.log("First 5 characters:", str.slice(0, 5));

//       let input = prompt("Enter anything:");
//       console.log("Last character:", input.charAt(input.length - 1));

//       let fullName = prompt("Enter your full name:");
//       console.log("Name length:", fullName.length);
//     }

//     function chapter23() {
//       let text = "The lazy dog sleeps.";
//       console.log("Position of 'dog':", text.indexOf("dog"));

//       let userInput = prompt("Enter some text:");
//       if (userInput.indexOf("hello") !== -1) {
//         alert("Greeting found!");
//       } else {
//         alert("No greeting.");
//       }
//     }

//     function chapter24() {
//       let word = "JavaScript";
//       console.log("Char at position 4:", word.charAt(4));

//       let str = prompt("Enter a string:");
//       let pos = +prompt("Enter position:");
//       console.log("Character at position:", str.charAt(pos));
//     }

//     function chapter25() {
//       let text = "This is a bad example.";
//       console.log(text.replace("bad", "good"));

//       let sentence = "JS is cool. JS is powerful.";
//       console.log(sentence.replace(/JS/g, "JavaScript"));

//       let template = "Hello, NAME";
//       let name = prompt("Enter your name:");
//       console.log(template.replace("NAME", name));
//     }

//     function chapter26() {
//       console.log("Math.round(2.6):", Math.round(2.6));
//       console.log("Math.floor(2.6):", Math.floor(2.6));
//       console.log("Math.ceil(2.6):", Math.ceil(2.6));

//       let num = +prompt("Enter a number:");
//       console.log("Rounded:", Math.round(num));

//       console.log("Math.floor(-2.9):", Math.floor(-2.9));
//       console.log("Math.ceil(-2.9):", Math.ceil(-2.9));
//     }

//     function chapter27() {
//       let dice = Math.floor(Math.random() * 6) + 1;
//       console.log("Dice roll:", dice);

//       let coin = Math.random() < 0.5 ? "Heads" : "Tails";
//       console.log("Coin toss:", coin);

//       let password = Math.floor(Math.random() * 9000) + 1000;
//       console.log("Password:", password);
//     }

//     function chapter28() {
//       console.log(parseFloat("45.67")); // 45.67
//       console.log(parseInt("123px"));   // 123
//       console.log(parseInt("abc"));     // NaN
//     }

//     function chapter29() {
//       let num = 123;
//       console.log("To string:", num.toString(), typeof num.toString());

//       let result = Number("2025") + 10;
//       console.log("2025 + 10:", result);

//       console.log("parseInt('123abc'):", parseInt("123abc"));
//       console.log("Number('123abc'):", Number("123abc")); // NaN
//     }

//     function chapter30() {
//       let num = 123.45678;
//       console.log("Fixed 2 decimals:", num.toFixed(2));

//       let converted = Number("12.999").toFixed(1);
//       console.log("Rounded:", converted);

//       let decimal = +prompt("Enter decimal:");
//       console.log("Rounded to 3 decimals:", decimal.toFixed(3));
//     }

//     function chapter31() {
//       let now = new Date();
//       console.log("Current Date & Time:", now);

//       console.log("Year:", now.getFullYear());

//       let hour = now.getHours();
//       let greet = hour < 12 ? "Good Morning" : "Good Evening";
//       alert(greet);
//     }

//     function chapter32() {
//       let date = new Date();
//       console.log("Day:", date.getDate());
//       console.log("Month:", date.getMonth() + 1);
//       console.log("Year:", date.getFullYear());
//     }