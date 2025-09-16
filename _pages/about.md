---
layout: page
title: About Me
permalink: /about/
order: 1
---

<div class="about-hero fade-in">
  <div class="about-photo">
    <img src="/assets/rahul_can1.jpg" alt="Rahul Rustagi" class="profile-photo">
  </div>
  <div class="about-intro">
    <h2>Hello, I'm Rahul!</h2>
    <p class="intro-text">Out of all the experiences I've had, I find the challenge in solving research problems that addresses issues about reliability incredibly exciting.

I am passionate about applying my knowledge and skills to solve real-world problems and create innovative solutions. I've taken a large interest in building reliability in  end to end systems by using autonomy and robotics.

 When I'm not diving deep into algorithms and robotic systems, you'll find me exploring the world through various hobbies and interests.</p>
  </div>
</div>

<div class="gallery-section fade-in">
  <h2><i class="fas fa-images"></i> Life in Pictures</h2>
  <p class="gallery-intro">A random collection of moments from my life - adventures, experiences, and memories that shape who I am.</p>
  
  <div class="photo-gallery">
    <div class="photo-grid">
      <div class="photo-item">
        <img src="/assets/about_pics/1.jpeg" alt="Life moment 1">
        <div class="photo-overlay">
          <p>Castle Island, Boston</p>
        </div>
      </div>
      <div class="photo-item">
        <img src="/assets/about_pics/2.jpeg" alt="Life moment 2">
        <div class="photo-overlay">
          <p>Symbotic Interns, Cambridge</p>
        </div>
      </div>
      <div class="photo-item">
        <img src="/assets/about_pics/3.jpeg" alt="Life moment 3">
        <div class="photo-overlay">
          <p>Amicola Falls, GA</p>
        </div>
      </div>
      <div class="photo-item">
        <img src="/assets/about_pics/4.jpeg" alt="Life moment 4">
        <div class="photo-overlay">
          <p>Bluehole Falls, GA</p>
        </div>
      </div>
      <div class="photo-item">
        <img src="/assets/about_pics/5.jpeg" alt="Life moment 5">
        <div class="photo-overlay">
          <p>Deerlick Astronomy Village, GA</p>
        </div>
      </div>
      <div class="photo-item">
        <img src="/assets/about_pics/jfk.jpg" alt="Life moment 5">
        <div class="photo-overlay">
          <p>Charles River, Boston</p>
        </div>
      </div>
      <div class="photo-item">
        <img src="/assets/about_pics/6.jpeg" alt="Life moment 6">
        <div class="photo-overlay">
          <p>Adventuring with ba13</p>
        </div>
      </div>
      <div class="photo-item">
        <img src="/assets/about_pics/7.jpeg" alt="Life moment 7">
        <div class="photo-overlay">
          <p>Montmorency Falls, Quebec City</p>
        </div>
      </div>
      <div class="photo-item">
        <img src="/assets/about_pics/8.jpeg" alt="Life moment 8">
        <div class="photo-overlay">
          <p>Quecbec City</p>
        </div>
      </div>
      <div class="photo-item">
        <img src="/assets/about_pics/9.jpeg" alt="Life moment 9">
        <div class="photo-overlay">
          <p>Back home, Pune</p>
        </div>
      </div>
      <div class="photo-item">
        <img src="/assets/about_pics/11.jpg" alt="Life moment 11">
        <div class="photo-overlay">
          <p>Rohtang La, Manali, India</p>
        </div>
      </div>
      <div class="photo-item">
        <img src="/assets/about_pics/12.jpg" alt="Life moment 12">
        <div class="photo-overlay">
          <p>with my bro pullu (i'm on the left)</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- <div class="fun-facts fade-in">
  <h2><i class="fas fa-lightbulb"></i> Its all numbers</h2>
  <div class="facts-grid">
    <div class="fact-item">
      <span class="fact-number">3</span>
      <span class="fact-text">Minors completed during undergrad</span>
    </div>
    <!-- <div class="fact-item">
      <span class="fact-number">4</span>
      <span class="fact-text">Different research labs experienced</span>
    </div> 
    <div class="fact-item">
      <span class="fact-number" id="visit-counter">0</span>
      <span class="fact-text">Website visits</span>
    </div>
    <div class="fact-item">
      <span class="fact-number">∞</span>
      <span class="fact-text">Curiosity for learning new things</span>
    </div>
    <div class="fact-item">
      <span class="fact-number">22</span>
      <span class="fact-text">Fastest 3x3 Rubiks solve in secs</span>
    </div>
    <div class="fact-item">
      <span class="fact-number">3</span>
      <span class="fact-text">Number of languages I speak</span>
    </div>
    <div class="fact-item">
      <span class="fact-number">3</span>
      <span class="fact-text">Number of countries I've visited</span>
    </div>
  </div>
</div> -->

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

// Website visit counter
function updateVisitCounter() {
  // Get current visit count from localStorage
  let visitCount = localStorage.getItem('websiteVisits');
  
  // If no previous visits, initialize to 0
  if (!visitCount) {
    visitCount = 0;
  }
  
  // Increment visit count
  visitCount = parseInt(visitCount) + 1;
  
  // Store updated count
  localStorage.setItem('websiteVisits', visitCount);
  
  // Update display with animation
  const counterElement = document.getElementById('visit-counter');
  if (counterElement) {
    // Animate the counter
    let currentCount = 0;
    const increment = visitCount / 50; // Animate over 50 steps
    const timer = setInterval(function() {
      currentCount += increment;
      if (currentCount >= visitCount) {
        counterElement.textContent = visitCount.toLocaleString();
        clearInterval(timer);
      } else {
        counterElement.textContent = Math.floor(currentCount).toLocaleString();
      }
    }, 20); // Update every 20ms
  }
}

// Observe all sections and initialize visit counter
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.about-hero, .interests-section, .gallery-section, .fun-facts, .blog-section, .projects-section');
  sections.forEach(section => {
    observer.observe(section);
  });
  
  // Update visit counter
  updateVisitCounter();
});
</script>