console.log("Welcome to Web Nexus, we are excited to work with you!");
console.log("If you have any questions please contact us at XXX-XXX-XXXX");

// Array of images to cycle through
const images = [
  "images/Snow Heaven - Mexican Snacks, Mangonadas, Ice Cream - Brave 12_2_2024 7_29_29 PM copy.png",
  "images/Web Shark - Brave 12_2_2024 10_23_13 PM.png",
];

let currentImageIndex = 0;

// Function to change the image when button is clicked
function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.getElementById("fullscreenImage").src = images[currentImageIndex];
}

// Fullscreen functionality when image is clicked
const image = document.getElementById('fullscreenImage');

image.addEventListener('click', function() {
  // Check if the browser supports fullscreen API
  if (image.requestFullscreen) {
    image.requestFullscreen();
  } else if (image.mozRequestFullScreen) { // Firefox
    image.mozRequestFullScreen();
  } else if (image.webkitRequestFullscreen) { // Chrome, Safari, Opera
    image.webkitRequestFullscreen();
  } else if (image.msRequestFullscreen) { // IE/Edge
    image.msRequestFullscreen();
  }

  // Disable scrollbars on the page when image is in fullscreen
  document.body.style.overflow = 'hidden';
});

// Listen for fullscreen exit event to re-enable scrollbars
document.addEventListener('fullscreenchange', resetScrollbars);
document.addEventListener('webkitfullscreenchange', resetScrollbars);
document.addEventListener('mozfullscreenchange', resetScrollbars);
document.addEventListener('msfullscreenchange', resetScrollbars);

// Reset scrollbars when exiting fullscreen
function resetScrollbars() {
  if (!document.fullscreenElement) {
    document.body.style.overflow = 'auto'; // Re-enable scrolling once fullscreen is exited
  }
}

function submitForm(event) {
    event.preventDefault();  // Prevents the default form submission (page refresh)

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Log the form data (You can send this to a server or handle it further)
    console.log('Form Submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Example: Display a confirmation message
    alert('Thank you for your message, ' + name + '! We will get back to you soon.');

    // Optionally, you could reset the form after submission
    document.getElementById('contact-form').reset();
}