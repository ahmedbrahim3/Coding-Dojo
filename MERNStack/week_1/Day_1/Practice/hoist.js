// ----------------------------------------------------1-----------
console.log(hello);                                   
var hello = 'world';   
//var hello;
// console.log(hello);indefined
// hello='world';
// --------------------------------------------2-----------------
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//var needle
//function test(){
    // var needle
    //  needle = 'magnet';
    // console.log(needle); //log needle=magnet
    // }
    // needle='haystack'
// ----------------------------------------------------3------------------
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
// var brendan
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
//  brendan = 'super cool';
// console.log(brendan);//log super cool
// ----------------------------------------------------------4---------------
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food
// function eat(){
//     var food 
//     food = 'half-chicken';
//     console.log(food);
//     food= 'gone';
//     }
// food = 'chicken';
// console.log(food);//chicken
// eat();//log half-chicken
// ------------------------------------5---------------------------
// mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// var mean
// mean();//mean is not function
// console.log(food);///undifined
//  mean = function() {
        // var food 
//     food = "chicken";
//     console.log(food); log chicken
//     food = "fish";
//     console.log(food); log fish
// }
// console.log(food); undifined
// ---------------------------------------------6---------------
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// var genre
// function rewind() {
    // var genre
//  genre = "rock";
//  console.log(genre); 
//   genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);    log undifined
// genre = "disco";
// rewind();       log rock then log r&b
// console.log(genre); disco
// -------------------------------------7-----------------------
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);


// function learn() {
//     var dojo
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo); sans jose
// learn(); log seattle 
// log burbank

// console.log(dojo); sans jose
// -----------------------------------------------------------------8---------------
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// -----
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
//     }
// console.log(makeDojo("Chicago", 65));dojo={name:chicago,students:65,hiring:true}
// console.log(makeDojo("Berkeley", 0));dojo is declared const object we cannot attribute string to dojo





