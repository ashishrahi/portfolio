// config.js
export const apiEndpoints = {
    about: 'https://api.example.com/about',
    skills: 'https://api.example.com/skills',
    portfolio: 'https://api.example.com/portfolio',
    contact: 'https://api.example.com/contact'
};

// Fetch Data Function
export async function fetchData(endpoint) {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();  // Parses the JSON response body
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}
