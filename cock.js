// Select the <h1> element
const heading = document.querySelector('h1');

// Add a click event listener to the <h1> element
heading.addEventListener('click', function() {
  // Change the text content of the <h1> element
  heading.textContent = 'Welcome to My Interactive Webpage!';
});

// Select the <img> element
const image = document.querySelector('img');

// Add a mouseover event listener to the <img> element
image.addEventListener('mouseover', function() {
  // Change the border color of the <img> element
  image.style.borderColor = 'red';
});

// Add a mouseout event listener to the <img> element
image.addEventListener('mouseout', function() {
  // Change the border color of the <img> element back to its original color
  image.style.borderColor = '#ddd';
});