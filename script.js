let post = {
    title: "amaizing post",
    content: "amazzzing content",
    likeCount: 15,
    comments: ["comment1", "comment2"]
}

console.log(post);
console.log(post.comments);

// loops

for (let step = 0; step < 5; step = step + 10) {
    console.log("Walking one step to the north");
}

/* for (let i = 0; i < 10; i++) {
    console.log(i);
} */

array = [23,46,37,42,86];

for (let index = 0; index < array.length; index++) {    
    console.log(array[index]);
}

console.log("--------------------");

array.forEach(element => {
    console.log(element);
});
// conditions

let age = 25;
let name = "sLukas"
if(age>=18 && name !== "Lukas"){
    console.log(true)
}else{
    console.log(false);
}

console.log("end of code");
// console part

// 15
// 15
// 1
// 1
// 17
// 17
// 18
// 18
// 42
// 42
// 15+16
// 31
// 42/4
// 10.5
// 100*100
// 10000
// 15+12
// 27
// 15+12;
// 27
// 15+12
// 27
// 15+12;
// 27
// 2**10
// 1024
// (10*5)/4-23
// -10.5
// let score = 10;
// undefined
// score+1
// 11
// let score;
// undefined
// let favouriteNumber
// undefined
// favouriteNumber
// undefined
// favouriteNumber = 23;
// 23
// favouriteNumber
// 23
// favouriteNumber = 42;
// 42
// favouriteNumber = 23
// 23
// let amyNumber = favouriteNumber*2;
// undefined
// amyNumber
// 46
// let a;
// undefined
// a=5;
// 5
// let a = 5;
// undefined
// a = 2*a;
// 10
// a
// 10
// let text = "this is some text";
// undefined
// text
// "this is some text"
// a = 1
// 1
// a+5
// 6
// a-5
// -4
// a
// 1
// a=a+1;
// 2
// a+=1
// 3
// a++;
// 3
// a
// 4
// a=a-1
// 3
// a-=1
// 2
// a--
// 2
// a
// 1
// a*=2
// 2
// a=a*2
// 4
// a**
    
    
    
