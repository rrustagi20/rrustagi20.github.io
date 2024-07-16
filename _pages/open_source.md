---
layout: page
title: Other Projects
permalink: /other_projects/
order: 4
---

Outlining my non-published projects here (competitions, course research projects, designed homeworks/assignments). My research work can be seen [here](/research/).

#### **Tech Competitions**

**Micro Aerial Vehicle Swarm Formation Challenge** sponsored by [Drona Aviation](https://www.dronaaviation.com/) : This problem statement to make a trajectory of a swarm of drones by creating a ros-independent pipeline. The micro aerial vehicles were localised using markers and an external vision system, where each communicated self position to the ground station. The control was completely centralised. We used a deadlock system pipeline for the drones to move in a synchronous motion otherwise a failsafe for maintaing current position would trigger.   
Github Link: [aerial/interiit11](https://github.com/AerialRobotics-IITK/interiit_11.0) | Problem Statement: [PS]({{ site.url }}/assets/InterIIT.pdf) | Solution : [report]({{ site.url }}/assets/Documentation.pdf)

**Multi-Payload Delivery Challenge using UAV** sponsored by [Flipkart GRiD 4.0](https://unstop.com/competitions/flipkart-grid-40-robotics-challenge-in-association-with-shaastra-iit-madras-shaastra-2023-indian-institute-o-431848) : This problem statement required to prepare a pickup-drop package pipeline for drones used in rescue operations. With the takeoff, the drone would grid search a area to look for any packages to be picked up (which would be identified using vision) and grabbed using an autonomous triggering electromagnet. The drone would then ascend back to its hovering height to drop the package to a drop-off location and continue the grid search operation from where it left off.    
Github Link: [aerial/shastra23](https://github.com/AerialRobotics-IITK/shastra23) | Problem Statement: [PS]({{ site.url }}/assets/Flipkart.pdf)

#### **Other Research (Course Projects)**

**Autonomous Landing of UAV using Model Predictive Controller**   
Course: CS637 (Embedded and Cyber-Physical Systems): This project is a ROS simulation of a IRIS UAV (by eth-z) landing on a the top a husky platform. A MPC controller has been setup for predicting the optimal trajectory according to the reference trajectory fed to the drone. Two cases have been tested; one where the platform is stationary and other where the platform is moving. This is done inorder to test the response and accuracy of the controller. However due to issues with velocity contoller, the simulation is not present on our github link. Please stay tuned for updates on this.  
Github Link: [rahul/mpc_autoland](https://github.com/rrustagi20/MPC_AutoLanding/tree/main)

**Machine Unlearning using model treatment techniques**   
Course: CS772 (Probabilistic Machine Learning): This project is exploring probabilistic approaches for treating model performance. This is required for safety critical tasks where an example that the model was previously trained on needs to be removed and so the model needs to completely forget about it. The naive method suggests to train the model from scratch on the new dataset; however, machine unlearning explores methods to avoid extensive retraining and smartly subtract the influence of the unrequired examplesfrom the trained parameters. For this, we devised a two-stage pipeline; 1) Cause identification for identifying what datapoints in the dataset are faulty (or no longer required) and 2) Model treatment to use a mathematical formula to rectify the trained weights. Achieved scores of 0.42 for corrupted training data and 0.50 for filtered training data after treatment.    
Github Link: [rahul/pml](https://github.com/rrustagi20/pml/tree/main) | Project Report: [Solution]({{ site.url }}/assets/pml.pdf)

<!-- []() -->
<!-- [Self-supervised Learning on 3D Point Clouds](https://github.com/rrustagi20/pointnet-acd-deformations): New algorithms for self-supervised learning on point clouds, where we teach models to discriminate between real and fake objects. To create fake objects, we perform global perturbations to segments of an object derived from [Approximate Convex Decomposition](https://arxiv.org/abs/2003.13834) ([report]({{ site.url }}/assets/point_cloud_discriminate.pdf)).

[MixMatch on Vision + Language Tasks (NLVR2)](https://github.com/rrustagi20/mixmatch-lxmert): An attempt to integrate the [MixMatch](https://arxiv.org/abs/1905.02249) data augmentation algorithm for semi-supervised image classification to the challenging setting of [NLVR2](http://lil.nlp.cornell.edu/nlvr), where the input space has both images and text ([report](https://sumanvid97.github.io/docs/cv_report.pdf)).

[Research Exchange - A Collaborative Paper Annotation Tool](https://github.com/rrustagi20/research-exchange) - A platform to collaboratively annotate scientific literature to help newcomers understand research papers, built during an Human Computer Interaction course project ([report]({{ site.url }}/assets/research-exchange.pdf)).

[Inference Networks for Structured Prediction](https://github.com/TheShadow29/infnet-spen) - A TensorFlow implementation for the multi-label classification experiments in [Learning Approximate Inference Networks for Structured Prediction](https://arxiv.org/abs/1803.03376). Also contains experiments on the [FIGMENT](http://cistern.cis.lmu.de/figment/) dataset and a extension to Inference Network training algorithm based on [Wasserstein GANs](https://arxiv.org/abs/1704.00028) ([report](https://people.cs.umass.edu/~kalpesh/infnet.pdf)).

[Diversity Sampling in Machine Learning](http://github.com/rrustagi20/diversity-sampling) - An implementation of [Diverse Beam Search for Neural Networks](https://arxiv.org/abs/1610.02424) in Language Modelling. Also contains the original (slightly modified code) for the interactive segmentation experiments in [Diverse M-Best Solutions in MRFs](http://ttic.uchicago.edu/~gregory/papers/MBestModes.pdf) ([report](https://people.cs.umass.edu/~kalpesh/diversity.pdf)).

[Macro Actions in Reinforcement Learning](https://github.com/rrustagi20/macro-action-rl) - A suite of five algorithms (including ideas from "[Learning to Repeat: Fine Grained Action Repetition for Deep Reinforcement Learning](https://arxiv.org/abs/1702.06054)") encouraging agents to repeat actions ([report](https://people.cs.umass.edu/~kalpesh/macro.pdf)).

[Single Image Haze Removal](https://github.com/rrustagi20/blind-dehazing) - An implementation of He et al. 2009, "[Single Image Haze Removal using Dark Channel Prior](https://www.robots.ox.ac.uk/~vgg/rg/papers/hazeremoval.pdf)" and an ongoing implementation of Bahat & Irani 2016, "[Blind Dehazing using Internal Patch Recurrence](http://ieeexplore.ieee.org/document/7492870/)" ([report](https://people.cs.umass.edu/~kalpesh/dehaze.pdf)).

[CNNs for Sentence Classification](https://github.com/rrustagi20/tf-sentence-classification) - A TensorFlow 1.1 implementation of Kim 2014, "[Convolutional Neural Networks for Sentence Classification](https://arxiv.org/abs/1408.5882)".  

[Brittle Fracture Simulation](https://github.com/rrustagi20/brittle-fracture-simulation) - Python implementation of O'Brien and Hodgins 1999, "[Graphical Modeling and Animation of Brittle Fracture](http://graphics.berkeley.edu/papers/Obrien-GMA-1999-08/Obrien-GMA-1999-08.pdf)".  

[ECG Signal Analysis](https://github.com/rrustagi20/ecg-analysis) - Python implementation of parts of Christopher Buck, Aneesh Sampath 2013, “[ECG Signal Analysis for Myocardial Infarction Detection.](https://cnx.org/contents/VZtarYnV@2.1:WO1d4SJW@1/Introduction)”.   -->

<!-- #### **Course Materials** -->

<!-- [Homework](https://github.com/rrustagi20/allennlp-probe-hw) on linguistic probe tasks designed for UMass Amherst's grad NLP class using [AllenNLP](https://allennlp.org/). -->

<!-- #### **Open Source Contributions** -->

<!-- * Primary Contributor / Maintainer - [mozilla/wptview](https://github.com/mozilla/wptview)
* Significant Contributions - [mozilla/gecko-dev](https://github.com/mozilla/gecko-dev/) (Firefox), [mozilla/treeherder](https://github.com/mozilla/treeherder), [mozilla/mozilla_ci_tools](https://github.com/mozilla/mozilla_ci_tools)
* Other Contributions - [mozilla-b2g/gaia](https://github.com/mozilla-b2g/gaia/) (Firefox OS), [mozilla-bteam/bmo](https://github.com/mozilla-bteam/bmo) (Bugzilla), [rust-lang-nursery/rust-clippy](https://github.com/rust-lang-nursery/rust-clippy), [arslanbilal/git-cheat-sheet](https://github.com/arslanbilal/git-cheat-sheet), [servo/servo](https://github.com/servo/servo), [w3c/web-platform-tests](https://github.com/w3c/web-platform-tests), [sunpy/sunpy](https://github.com/sunpy/sunpy), [taskcluster/taskcluster-client](https://github.com/taskcluster/taskcluster-client.py/graphs/contributors), [saketkc/fos-proposals](https://github.com/saketkc/fos-proposals), [mozilla/geckodriver](https://github.com/mozilla/geckodriver), [mozilla/pulse_actions](https://github.com/mozilla/pulse_actions) -->
