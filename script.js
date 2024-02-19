personal-website/
│
├── js/
│   └── script.js    # JavaScript file for interactivity
// Simulated blog posts data
const blogPosts = [
    {
        title: "My First Blog Post",
        date: "February 20, 2024",
        content: "This is the content of my first blog post. Welcome to my blog!"
    },
    {
        title: "Learning Web Development",
        date: "February 25, 2024",
        content: "Today, I want to share my journey learning web development..."
    }
    // Add more blog posts here
];

// Function to display blog posts
function displayBlogPosts() {
    const blogSection = document.querySelector('#blogPosts');
    if (!blogSection) return;

    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p><em>${post.date}</em></p>
            <p>${post.content}</p>
        `;
        blogSection.appendChild(postElement);
    });
}

// Call displayBlogPosts on window load
window.onload = function() {
    displayBlogPosts();
};

