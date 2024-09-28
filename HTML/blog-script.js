document.addEventListener('DOMContentLoaded', function() {
    const postGrid = document.getElementById('postGrid');
    const modal = document.getElementById('storyModal');
    const openFormBtn = document.getElementById('openFormBtn');
    const closeBtn = document.getElementsByClassName('close')[0];
    const storyForm = document.getElementById('storyForm');

    // Sample blog posts data
    const blogPosts = [
        {
            title: "My Vegan Journey: From Skeptic to Advocate",
            author: "Emily Johnson",
            excerpt: "I never thought I'd go vegan, but after trying The Vegan Vine's recipes, I've never felt better!",
            image: "blog1.png"
        },
        {
            title: "How Veganism Improved My Athletic Performance",
            author: "Michael Chen",
            excerpt: "As a professional athlete, I was skeptical about a vegan diet. Now, I can't imagine training any other way.",
            image: "blog2.png"
        },
        {
            title: "Vegan Eating and My Environmental Impact",
            author: "Sophia Rodriguez",
            excerpt: "I calculated my carbon footprint before and after going vegan. The results were eye-opening!",
            image: "blog3.png"
        }
    ];

    // Function to create blog post elements
    function createBlogPost(post) {
        const article = document.createElement('article');
        article.className = 'blog-post';
        article.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <div class="blog-post-content">
                <h2>${post.title}</h2>
                <p class="author">By ${post.author}</p>
                <p>${post.excerpt}</p>
                <a href="#" class="read-more">Read More</a>
            </div>
        `;
        return article;
    }

    // Populate blog posts
    blogPosts.forEach(post => {
        postGrid.appendChild(createBlogPost(post));
    });

    // Modal functionality
    openFormBtn.onclick = function() {
        modal.style.display = "block";
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Form submission (for demonstration - replace with actual submission logic)
    storyForm.onsubmit = function(e) {
        e.preventDefault();
        alert("Thank you for sharing your story! We'll review it and post it soon.");
        modal.style.display = "none";
        storyForm.reset();
    }

    // Lazy loading images (if browser supports it)
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
});