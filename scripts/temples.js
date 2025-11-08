// Toggle navigation menu for hamburger button
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('main-nav');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show-nav');
});

// Set current year in footer
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();

// Set last modified date in footer
const lastModifiedSpan = document.getElementById('last-modified');
lastModifiedSpan.textContent = document.lastModified;
