---
layout: page
title: Blog
permalink: /blog/
# order: 4  # Commented out to hide from navigation
hidden: true
---

<div class="blog-header fade-in">
  <h1 class="page-title">Blog & Thoughts</h1>
  <p class="page-subtitle">Sharing my thoughts, experiences, and learnings from my journey in robotics, research, and life.</p>
</div>

<div class="blog-section fade-in">
  <div class="blog-grid">
    <div class="blog-item">
      <div class="blog-icon">
        <i class="fas fa-robot"></i>
      </div>
      <h3>My Journey into Robotics</h3>
      <p class="blog-date">Coming Soon</p>
      <p>How I discovered my passion for robotics and what drives me to solve real-world problems through autonomous systems.</p>
      <a href="#" class="blog-link">Read More <i class="fas fa-arrow-right"></i></a>
    </div>
    
    <div class="blog-item">
      <div class="blog-icon">
        <i class="fas fa-graduation-cap"></i>
      </div>
      <h3>Research Life at Georgia Tech</h3>
      <p class="blog-date">Coming Soon</p>
      <p>Insights into graduate school life, research challenges, and the exciting world of academic exploration.</p>
      <a href="#" class="blog-link">Read More <i class="fas fa-arrow-right"></i></a>
    </div>
    
    <div class="blog-item">
      <div class="blog-icon">
        <i class="fas fa-cube"></i>
      </div>
      <h3>Speedcubing Adventures</h3>
      <p class="blog-date">Coming Soon</p>
      <p>My journey with Rubik's cubes, competition experiences, and what speedcubing taught me about problem-solving.</p>
      <a href="#" class="blog-link">Read More <i class="fas fa-arrow-right"></i></a>
    </div>
    
    <div class="blog-item">
      <div class="blog-icon">
        <i class="fas fa-plane"></i>
      </div>
      <h3>Travel Diaries</h3>
      <p class="blog-date">Coming Soon</p>
      <p>Stories from my adventures across different countries and cultures, and how travel shapes perspective.</p>
      <a href="#" class="blog-link">Read More <i class="fas fa-arrow-right"></i></a>
    </div>
    
    <div class="blog-item">
      <div class="blog-icon">
        <i class="fas fa-lightbulb"></i>
      </div>
      <h3>Thoughts on Innovation</h3>
      <p class="blog-date">Coming Soon</p>
      <p>Reflections on creativity, innovation, and what it takes to build solutions that make a difference.</p>
      <a href="#" class="blog-link">Read More <i class="fas fa-arrow-right"></i></a>
    </div>
    
    <div class="blog-item">
      <div class="blog-icon">
        <i class="fas fa-code"></i>
      </div>
      <h3>Coding Adventures</h3>
      <p class="blog-date">Coming Soon</p>
      <p>Stories from my programming journey, lessons learned, and tips for fellow developers.</p>
      <a href="#" class="blog-link">Read More <i class="fas fa-arrow-right"></i></a>
    </div>
  </div>
</div>

<div class="blog-cta fade-in">
  <h2>Stay Updated</h2>
  <p>New posts coming soon! I'll be sharing insights from my research, travel experiences, and personal growth journey.</p>
  <div class="cta-buttons">
    <a href="mailto:rustagirahul24@gmail.com" class="cta-button">
      <i class="fas fa-envelope"></i> Get Notified
    </a>
    <a href="/about/" class="cta-button secondary">
      <i class="fas fa-user"></i> Learn More About Me
    </a>
  </div>
</div>

<script>
// Add fade-in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.blog-header, .blog-section, .blog-cta');
  sections.forEach(section => {
    observer.observe(section);
  });
});
</script> 