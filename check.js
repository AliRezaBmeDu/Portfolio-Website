const testRegex = /[A-Z$&#~!]/;
const input = 'ali.Reza.buet@gmail.com';
const email = input.trim();
console.log(email);
console.log(email.match(testRegex));