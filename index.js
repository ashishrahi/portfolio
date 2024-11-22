// Get the button and scroll container elements
const scrollButton = document.getElementById('scroll-btn');
const skillsContainer = document.getElementById('skills-container');

// Function to handle horizontal scroll
scrollButton.addEventListener('click', function() {
    skillsContainer.scrollBy({
        left: 300, 
        behavior: 'smooth' 
    });
});
