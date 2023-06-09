/*
5. URL validation.
Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
Print a message indicating if the input matches the conditions or not.
*/

const urlRegex = /^https?:\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+$/;
// Regular expression to match URLs

let url = "https://www.google.com"; // Example input URL

//code for validation of an URL

if (urlRegex.test(url)) {
  console.log("Valid URL");
} else {
  console.log("Invalid URL");
}
