
// //   // Get the span element by its id
// //   var myTextElement = document.getElementById("heading1");
  
// //   // Define an array of possible colors
// //   var colors = ["red", "green", "blue", "yellow", "purple"];
  
// //   // Function to generate a random index for the colors array
// //   function getRandomIndex(max) {
// //     return Math.floor(Math.random() * max);
// //   }
  
// //   // Change the text color to a random color
// //   function changeTextColor() {
// //     var randomIndex = getRandomIndex(colors.length);
// //     var randomColor = colors[randomIndex];
// //     myTextElement.style.color = randomColor;
// //   }
// //   setInterval(changeTextColor,800)
// //   // Call the changeTextColor function to initially set the text color
// //   changeTextColor();

// // Function to generate a random color code
// function getRandomColor() {
//     // List of characters to generate the color code
//     const characters = "0123456789ABCDEF";
//     let color = "#";
//     // Loop to generate a 6-digit color code
//     for (let i = 0; i < 6; i++) {
//         color += characters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// // Function to apply random color to an element
// function applyRandomColor(elementId) {
//     const element = document.getElementById('.text');
//     if (element) {
//         element.style.backgroundColor = getRandomColor();
//     }
// }

// // Example usage
// // Call the applyRandomColor function with the ID of the element you want to apply the color to
// applyRandomColor("myElementId");

// // Function to generate and apply random color
// function generateAndApplyRandomColor(elementId) {
//     applyRandomColor(elementId);
// }

// // Set interval for changing color every 2 seconds (2000 milliseconds)
// setInterval(() => {
//     generateAndApplyRandomColor("myElementId");
// }, 2000);


var img=document.getElementById('my-img');

img.addEventListener("mouserover",function(){
    // console.log('your are inside the text')
    img.src="frontpage.jpg";

})
img.addEventListener("click",function(){
    document.write("your arrow outside the text");
})

