---
layout: page
---
{% include JB/setup %}

<div class="page-header fade-in">
  <h1 class="page-title">Rahul Rustagi</h1>
</div>

<div class="profile-section fade-in">
  <div class="profile-image">
    <img src="{{ site.url }}/assets/rahul_can1.jpg" alt="Rahul Rustagi">
  </div>
  
  <div class="profile-content">
    <p>I am a Masters Student at the <a href="https://ece.gatech.edu/">School of Electrical and Computer Engineering at Georgia Tech</a>. I work at the intersection of Perception in Robotics and Machine Learning. I like to develop algorithms based on differential geometry and leverage them for building intelligent robotic systems. I am advised by <a href="https://faculty.cc.gatech.edu/~chernova/">Dr. Sonia Chernova</a> at the <a href="https://rail-website.vercel.app/">RAIL Lab.</a></p>

    <p>I received my B.Tech in <a href="https://www.iitk.ac.in/aero/?view=featured">Aerospace Engineering from IIT Kanpur</a> with my capstone project advised by <a href="https://home.iitk.ac.in/~abhish/">Dr. Abhishek</a>. I have minors in Machine Learning, Computer Systems and English Literature. I've done research internships at Helicopter and VTOL Lab (2024), Carleton University (2023), WSN Lab (2022).</p>
  </div>
</div>

<!-- <div class="opportunity-banner fade-in">
  <h3><i class="fas fa-rocket"></i> Seeking Summer 2025 Opportunities</h3>
  <p>I am currently looking for paid internship opportunities in areas related to Software, Robotics, Computer Vision, and Sensor Fusion in the U.S.</p>
  <a href="mailto:rustagirahul24@gmail.com" class="cta-button">
    <i class="fas fa-envelope"></i> Get in Touch
  </a>
</div> -->

<div class="nav-links fade-in">
  <!-- <a href="assets/Rahul_CV.pdf"><i class="fas fa-file-pdf"></i></a> -->
  <!-- <a href="research"><i class="fas fa-graduation-cap"></i></a> -->
  <a href="https://scholar.google.com/citations?user=5KYg7IgAAAAJ&hl=en"><i class="fas fa-graduation-cap"></i></a>
  <!-- <a href="about"><i class="fas fa-user"></i></a> -->
  <a href="https://www.linkedin.com/in/rrustagi7/"><i class="fab fa-linkedin"></i></a>
  <a href="mailto:rustagirahul24@gmail.com"><i class="fas fa-envelope"></i></a>
</div>

<div class="news-section fade-in">
  <h4>Recent News</h4>
  <div class="news-container">
    <div style="height:300px;overflow:auto; padding: 0;">
      <table>
        <col width="120px">
        <col width="auto">
        <tr><td><b>May 2025</b></td><td>Spending the summer at <a href="https://www.symbotic.com/">Symbotic</a> as a Perception Research Intern!</td></tr>
        <!-- <tr><td><b>Jan 2025</b></td><td>Graduate Teaching Assistant in Spring 2025 for the course CS3630: Introduction to Robotics and Perception under <a href="https://faculty.cc.gatech.edu/~chernova/">Dr. Sonia Chernova</a></td></tr> -->
        <tr><td><b>Aug 2024</b></td><td>Our paper on "Vision-Guided autonomous UAV landing on moving ship" got accepted in 2025 AIAA SciTech Conference to be held in Orlando, Florida</td></tr>
        <tr><td><b>Aug 2024</b></td><td>Starting Masters in ECE at Georgia Tech</td></tr>
        <tr><td><b>Apr 2024</b></td><td>Successfully defended my BTech thesis in Safe Landing of VTOLs on Unstable Platform</td></tr>
        <tr><td><b>Feb 2024</b></td><td>Our <a href="https://ieeexplore.ieee.org/abstract/document/10445698">paper</a> on extending previous work to mobile IoT networks with a multi-objective data offloading and charging function got accepted to IEEE Transactions on Circuits and Systems II: Express Briefs</td></tr>
        <tr><td><b>Aug 2023</b></td><td><a href="https://ieeexplore.ieee.org/abstract/document/10152078/">Mobile Energy Transmitter Scheduling in Energy Harvesting IoT Networks using Deep Reinforcement Learning</a> got accepted at the 2022 IEEE World Forum on Internet of Things (WF-IoT)</td></tr>
      </table>
    </div>
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
  const sections = document.querySelectorAll('.profile-section, .opportunity-banner, .nav-links, .news-section');
  sections.forEach(section => {
    observer.observe(section);
  });
});
</script>
