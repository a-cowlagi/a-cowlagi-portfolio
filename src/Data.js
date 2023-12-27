
export const allProjects = [
  {
    id: 1,
    title: "Does Data Geometry Control Neural Geometry?",
    text: "Studying deep network over-parameterization using the Fisher Information Matrix (FIM). <br><br> Discovered surprising trends in the structure of the FIM eigenspectrum and the topology of model predictions. <br><br> <div class = 'inner' style = 'z-index: 20'> <a href= 'https://aaai.org/Conferences/AAAI-22/student-abstract-and-poster-program/' target = '_blank'> </div> Published </a> in AAAI-2022 as a Student Abstract and further selected as 1 of 20 finalist papers.",
    img:
       "assets/eigenspectra.png",
    link:  "/Data-Geometry-Neural-Geometry.pdf",
    
  },
  {
    id: 2,
    title: "Penn Electric Racing",
    text: "Hardware and Software sub-teams: <br><br>  Hardware: Designing, testing, and debugging a PCB to monitor and balance vehicle accumulator substacks (9 70V stacks) <br><br> Software: Developing firmware to perform high-speed (15+ kHz) PID-based field-oriented control (FOC) through space-vector modulation (SVM) on custom-built 3-phase motor controllers.",
    img:
      "./assets/rev4.png",
    link: "https://www.pennelectricracing.com/",
    
  },
  {
    id: 3,
    title: "Citadel Correlation One Data Open Championship",
    text: "<a href = 'https://drive.google.com/file/d/15FPujKoWgMyVR9WH3wJplt73qx2rrqGm/view?usp=share_link' target = '_blank'>Summer Invitational (1st Place)</a>: Conducted an in-depth analysis of the risk assessment methodology employed by peer-peer lenders, using a modified nearest neighbors model. <br><br> <a href = 'https://drive.google.com/file/d/1Zv0SI1A1hsJL8wY-9PHiPHu309Ct31bE/view?usp=share_link' target = '_blank'>Championship (3rd Place)</a>: Developed a robust methodology to improve the budgetary policy decisions of post-secondary institutions using constrained optimization on a low-dimensional manifold.",
    img:
       "assets/mca_embedding.png",
    link: "https://github.com/a-cowlagi/citadel-summer-invitational22",    
  },
  {
    id: 4,
    title: "AstroTrack",
    text: "An efficient Python-based pipeline to aid with the detection, recovery, and characterization of minor planets in the solar system (asteroids, trans-Neptunian objects, Kuiper Belt Objects) using the DES and DEEP surveys.  <br><br>Single night analysis results: Recovered ~480 known asteroids across exposures, detection of ~1,000 new objects.  <a href = 'https://abstracts.societyforscience.org/Home/FullAbstract?ISEFYears=0%2C&Category=Any%20Category&AllAbstracts=True&FairCountry=Any%20Country&FairState=Any%20State&ProjectId=19496' target = '_blank'> ISEF Finalist </a>",
    img:  "assets/astrotrack.png",
    link: "https://gitfront.io/r/user-7866516/bc4cff16377033ad8855f71e915117cfcf7855d3/AstroTrack/",
  },
  {
    id: 5,
    title: "StructuralGT",
    text: "Aided with the development of a <a href = 'https://pypi.org/project/StructuralGT/' target = '_blank'>Python package </a> to automate the analysis of structural networks (macro/microscale) by converting greyscale representations (e.g. SEM/TEM images) to graphs using the NetworkX library. <br><br> Recognized in Acknowledgements of <a href = 'https://pubs.acs.org/doi/10.1021/acsnano.1c04711' target = '_blank'>Structural Analysis of Nanoscale Network Materials Using Graph Theory (ACS Nano 2021, 15, 8) </a>. ",
    img:
       "assets/structuralgt.png",
    link: "https://www.biorxiv.org/content/10.1101/2021.04.07.438877v1.full"
  },
  {
    id: 6,
    title: "To Contrast or Not to Contrast?",
    text: "A goal of visual representation learning is to produce representations of natural images that reflect our own belief priors about the structure of images as well as the labels given to them. <br> <br> This work explores various properties of representations learned by self-supervised and supervised contrastive learning methods and verify their contribution to transferability and robustness.",
    img:
       "assets/contrastive_learning.png",
    link: "/To-Contrast-Or-Not-To-Contrast.pdf",
  
  },
  
  {
    id: 7,
    title: "DigiNotes",
    text: "Whether it’s the professors’ lecture notes on the chalkboard, or your friend’s handwritten notes on paper, the common method for copying down other people’s notes is taking a quick picture on your phone. <br> <br> This project explores the idea of converting handwritten words, equations, and diagrams into an easily digestible, digital format for later use.",
    img:
       "assets/diginotes.png",
    link: "https://github.com/a-cowlagi/DigiNotes"
  },
  {
    id: 8,
    title: "Stereo SLAM",
    text: "This work implements a Stereo Visual SLAM system by performing feature-based visual odometry. Then, a keyframe-based factor graph optimization routine is employed to periodically refine landmark and camera pose estimates. <br> <br>Notably, we leverage symbolic programming and sparse map maintenance to efficiently create a 3D map of the environment while simultaneously estimating the camera's position and orientation in real-time.",
    img:
       "assets/stereo_slam.png",
    link: "https://github.com/Siming-He/Stereo_SLAM_6500"
  },
  {id: 9,
  title: "Subtle Subterfuge",
  text: "Natural language is an interesting domain for machine learning because language often contains redundancies –-  there are many ways to say the same thing. Consequently, we might desire that effective models are robust to such redundancies. <br> <br> In this work, we demonstrate modern models do not demonstrate such robustness by exploring and extending methods to generate state-of-the-art adversarial examples for sentiment classification.",
  img: "assets/subtle_subterfuge.png",
  link: "/SubtleSubterfuge.pdf"
  },
  {
    id: 10,
    title: "AI@Penn, WUDAC",
    text: "Organized <a href = 'https://aipenn.org/aihacks' target = '_blank'> datathon </a> at the University of Pennsylvania sponsored by fintech/e-commerce companies attracting 100+ teams <br><br> Designed and taught workshop on sentiment analysis to 30+ Penn undergraduate students <br><br>Worked with a Philadelphia-based startup (Highlight) to develop a robust system for product review evaluation with 90+% OOS accuracy",
    img:
       "assets/aipennwudac.png",
    link: "https://gitfront.io/r/user-7866516/e40d90e09f12584ba430ee018c714ebc691b7486/AI-Penn-and-WUDAC/"
  },
  {
    id: 11,
    title: "IOT-Based Solar Monitoring",
    text: "Constructed a novel IOT-based monitoring and feedback system for use with off-grid photovoltaic systems. <br><br> A long-range, Arduino-based device able to dynamically adjust power production to accomodate for real-time conditions and adapt to user energy consumption patterns. <br><br> Category winner (Energy) at Michigan Science and Engineering Fair",
    img:
       "assets/iot.png",
    link: "https://drive.google.com/drive/folders/13q-R1LtKgJ6YbgFQYetQewGDOrZpF2_a?usp=sharing",
  
  },
  {
    id: 12,
    title: "Billiard Balls and Decimal Expansions",
    text: "Projects completed at the University of Michigan, in an inquiry-based course exploring some open problems in mathematics. <br><br>• Billiard balls is an exploration of the mathematics of the trajectory of a billiard ball undergoing collisions with walls. <br><br>• Decimal expansions investigates the periods of decimal expansions of rational numbers.",
    img:
       "assets/mathresearch.png",
    link: "https://drive.google.com/drive/folders/1xT9Ds7hNejW5dVYZksuPWH8sdXXNB-kJ?usp=sharing"
  },
];





