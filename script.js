// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
        alert("Please fill in all fields before submitting.");
        event.preventDefault();
    } else {
        alert("Message sent successfully!");
    }
});
// Load announcements dynamically
document.addEventListener('DOMContentLoaded', () => {
    const announcementsSection = document.querySelector('.announcements-page main section ul');

    fetch('announcements.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(announcement => {
                const listItem = document.createElement('li');
                listItem.textContent = `${announcement.title} - ${announcement.date}`;
                announcementsSection.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error loading announcements:', error));
});
document.addEventListener("DOMContentLoaded", function () {
    const headings = document.querySelectorAll('.alert-heading');
    headings.forEach((heading, index) => {
        setTimeout(() => {
            heading.classList.add('alert-heading'); // Add animation class
        }, index * 500); // Delay for each heading
    });
});


