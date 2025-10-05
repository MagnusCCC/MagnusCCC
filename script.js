// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const htmlElement = document.documentElement;

// Load theme from localStorage
const currentTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', currentTheme);

themeToggle?.addEventListener('click', () => {
    const theme = htmlElement.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
    } else if (window.scrollY < 50) {
        navbar.classList.remove('scrolled') 
    }
});

// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
});

// Animated Counters
const statNumbers = document.querySelectorAll('.stat-number');

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };

    updateCounter();
}

// Intersection Observer for counters
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && !statNumber.classList.contains('animated')) {
                statNumber.classList.add('animated');
                animateCounter(statNumber);
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-card').forEach(card => {
    observer.observe(card);
});

// Library Page - Generate PDFs
const pdfGrid = document.getElementById('pdfGrid');

if (pdfGrid) {
    const tags = ['Microgravity', 'DNA', 'Plant Growth', 'Astronaut Health'];
    const icons = ['🧬', '🌱', '🔬', '💊', '🚀', '⚗️', '🧪', '🩺'];

    for (let i = 1; i <= 40; i++) {
        const pdfCard = document.createElement('div');
        pdfCard.className = 'pdf-card';

        const randomTag = tags[Math.floor(Math.random() * tags.length)];
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];

        pdfCard.innerHTML = `
            <div class="pdf-preview">${randomIcon}</div>
            <div class="pdf-info">
                <div class="pdf-title">${i}.pdf</div>
                <span class="pdf-tag">${randomTag}</span>
            </div>
        `;

        pdfCard.addEventListener('click', () => {
            alert(`Opening ${i}.pdf (Demo)`);
        });

        pdfGrid.appendChild(pdfCard);
    }
}

// Library Search
const librarySearch = document.getElementById('librarySearch');
const resultsCount = document.getElementById('resultsCount');

librarySearch?.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const pdfCards = document.querySelectorAll('.pdf-card');
    let visibleCount = 0;

    pdfCards.forEach(card => {
        const title = card.querySelector('.pdf-title').textContent.toLowerCase();
        const tag = card.querySelector('.pdf-tag').textContent.toLowerCase();

        if (title.includes(searchTerm) || tag.includes(searchTerm)) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    if (resultsCount) {
        resultsCount.textContent = visibleCount;
    }
});

// Library Filters
const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
const clearFiltersBtn = document.querySelector('.clear-filters');
const filterToggle = document.querySelector('.filter-toggle');
const filters = document.querySelector('.filters');

filterToggle?.addEventListener('click', () => {
    filters?.classList.toggle('active');
});

filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedFilters = Array.from(filterCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        const pdfCards = document.querySelectorAll('.pdf-card');
        let visibleCount = 0;

        pdfCards.forEach(card => {
            const tag = card.querySelector('.pdf-tag').textContent.toLowerCase().replace(' ', '-');

            if (checkedFilters.length === 0 || checkedFilters.includes(tag)) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (resultsCount) {
            resultsCount.textContent = visibleCount;
        }
    });
});

clearFiltersBtn?.addEventListener('click', () => {
    filterCheckboxes.forEach(cb => cb.checked = false);
    const pdfCards = document.querySelectorAll('.pdf-card');
    pdfCards.forEach(card => card.style.display = 'block');
    if (resultsCount) {
        resultsCount.textContent = '40';
    }
});

// AI Chat
const chatInput = document.getElementById('chatInput');
const sendButton = document.getElementById('sendButton');
const chatContainer = document.getElementById('chatContainer');

const aiResponses = [
    "That's a fascinating question! Based on recent research, microgravity environments present unique challenges for biological systems. Studies from the ISS have shown remarkable adaptations in cellular processes.",
    "Excellent inquiry! Space biology research has revealed that cosmic radiation has significant effects on DNA repair mechanisms. NASA's experiments demonstrate the importance of understanding these changes for long-duration missions.",
    "Great question! Plant growth in space requires specialized systems to manage water, nutrients, and gas exchange. The Veggie experiments on the ISS have provided valuable insights into sustainable food production for future Mars missions.",
    "Interesting topic! Astronaut health monitoring is crucial for mission success. Research shows that bone density loss and muscle atrophy are major concerns, leading to development of exercise protocols and nutritional interventions.",
    "That's an important area of study! The microgravity environment affects gene expression in unexpected ways. Recent studies have identified specific genes that are upregulated or downregulated in space conditions."
];

function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${isUser ? 'user-message' : 'ai-message'}`;

    messageDiv.innerHTML = `
        ${!isUser ? '<div class="message-avatar">🤖</div>' : ''}
        <div class="message-content">
            <p>${text}</p>
        </div>
        ${isUser ? '<div class="message-avatar">👤</div>' : ''}
    `;

    chatContainer?.appendChild(messageDiv);
    chatContainer?.scrollTo({ top: chatContainer.scrollHeight, behavior: 'smooth' });
}

function sendMessage() {
    const message = chatInput?.value.trim();

    if (message && chatContainer) {
        addMessage(message, true);
        chatInput.value = '';

        setTimeout(() => {
            const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
            addMessage(randomResponse, false);
        }, 1000);
    }
}

sendButton?.addEventListener('click', sendMessage);

chatInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target?.scrollIntoView({ behavior: 'smooth' });
    });
});

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll('.article-card, .about-card, .team-card, .tech-item');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';

            setTimeout(() => {
                entry.target.style.transition = 'all 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);

            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});