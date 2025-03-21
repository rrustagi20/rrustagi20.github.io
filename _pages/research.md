---
layout: page
title: Research
permalink: /research/
order: 3
---
I find modern computer vision algorithms quite fascinating. I also like to deploy algorithms in robotics due to its growing applications in the society and so I work in the intersection of computer vision and robotics. I have spent some excellent summers previosly with professors in autonomy and robot perception. I aspire to contribute to research in algorithms that are **trustworthy** and addresses dependability and **reliability** in AI-driven robotics. Overall, I like to study and use different mathematical tools in complex end-to-end pipelines to gaurantee failure-resistant operation

My research draws from Robotics and Machine Learning, with the following themes:

**3D Scene Understading**: Inspired by the SPARK Lab at MIT, I am fascinated to work in robot perception for scene understanding and reasoning object association over time. I have worked in Long-Term object tracking in an houshold environment in collaboration with **Amazon Lab126** to track and search multiple objects by leveraging contextual information to mitigate poor clasification / segmentation and object localisation issues when deployed in real-time!

 **Reliable Risk-Aware Predicition in Navigation**: Inspired by Davide Scaramuzza from RPG group and Sebastian Scherer from AirLab, I am to leverage rich information from vision data and combine with navigation schemes for a reliable and safe planning so that industries can use it blindly in day2day life. In this regard, I worked in 2D SLAM and implemented on ground and aerial robots. However, since vision-based methods also can be fooled by symmetries in environment/ motion blur/ and high frequency demand, I like to enforce "safety" using risk-aware / degeneracy prediction methods including observability analysis to define a control input from an "allowed" set as satisfied by the constraints.

  <!-- **Optimal Control**: Optimal control theory helps derive optimal trajectory set of control inputs for my agent to take in time t1 to t2 (time-constrained) to reach final goal. I like to use this theory for generating constrained control inputs that best satisfy task requirements. -->

  **Deep Reinforcement Learning X Control**: Inspired by the world and DeepSeek team, I am generally happy to use reinforcement learning and analysing sim2real possibilities. I use it for decision making to take actions according to a particular task-coded reward function. I like to research in such particular reward functions that can gaurantee agent-actions in a "safe" set as determined by the environment. The resemblance of RL reward function generation with control laws fascinates me and its ability to be generalizable over dynamics makes it cool!

[Google Scholar](https://scholar.google.com/citations?user=5KYg7IgAAAAJ&hl=en)

<!-- ### Selected Papers

* C. Prachand, R. Rustagi, R. Shankar, J. Singh, A. Abhishek, K.S. Venkatesh, "Vision-Based Autonomous Ship Deck
landing of an Unmanned Aerial Vehicle using Fractal ArUco markers", 2025 AIAA SciTech Forum.    
*(Accepted)*

* A. Singh, R. Rustagi and R. M. Hegde, "Lifetime Improvement in Rechargeable Mobile IoT Networks Using Deep Reinforcement Learning," in IEEE Transactions on Circuits and Systems II: Express Briefs, doi: 10.1109/TCSII.2024.3370686.  
[Paper Link](https://ieeexplore.ieee.org/abstract/document/10445698)

* A. Singh, R. Rustagi, S. Redhu and R. M. Hegde, "Mobile Energy Transmitter Scheduling in Energy Harvesting IoT Networks using Deep Reinforcement Learning," 2022 IEEE 8th World Forum on Internet of Things (WF-IoT), Yokohama, Japan, 2022, pp. 1-6, doi: 10.1109/WF-IoT54382.2022.10152078.  
[Paper Link](https://ieeexplore.ieee.org/abstract/document/10152078) -->

### Publications


<div class="publication-section">
  <!-- <h2>Publications</h2> -->

  <div class="publication-item">
    <div class="publication-img">
      <img src="{{ site.url }}/assets/vision.png" alt="EgoMimic">
    </div>
    <div class="publication-text">
      <h3>
        <a href="https://arc.aiaa.org/doi/10.2514/6.2025-2345">Vision-Based Autonomous Ship Deck landing of an Unmanned Aerial Vehicle using Fractal ArUco markers</a>
      </h3>
      <p>Chiranjeev Prachand, Rahul Rustagi, Ritwik Shankar, Jitendra Singh, Abhishek and K.S. Venkatesh</p>
      <p><strong>AIAA SciTech Forum 2025</strong></p>
      <p>Autonomous landing of quadrotor on a moving ship-like platform solely using Vision and Deep Learning methods</p>
    </div>
  </div>

  <div class="publication-item">
    <div class="publication-img">
      <img src="{{ site.url }}/assets/rl1.png" alt="NOD-TAMP">
    </div>
    <div class="publication-text">
      <h3>
        <a href="https://ieeexplore.ieee.org/abstract/document/10445698">Lifetime Improvement in Rechargeable Mobile IoT Networks Using Deep Reinforcement Learning</a>
      </h3>
      <p>Aditya Singh, Rahul Rustagi, Rajesh M. Hegde</p>
      <p><strong>IEEE Transactions on Circuits and Systems II: Express Briefs</strong></p>
      <p>Generalising previous MET work to work on Mobile-IoT Networks for scalability</p>
    </div>
  </div>

  <div class="publication-item">
    <div class="publication-img">
      <img src="{{ site.url }}/assets/rl2.png" alt="NOD-TAMP">
    </div>
    <div class="publication-text">
      <h3>
        <a href="https://ieeexplore.ieee.org/abstract/document/10152078">Mobile Energy Transmitter Scheduling in Energy Harvesting IoT Networks using Deep Reinforcement Learning</a>
      </h3>
      <p>Aditya Singh, Rahul Rustagi, Surender Redhu, Rajesh M. Hegde</p>
      <p><strong>IEEE WF-IoT 2022</strong></p>
      <p>Maximizing longevity of static-IoT networks using Deep RL algorithms </p>
    </div>
  </div>

</div>



## Undergraduate Thesis

[BTech Project - Autonomous Landing of an Unmanned Aerial Vehicle on an Oscillating Platform]({{ site.url }}/assets/rustagi_rahul_ugp.pdf)  
*(under guidance of [Prof. Abhishek](https://home.iitk.ac.in/~abhish/))*  
IIT Kanpur *(2023-2024)*  
Published in AIAA SciTech 2025