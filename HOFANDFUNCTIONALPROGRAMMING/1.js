/*1. Reverse String.
The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
2 seconds before reversing the string. The reversed string should then be printed as output.*/


// The input string to be reversed

let input = "PW Skills"

setTimeout(() =>{
    let reversed = input.split("").reverse().join(""); // reverse the string
    console.log(reversed); //print the string
    },2000); // delay for 2 seconds