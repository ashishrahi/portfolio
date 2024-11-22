// app.js
import { apiEndpoints, fetchData } from './config/config';

document.addEventListener('DOMContentLoaded', function() {
    // Fetch and display data for each section
    async function updateSections() {
        // Fetch data for each section
        const [aboutData, skillsData, portfolioData, contactData] = await Promise.all([
            fetchData(apiEndpoints.about),
            fetchData(apiEndpoints.skills),
            fetchData(apiEndpoints.portfolio),
            fetchData(apiEndpoints.contact)
        ]);

        // Update sections with fetched data
        if (aboutData) updateAboutSection(aboutData);
        if (skillsData) updateSkillsSection(skillsData);
        if (portfolioData) updatePortfolioSection(portfolioData);
        if (contactData) updateContactSection(contactData);
    }

    // Update About Section
    function updateAboutSection(data) {
        const aboutSection = document.getElementById('about');
        aboutSection.innerHTML = `
            <div class="container mx-auto text-center">
                <div class="flex flex-col md:flex-row items-center">
                    <div class="w-full md:w-1/3 mb-8 md:mb-0">
                        <img src="${data.image}" class="w-48 h-48 mx-auto rounded-full" alt="About Me">
                    </div>
                    <div class="w-full md:w-2/3">
                        <p class="text-lg text-gray-600">${data.subtitle}</p>
                        <h2 class="text-4xl font-bold mb-4">${data.title}</h2>
                        <p class="text-gray-700 leading-relaxed">${data.description}</p>
                        <a href="${data.resume}" download>
                            <button class="mt-6 bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded-full">
                                Download CV
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    // Update Skills Section
    function updateSkillsSection(data) {
        const skillsSection = document.getElementById('service');
        skillsSection.innerHTML = `
         <div class="container mx-auto text-center">
            <p class="text-lg text-gray-600">What I Have ?</p>
            <h6 class="text-4xl font-bold mb-8">Skills</h6>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 ${data.skills.map(skill => `
                        <div class="service-card bg-white shadow-lg p-6 rounded-lg">
                            <img src="${skill.image}" class="w-32 mx-auto mb-4" alt="${skill.name}">
                            <h6 class="text-xl font-semibold">${skill.name}</h6>
                            <p class="text-gray-600">${skill.description}</p>
                        </div>
                    `).join('')}
               </div>
        </div>

        `;
    }

    // Update Portfolio Section
    function updatePortfolioSection(data) {
        const portfolioSection = document.getElementById('portfolio');
        portfolioSection.innerHTML = `
            <div class="container mx-auto text-center">
                <p class="text-lg text-gray-600">${data.subtitle}</p>
                <h6 class="text-4xl font-bold mb-8">${data.title}</h6>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${data.projects.map(project => `
                        <a href="${project.url}" class="portfolio-card bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src="${project.image}" class="w-full" alt="${project.title}">
                            <div class="p-6">
                                <h4 class="text-xl font-semibold">${project.title}</h4>
                                <p class="text-gray-600">${project.description}</p>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Update Contact Section
    function updateContactSection(data) {
        const contactSection = document.getElementById('contact');
        contactSection.innerHTML = `
            <div class="container mx-auto text-center">
                <p class="text-lg text-gray-600">${data.subtitle}</p>
                <h6 class="text-4xl font-bold mb-8">${data.title}</h6>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <form method="POST" class="bg-white shadow-lg p-6 rounded-lg">
                        <input type="text" name="name" placeholder="Your Name" class="w-full mb-4 p-3 border rounded focus:outline-none">
                        <input type="email" name="email" placeholder="Your Email" class="w-full mb-4 p-3 border rounded focus:outline-none">
                        <textarea name="message" rows="5" placeholder="Your Message" class="w-full mb-4 p-3 border rounded focus:outline-none"></textarea>
                        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                            Send Message
                        </button>
                    </form>
                    <div class="flex flex-col justify-center">
                        <p class="text-gray-700 mb-4"><strong>Email:</strong> ${data.email}</p>
                        <p class="text-gray-700 mb-4"><strong>Phone:</strong> ${data.phone}</p>
                        <p class="text-gray-700"><strong>Address:</strong> ${data.address}</p>
                    </div>
                </div>
            </div>
        `;
    }

    // Initialize
    updateSections();
});
