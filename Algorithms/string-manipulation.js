//using split and join
function reverseString(str){
    return str.split('').reverse().join('');
};

let string = "hello";
let reversedString = reverseString(string);
console.log(reversedString);

//loop
function reversedString(str){
    let reversedstr = '';
    for (let i = str.length-1; i >=0;){
        reversedstr +=str[i];
    }
    return reversedstr;
};

let string1 = "hello"
let reverse = reversedString(string1);
console.log(reverse);
