// for a random number for example between 0 and 100: 

var a = Math.random() * 101;
a = Math.floor(a);

// ou alors on peut simplifier:

var a = Math.floor(Math.random() * 101); 

console.log(a);

//on peut créer un loop par exemple: 

for (i = 0; i<5; i += 1) {
    var x = Math.floor(Math.random() * 51);
    console.log(x);
}