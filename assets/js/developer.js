    // Select the button
    const downloadButton = document.getElementById('download-btn');

    // Add click event listener
    downloadButton.addEventListener('click', () => {
        // Trigger confetti effect
        confetti({
            particleCount: 100, // Number of particles
            spread: 70,         // Spread of particles
            origin: { y: 0.6 }  // Start height (adjust to start closer to the button)
        });
    });



    const navLinks = document.querySelectorAll('.nav-item');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove the gradient background from all links
            navLinks.forEach(item => item.classList.remove('bg-gradient-to-r', 'from-blue-500', 'to-purple-500', 'text-white'));
            
            // Add the gradient background to the clicked link
            link.classList.add('bg-gradient-to-r', 'from-blue-500', 'to-purple-500', 'text-white');
        });
    });

    const container = document.getElementById('skills-container');

    // Function to scroll the container smoothly
    function autoScroll() {
        container.scrollBy({
            top: 1, // Scroll by 1px to create smooth effect
            behavior: 'smooth'
        });
    }

    // Set interval to scroll every 30 milliseconds
    setInterval(autoScroll, 30);