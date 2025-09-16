---
layout: page
title: Projects
permalink: /projects/
order: 5
---

<div class="projects-header fade-in">
  <h1 class="page-title">Cool Projects</h1>
  <p class="page-subtitle">Some interesting projects I've worked on that showcase my passion for innovation and problem-solving.</p>
</div>

<div class="projects-section fade-in">
  <div class="projects-grid">
    <div class="project-item">
      <div class="project-image">
        <img src="/assets/project_gifs/mpc_project.gif" alt="UAV Landing Demo" class="project-gif" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
        <i class="fas fa-helicopter project-fallback-icon" style="display: none;"></i>
      </div>
      <div class="project-content">
        <h3>Autonomous MPC-Based UAV Landing</h3>
        <div class="project-tags">
          <span class="tag">Computer Vision</span>
          <span class="tag">PX4</span>
          <span class="tag">OpenCV</span>
          <span class="tag">Embedded Systems</span>
        </div>
        <p>A MPC based controller for landing of a drone on a static/ moving platform</p>
        <div class="project-links">
          <a href="https://github.com/rrustagi20/MPC_AutoLanding" class="project-link">View Project <i class="fas fa-external-link-alt"></i></a>
        </div>
      </div>
    </div>
    <div class="project-item">
      <div class="project-image">
        <img src="/assets/project_gifs/btech_project.gif" alt="UAV Landing Demo" class="project-gif" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
        <i class="fas fa-helicopter project-fallback-icon" style="display: none;"></i>
      </div>
      <div class="project-content">
        <h3>End-to-End Vision-Based UAV Landing</h3>
        <div class="project-tags">
          <span class="tag">Computer Vision</span>
          <span class="tag">PX4</span>
          <span class="tag">OpenCV</span>
          <span class="tag">Embedded Systems</span>
        </div>
        <p>Developed a vision-guided autonomous UAV landing system for moving and rotating platforms, combining object detection with flight control systems. This project addresses the challenge of safe landing on unstable platforms like ships or moving vehicles.</p>
        <div class="project-links">
          <a href="https://arc.aiaa.org/doi/abs/10.2514/6.2025-2345" class="project-link">Paper Link <i class="fas fa-external-link-alt"></i></a>
        </div>
      </div>
    </div>
    <div class="project-item">
      <div class="project-image">
        <img src="/assets/project_gifs/drona.gif" alt="SLAM Integration Demo" class="project-gif" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
        <i class="fas fa-map-marked-alt project-fallback-icon" style="display: none;"></i>
      </div>
      <div class="project-content">
        <h3>Mirco Aerial Vehicle SWARM</h3>
        <div class="project-tags">
          <span class="tag">ROS</span>
          <span class="tag">SLAM</span>
          <span class="tag">Robotics</span>
          <span class="tag">LiDAR</span>
        </div>
        <p>[InterIIT 11.0] Created a low-cost algorithm ros-independent solution for a swarm of 2 MAVs simluating pattern formation.</p>
        <div class="project-links">
          <a href="https://github.com/AerialRobotics-IITK/interiit_11.0.git" class="project-link">View Project <i class="fas fa-external-link-alt"></i></a>
        </div>
      </div>
    </div>
    <div class="project-item">
      <div class="project-image">
        <img src="/assets/project_gifs/shaastra.jpg" alt="IoT Energy Optimization Demo" class="project-gif" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
        <i class="fas fa-network-wired project-fallback-icon" style="display: none;"></i>
      </div>
      <div class="project-content">
        <h3>Payload Pickup Delivery Challenge</h3>
        <div class="project-tags">
          <span class="tag">Deep RL</span>
          <span class="tag">IoT</span>
          <span class="tag">Optimization</span>
          <span class="tag">Python</span>
        </div>
        <p>[IIT Madras] Shaastra- Developed and demonstrated a payload search, pickup and drop-off solution executed on a medium sized drone</p>
        <div class="project-links">
          <a href="https://github.com/AerialRobotics-IITK/shastra23" class="project-link">View Project <i class="fas fa-external-link-alt"></i></a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="projects-cta fade-in">
  <h2>Interested in Collaboration?</h2>
  <p>I'm always excited to work on innovative projects that can make a real impact. Let's build something amazing together!</p>
  <div class="cta-buttons">
    <a href="mailto:rustagirahul24@gmail.com" class="cta-button">
      <i class="fas fa-handshake"></i> Let's Collaborate
    </a>
    <a href="/cv/" class="cta-button secondary">
      <i class="fas fa-file-pdf"></i> View My CV
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
  const sections = document.querySelectorAll('.projects-header, .projects-section, .projects-cta');
  sections.forEach(section => {
    observer.observe(section);
  });
});
</script> 