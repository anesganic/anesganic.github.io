// main.js

const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");
const buttons = document.querySelectorAll(".mode-buttons button");
const images = document.querySelectorAll('img'); // Get all images

document.addEventListener("mousemove", (e) => {
  let leftPosition = e.pageX + 4;
  let topPosition = e.pageY + 4;

  cursor.style.left = leftPosition + "px";
  cursor.style.top = topPosition + "px";
});

links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    cursor.classList.add("large");
  });

  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("large");
  });
});

buttons.forEach(button => {
  button.addEventListener("mouseenter", () => {
    cursor.classList.add("large");
  });

  button.addEventListener("mouseleave", () => {
    cursor.classList.remove("large");
  });
});

images.forEach(image => {
  image.addEventListener('mouseenter', () => {
    cursor.classList.add('large'); // Enlarge the cursor when hovering over an image
  });

  image.addEventListener('mouseleave', () => {
    cursor.classList.remove('large'); // Revert the cursor size when leaving the image
  });
});

const lightModeButton = document.getElementById('light-mode');
const darkModeButton = document.getElementById('dark-mode');
const screen = document.querySelector('.screen');
const body = document.body;
const frame = document.querySelector('.frame');
const h2Text = document.querySelector('h2');
const projectsListItems = document.querySelectorAll('.projects_list li a');
const apexImages = document.querySelectorAll('.apex_images img'); // Get all Apex images

// Function to toggle image inversion
function toggleImageInversion() {
  const logoImage = document.getElementById('logo-image');
  if (body.classList.contains('dark-mode')) {
    // Dark mode is active, remove the inverted-image class
    logoImage.classList.remove('inverted-image');
    apexImages.forEach(image => {
      image.style.borderColor = 'white'; // Update the image border color
    });
  } else {
    // Light mode is active, apply the inverted-image class
    logoImage.classList.add('inverted-image');
    apexImages.forEach(image => {
      image.style.borderColor = 'black'; // Update the image border color
    });
  }
}

lightModeButton.addEventListener('click', () => {
  body.classList.remove('dark-mode');
  body.classList.add('light-mode');
  screen.style.backgroundColor = '#fff';
  frame.style.borderColor = '#070707';
  cursor.style.borderColor = '#070707';
  lightModeButton.style.color = '#070707';
  darkModeButton.style.color = '#070707';
  h2Text.style.color = '#070707';
  projectsListItems.forEach(item => {
    item.style.color = '#070707';
  });
  localStorage.setItem('theme', 'light-mode');
  toggleImageInversion(); // Toggle image inversion
  smoothTransition();
});

darkModeButton.addEventListener('click', () => {
  body.classList.remove('light-mode');
  body.classList.add('dark-mode');
  screen.style.backgroundColor = '#070707';
  frame.style.borderColor = '#fff';
  cursor.style.borderColor = '#fff';
  lightModeButton.style.color = '#fff';
  darkModeButton.style.color = '#fff';
  h2Text.style.color = '#fff';
  projectsListItems.forEach(item => {
    item.style.color = '#fff'; // Adjust as needed
  });
  localStorage.setItem('theme', 'dark-mode');
  toggleImageInversion(); // Toggle image inversion
  smoothTransition();
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  screen.style.backgroundColor = savedTheme === 'light-mode' ? '#fff' : '#070707';
  frame.style.borderColor = savedTheme === 'light-mode' ? '#070707' : '#fff';
  cursor.style.borderColor = savedTheme === 'light-mode' ? '#070707' : '#fff';
  lightModeButton.style.color = savedTheme === 'light-mode' ? '#070707' : '#fff';
  darkModeButton.style.color = savedTheme === 'light-mode' ? '#070707' : '#fff';
  h2Text.style.color = savedTheme === 'light-mode' ? '#070707' : '#fff';
  projectsListItems.forEach(item => {
    item.style.color = savedTheme === 'light-mode' ? '#070707' : '#fff'; // Adjust as needed
  });
  toggleImageInversion(); // Set the logo color on page load
}
