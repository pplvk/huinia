/* console.log('Hello!')
console.log('i like pizza!')

window.alert('bruh')

//comment

b
r
u
h
*/
/*let online = true
let age = 25;

let gpa = 2.1; 
let fname = 'abababababba';
let favf = 'pizda'
let mail = 'fake@mail.puk'

console.log(`ur name is ${fname}`)
console.log(`u r ${age} y. o.`)

console.log(` ur gpa is ${gpa}`)
console.log(typeof age)
console.log(typeof fname)
console.log(`u like ${favf}`)
console.log(`mail : ${mail}`)
console.log(`${fname} is online: ${online}`)*/
let username;
let age;


document.getElementById('mysubmit').onclick = function(){
    username = document.getElementById("mytext").value;
    age = document.getElementById('myage').value;
    age = Number(age);
    age+=1;
    document.getElementById("h1").textContent = `hello ${username}`
    document.getElementById("mytext").textContent = `ur name is ${username}`;

    document.getElementById("myage").textContent = `ur age is ${age}`;

    
    
    console.log(username, age, typeof age);
}