//     a
// 256
// text
// "this is some text"
// let name = 'Lukas'
// undefined
// name
// "Lukas"
// name = "Lukas"
// "Lukas"
// 'Lukas's favourite number'
// VM1480:1 Uncaught SyntaxError: Unexpected identifier
// "Lukas's favourite number"
// "Lukas's favourite number"
// `Lukas's favourite number is "42"`
// "Lukas's favourite number is "42""
// "Lukas\' favourite number is \"42\""
// "Lukas' favourite number is "42""
// let surname = "Hriadel"
// undefined
// name surname
// VM1691:1 Uncaught SyntaxError: Unexpected identifier
// name+surname
// "LukasHriadel"
// let fullName = name+" "+surname
// undefined
// fullName
// "Lukas Hriadel"
// `This is my fullname ${fullName}"
// VM1856:1 Uncaught SyntaxError: Unexpected end of input
// `This is my fullname ${fullName}`
// "This is my fullname Lukas Hriadel"
// fullName.length
// 13
// fullName.toLocaleUpperCase
// ƒ toLocaleUpperCase() { [native code] }
// fullName.toLocaleUpperCase()
// "LUKAS HRIADEL"
// fullName.toLocaleUpperCase()
// "LUKAS HRIADEL"
// fullName.charAt(2)
// "k"
// number a = 5;
// VM2071:1 Uncaught SyntaxError: Unexpected identifier
// string text = ...
// VM2118:1 Uncaught SyntaxError: Unexpected identifier
// text
// "this is some text"
// text = 42;
// 42
// true
// true
// false
// false
// let check = true
// undefined
// check = false
// false
// text
// 42
// text = "this is text"
// "this is text"
// text.endsWith('text')
// true
// text.endsWith('is')
// false
// true and true 
// VM2422:1 Uncaught SyntaxError: Unexpected identifier
// true && true 
// true
// false && true
// false
// false && false
// false
// true || true
// true
// flase || true
// VM2552:1 Uncaught ReferenceError: flase is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM2552:1
// false || true
// true
// false || false
// false
// true && ((false || true) && false)
// false
// check = true && ((false || true) && false)
// false
// check
// false
// let time = 10:05
// VM2728:1 Uncaught SyntaxError: Unexpected token ':'
// let time = "10:05";
// undefined
// favouriteNumber
// 23
// amyNumber
// 46
// let post = "..."
// undefined
// let post2="..."
// undefined
// posts = [];
// []
// posts
// []
// posts = ["post1", "post2", "post3"]
// (3) ["post1", "post2", "post3"]
// posts
// (3) ["post1", "post2", "post3"]0: "post1"1: "post2"2: "post3"length: 3__proto__: Array(0)
// let numbers [23,42,46]
// VM2961:1 Uncaught SyntaxError: Unexpected token '['
// let numbers = [23,42,46]
// undefined
// let combined = [23, "text", true]
// undefined
// let arrInArr = [23, ["text", 46], 13]
// undefined
// arrInArr
// (3) [23, Array(2), 13]0: 231: (2) ["text", 46]0: "text"1: 46length: 2__proto__: Array(0)2: 13length: 3__proto__: Array(0)
// numbers.length
// 3
// numbers.push(72)
// 4
// numbers
// (4) [23, 42, 46, 72]
// posts.pop()
// "post3"
// posts
// (2) ["post1", "post2"]
// numbers
// (4) [23, 42, 46, 72]0: 231: 422: 463: 72length: 4__proto__: Array(0)
// numbers[1]
// 42
// numbers[1] = 68;
// 68
// numbers
// (4) [23, 68, 46, 72]
// numbers[1] = numbers[3]/24 
// 3
// numbers
// (4) [23, 3, 46, 72]
// let player = {
//     name: "Lukas",
//     score: 100
// }
// undefined
// let post = {
//     title: "amaizing post",
//     content: "amazzzing content",
//     likeCount: 15
// }
// undefined
// let post = {
//     title: "amaizing post",
//     content: "amazzzing content",
//     likeCount: 15,
// }
// undefined
// let post = {
//     title: "amaizing post",
//     content: "amazzzing content",
//     likeCount: 15,
//     comments: ["comment1", "comment2"]
// }
// undefined
// title = "amaizing post"
// "amaizing post"
// content = "..."
// "..."
// let content = "..."
// undefined
// let likeCount = 15
// undefined
// let comments = ["comment1", "comment2"]
// undefined
// let title = "amaizing post"
// undefined
// combined
// (3) [23, "text", true]
// combined = ["Lukas", 100]
// (2) ["Lukas", 100]
// player
// {name: "Lukas", score: 100}name: "Lukas"score: 100__proto__: Object
// player.name
// "Lukas"
// player.score
// 100
// post.likeCount
// 15
// post.content
// "amazzzing content"
// post.comments
// (2) ["comment1", "comment2"]
// posts = [{}]
// [{…}]
// players = [{
//     name: "Lukas",
//     score: 50},{
//         name: "Amy", 
//         score: 70}]
// (2) [{…}, {…}]0: name: "Lukas"score: 50__proto__: Object1: name: "Amy"score: 70__proto__: Objectlength: 2__proto__: Array(0)
// player.name
// "Lukas"
// player.name = "Amy"
// "Amy"
// player.score = 200
// 200
// favouriteNumber
// 23
// favouriteNumber = 42
// 42
// favouriteNumber === 42
// true
// favouriteNumber = 23
// 23
// favouriteNumber === 42
// false
// favouriteNumber !== 42
// true
// name
// "Lukas"
// name === "Amy"
// false
// name === "Lukas"
// true
// post
// {title: "amaizing post", content: "amazzzing content", likeCount: 15, comments: Array(2)}
// player
// {name: "Amy", score: 200}
// players[0]
// {name: "Lukas", score: 50}
// player === players[0]
// false
// let age = 24
// undefined
// age < 30
// true
// age < 10
// false
// age <= 10
// false