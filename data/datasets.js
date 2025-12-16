// MoCap Index Data Source
// Schema conforms to validator rules: id (4-char), name, institution, license, year, dimension, method, subjects, description, formats, links, labels, stats, categories.

const datasets = [
    {
        id: "CMU1",
        name: "CMU Mocap",
        institution: "Carnegie Mellon University",
        license: "Public / Free (Commercial Allowed)",
        year: 2003,
        dimension: "3D",
        method: "Marker (Vicon)",
        subjects: "Single",
        description: "One of the earliest and most extensive libraries of motion capture data. Contains a vast variety of generic actions, locomotion, sports, and interaction motions.",
        formats: ["ASF/AMC", "C3D", "BVH", "TVD"],
        links: {
            website: "http://mocap.cs.cmu.edu/",
            download: "http://mocap.cs.cmu.edu/search.php",
            paper: "http://mocap.cs.cmu.edu/faqs.php"
        },
        labels: ["Locomotion", "Sports", "Interaction", "Generic"],
        categories: ["General", "Sports", "Interaction"],
        stats: { subjects: 144, motions: "2,500+", fps: 120 }
    },
    {
        id: "H36M",
        name: "Human3.6M",
        institution: "Catalan Agency for Research (IMP)",
        license: "Academic Use Only",
        year: 2014,
        dimension: "3D",
        method: "Marker + Video",
        subjects: "Single",
        description: "Large scale dataset for 3D human pose estimation. Features professional actors performing specific activities in a controlled lab environment.",
        formats: ["CDF", "JPG", "MP4", "BVH"],
        links: {
            website: "http://vision.imar.ro/human3.6m/",
            paper: "https://ieeexplore.ieee.org/document/6682899"
        },
        labels: ["Daily Activities", "Pose Estimation", "Eating", "Sitting", "Discussion"],
        categories: ["General", "Daily Living"],
        stats: { subjects: 11, motions: "3.6M Frames", fps: 50 }
    },
    {
        id: "NTU1",
        name: "NTU RGB+D 120",
        institution: "Nanyang Technological University",
        license: "Research Only",
        year: 2019,
        dimension: "3D",
        method: "Kinect (RGB-D)",
        subjects: "Multi",
        description: "Massive scale dataset for action recognition captured with Microsoft Kinect v2. Includes single person actions and two-person interactions.",
        formats: ["Skeleton (.txt)", "RGB", "Depth", "IR"],
        links: {
            website: "https://rose1.ntu.edu.sg/dataset/actionRecognition/",
            paper: "https://arxiv.org/abs/1905.04757"
        },
        labels: ["Action Recognition", "Interaction", "Daily Living", "Health"],
        categories: ["Interaction", "Daily Living"],
        stats: { subjects: 106, motions: "114k Samples", fps: 30 }
    },
    {
        id: "AMAS",
        name: "AMASS",
        institution: "Max Planck Institute (MPI-IS)",
        license: "Various",
        year: 2019,
        dimension: "3D",
        method: "Unified / Various",
        subjects: "Single",
        description: "The Archive of Motion Capture as Surface Shapes. It unifies 15+ different optical marker datasets into a common SMPL mesh framework.",
        formats: ["NPZ (Python)", "SMPL"],
        links: {
            website: "https://amass.is.tue.mpg.de/",
            paper: "https://arxiv.org/abs/1904.03278"
        },
        labels: ["SMPL", "Mesh", "Unified", "Various"],
        categories: ["General"],
        stats: { subjects: 300, motions: "11k Motions", fps: "Var" }
    },
    {
        id: "MPI1",
        name: "MPII Human Pose",
        institution: "Max Planck Institute",
        license: "Simplified BSD",
        year: 2014,
        dimension: "2D",
        method: "Video / Manual Annotation",
        subjects: "Multi",
        description: "Benchmark for evaluation of articulated human pose estimation. Images collected from YouTube videos covering daily activities.",
        formats: ["MAT (Matlab)", "JPG"],
        links: {
            website: "http://human-pose.mpi-inf.mpg.de/",
            paper: "http://human-pose.mpi-inf.mpg.de/#overview"
        },
        labels: ["Pose Estimation", "In-the-wild", "Sports"],
        categories: ["Wild", "Sports"],
        stats: { subjects: "Thousands", motions: "25k Images", fps: "N/A" }
    },
    {
        id: "COCO",
        name: "COCO Keypoints",
        institution: "COCO Consortium / Microsoft",
        license: "CC-BY 4.0",
        year: 2016,
        dimension: "2D",
        method: "Image / Manual Annotation",
        subjects: "Crowd",
        description: "Large-scale object detection, segmentation, and captioning dataset with person keypoint annotations for multi-person pose estimation.",
        formats: ["JSON", "JPG"],
        links: {
            website: "https://cocodataset.org/#keypoints-2020",
            download: "https://cocodataset.org/#download"
        },
        labels: ["Keypoints", "Segmentation", "In-the-wild"],
        categories: ["Wild", "Interaction"],
        stats: { subjects: "Thousands", motions: "200k Images", fps: "N/A" }
    },
    {
        id: "TCAP",
        name: "TotalCapture",
        institution: "University of Surrey",
        license: "Academic Use Only",
        year: 2017,
        dimension: "3D",
        method: "Hybrid (IMU + Video)",
        subjects: "Single",
        description: "Dataset focusing on tracking widely varying motions including crawling and jumping, fusing video and IMU data for robustness.",
        formats: ["BVH", "MP4", "C3D"],
        links: {
            website: "https://cvssp.org/data/totalcapture/",
            paper: "https://arxiv.org/abs/1712.00713"
        },
        labels: ["Fusion", "IMU", "Challenging Poses"],
        categories: ["General", "Sports"],
        stats: { subjects: 5, motions: "1.9M Frames", fps: 60 }
    },
    {
        id: "3DPW",
        name: "3DPW",
        institution: "TU Darmstadt / MPI",
        license: "Research Only",
        year: 2018,
        dimension: "3D",
        method: "Hybrid (IMU + Video)",
        subjects: "Multi",
        description: "3D Poses in the Wild. The first dataset with accurate 3D ground truth in unconstrained outdoor scenarios using IMUs and hand-held cameras.",
        formats: ["PKL (Python)", "JPG", "OBJ"],
        links: {
            website: "https://virtualhumans.mpi-inf.mpg.de/3DPW/",
            paper: "https://virtualhumans.mpi-inf.mpg.de/3DPW/3DPW.pdf"
        },
        labels: ["Outdoor", "In-the-wild", "IMU"],
        categories: ["Wild", "Interaction"],
        stats: { subjects: 7, motions: "51k Frames", fps: 30 }
    },
    {
        id: "HEVA",
        name: "HumanEva",
        institution: "Brown University / MPI",
        license: "Research Only",
        year: 2010,
        dimension: "3D",
        method: "Marker + Video",
        subjects: "Single",
        description: "One of the classic datasets for evaluating articulated human motion and pose estimation. Synchronized video and motion capture.",
        formats: ["C3D", "AVI", "MAT"],
        links: {
            website: "http://humaneva.is.tue.mpg.de/",
            paper: "http://humaneva.is.tue.mpg.de/publications"
        },
        labels: ["Classic", "Evaluation", "Walking", "Jogging"],
        categories: ["General"],
        stats: { subjects: 4, motions: "40k Frames", fps: 60 }
    },
    {
        id: "IVAR",
        name: "InstaVariety",
        institution: "UC Berkeley",
        license: "Research Only",
        year: 2018,
        dimension: "2D",
        method: "Video (Instagram)",
        subjects: "Single",
        description: "Dataset collected from Instagram hashtags, focusing on diversity of motions and environments for training motion synthesis models.",
        formats: ["MP4", "JSON"],
        links: {
            website: "https://github.com/kanazawa/human_dynamics",
            paper: "https://arxiv.org/abs/1805.03758"
        },
        labels: ["Social Media", "Synthesis", "Diverse"],
        categories: ["Wild", "Daily Living"],
        stats: { subjects: "Various", motions: "28k clips", fps: "Var" }
    },
    {
        id: "PENN",
        name: "Penn Action",
        institution: "University of Pennsylvania",
        license: "Research Only",
        year: 2013,
        dimension: "2D",
        method: "Video",
        subjects: "Single",
        description: "Contains video sequences of various sports actions. Annotations include class labels and 13 joint coordinates.",
        formats: ["MAT", "JPG"],
        links: {
            website: "http://dreamdragon.github.io/PennAction/",
            paper: "https://openaccess.thecvf.com/content_iccv_2013/papers/Zhang_From_Actemes_to_2013_ICCV_paper.pdf"
        },
        labels: ["Sports", "Athletics", "Video Analysis"],
        categories: ["Sports"],
        stats: { subjects: "Various", motions: "2,326 Clips", fps: "Var" }
    },
    {
        id: "AVA1",
        name: "AVA",
        institution: "Google Research",
        license: "CC-BY 4.0",
        year: 2018,
        dimension: "2D",
        method: "Video",
        subjects: "Multi",
        description: "Atomic Visual Actions. Densely annotated video dataset of spatiotemporally localized actions from movies. Focuses on temporal localization.",
        formats: ["CSV", "Video URLs"],
        links: {
            website: "https://research.google.com/ava/",
            paper: "https://arxiv.org/abs/1705.08421"
        },
        labels: ["Action Detection", "Movies", "Temporal"],
        categories: ["Daily Living", "Interaction"],
        stats: { subjects: "Actors", motions: "430 Clips", fps: "24" }
    },
    {
        id: "SURE",
        name: "SURREAL",
        institution: "INRIA / Ecole Polytechnique",
        license: "Research Only",
        year: 2017,
        dimension: "3D",
        method: "Synthetic",
        subjects: "Single",
        description: "Synthetic hUmans foR REal-part Action recognition. Large-scale synthetic data generated using SMPL body models on background images.",
        formats: ["MP4", "MAT", "JPG"],
        links: {
            website: "https://www.di.ens.fr/willow/research/surreal/",
            paper: "https://www.di.ens.fr/willow/research/surreal/surreal_cvpr17.pdf"
        },
        labels: ["Synthetic", "Segmentation", "Depth"],
        categories: ["General"],
        stats: { subjects: 145, motions: "6M Frames", fps: "N/A" }
    },
    {
        id: "FASH",
        name: "DeepFashion",
        institution: "CUHK",
        license: "Research Only",
        year: 2016,
        dimension: "2D",
        method: "Image",
        subjects: "Single",
        description: "Large-scale fashion dataset with comprehensive annotations including clothing landmarks and attributes, useful for pose in fashion.",
        formats: ["JPG", "TXT"],
        links: {
            website: "https://mmlab.ie.cuhk.edu.hk/projects/DeepFashion.html",
            paper: "https://www.cv-foundation.org/openaccess/content_cvpr_2016/papers/Liu_DeepFashion_Powering_Robust_CVPR_2016_paper.pdf"
        },
        labels: ["Fashion", "Attributes", "Retail"],
        categories: ["Daily Living"],
        stats: { subjects: "Models", motions: "800k Images", fps: "N/A" }
    },
    {
        id: "HDM5",
        name: "MPI-HDM05",
        institution: "Max Planck Institute (MPI-INF)",
        license: "Research Only",
        year: 2007,
        dimension: "3D",
        method: "Marker (Vicon)",
        subjects: "Single",
        description: "Systematically recorded mocap data for 70+ motion classes. Designed for motion analysis, retrieval, and classification research.",
        formats: ["AMC/ASF", "C3D"],
        links: {
            website: "https://resources.mpi-inf.mpg.de/HDM05/",
            paper: "https://resources.mpi-inf.mpg.de/HDM05/07_MuRoClEbKrWe_HDM05.pdf"
        },
        labels: ["Retrieval", "Classification", "Locomotion"],
        categories: ["General", "Sports"],
        stats: { subjects: 5, motions: "1,500+", fps: 120 }
    },
    {
        id: "KIT1",
        name: "KIT Whole-Body Motion",
        institution: "Karlsruhe Institute of Technology (KIT)",
        license: "CC-BY 4.0",
        year: 2016,
        dimension: "3D",
        method: "Marker",
        subjects: "Single",
        description: "Large-scale whole-body motion database. Features a unified representation (MMM) and includes natural language descriptions for a subset (KIT-ML).",
        formats: ["XML (MMM)", "CSV"],
        links: {
            website: "https://motion-database.humanoids.kit.edu/",
            paper: "https://arxiv.org/abs/1607.03827"
        },
        labels: ["MMM", "Language", "Manipulation"],
        categories: ["General", "Daily Living"],
        stats: { subjects: "Various", motions: "4,000+", fps: 100 }
    },
    {
        id: "SFU1",
        name: "SFU Motion Capture",
        institution: "Simon Fraser University / NUS",
        license: "Research Only",
        year: 2011,
        dimension: "3D",
        method: "Marker (Vicon)",
        subjects: "Single",
        description: "Specialized dataset containing complex and dynamic motions often missing from other libraries, such as martial arts kicks, breakdancing, and weightlifting.",
        formats: ["AMC/ASF", "C3D"],
        links: {
            website: "https://mocap.cs.sfu.ca/",
            download: "https://mocap.cs.sfu.ca/descr.html"
        },
        labels: ["Martial Arts", "Dance", "Complex"],
        categories: ["Sports", "General"],
        stats: { subjects: "Various", motions: "High Quality", fps: 120 }
    },
    {
        id: "BMLM",
        name: "BMLmovi",
        institution: "York University (BioMotionLab)",
        license: "Research Only",
        year: 2021,
        dimension: "3D",
        method: "Marker + Video + IMU",
        subjects: "Single",
        description: "A large multipurpose dataset with synchronized pose, body meshes, and video. Designed for lifting (2D to 3D) and gait analysis research.",
        formats: ["F (Matlab)", "SMPL", "MP4"],
        links: {
            website: "https://www.biomotionlab.ca/movi/",
            paper: "https://arxiv.org/abs/2105.07166"
        },
        labels: ["Gait", "Lifting", "Biomechanics"],
        categories: ["General", "Sports"],
        stats: { subjects: 90, motions: "High Volume", fps: 120 }
    },
    {
        id: "3DHP",
        name: "MPI-INF-3DHP",
        institution: "Max Planck Institute (MPI-INF)",
        license: "Research Only",
        year: 2017,
        dimension: "3D",
        method: "Markerless Multi-view",
        subjects: "Single",
        description: "A dataset capturing 3D human pose in both indoor and outdoor settings using a markerless system. Includes green-screen data for augmentation.",
        formats: ["BVH", "MAT", "MP4"],
        links: {
            website: "https://gvvperfcapeva.mpi-inf.mpg.de/mpi-inf-3dhp/",
            paper: "https://arxiv.org/abs/1611.09813"
        },
        labels: ["Markerless", "Green Screen", "Outdoor"],
        categories: ["General", "Wild"],
        stats: { subjects: 8, motions: "1.3M Frames", fps: 50 }
    },
    {
        id: "DIP1",
        name: "DIP-IMU",
        institution: "ETH Zurich / MPI-IS",
        license: "Research Only",
        year: 2018,
        dimension: "3D",
        method: "IMU (Inertial)",
        subjects: "Single",
        description: "Deep Inertial Poser dataset. Contains raw IMU data (17 sensors) paired with ground truth poses to train sparse (6 sensor) tracking models.",
        formats: ["PKL", "SMPL"],
        links: {
            website: "https://dip.is.tuebingen.mpg.de/",
            paper: "https://arxiv.org/abs/1810.04703"
        },
        labels: ["Inertial", "Sparse", "Mobile"],
        categories: ["General"],
        stats: { subjects: 10, motions: "90 min", fps: 60 }
    },
    {
        id: "RWH1",
        name: "RealWorld (HAR)",
        institution: "University of Mannheim",
        license: "Research Only",
        year: 2016,
        dimension: "3D",
        method: "IMU (Smartphone)",
        subjects: "Single",
        description: "Human Activity Recognition dataset collected from smartphones and wearables in real-world settings (walking, running, climbing stairs).",
        formats: ["CSV"],
        links: {
            website: "https://www.uni-mannheim.de/dws/research/projects/activity-recognition/dataset/dataset-realworld/",
            paper: "https://arxiv.org/abs/1706.07796"
        },
        labels: ["HAR", "Smartphone", "Wearable"],
        categories: ["Daily Living", "Wild"],
        stats: { subjects: 15, motions: "High Volume", fps: 50 }
    },
    {
        id: "HSC3",
        name: "HumanSC3D",
        institution: "IMAR (Romania)",
        license: "Academic Use Only",
        year: 2021,
        dimension: "3D",
        method: "Marker + Video",
        subjects: "Single",
        description: "Focused on human self-contact (e.g., touching face, crossing arms). Provides ground truth contact signatures for fine-grained analysis.",
        formats: ["SMPL", "JPG"],
        links: {
            website: "https://sc3d.imar.ro/",
            paper: "https://arxiv.org/abs/2012.14690"
        },
        labels: ["Self-Contact", "Fine-grained"],
        categories: ["General"],
        stats: { subjects: 6, motions: "1,032 Seqs", fps: "N/A" }
    },
    {
        id: "CHI3",
        name: "CHI3D",
        institution: "IMAR (Romania)",
        license: "Academic Use Only",
        year: 2020,
        dimension: "3D",
        method: "Marker + Video",
        subjects: "Multi",
        description: "Close Human Interactions 3D. A lab-based dataset specifically capturing contact events (hugging, pushing) with accurate ground truth.",
        formats: ["SMPL", "JPG"],
        links: {
            website: "https://ci3d.imar.ro/chi3d",
            paper: "https://arxiv.org/abs/2008.12702"
        },
        labels: ["Contact", "Close Interaction"],
        categories: ["Interaction"],
        stats: { subjects: 6, motions: "631 Seqs", fps: "N/A" }
    },
    {
        id: "EXPI",
        name: "ExPI",
        institution: "Inria",
        license: "Research Only",
        year: 2022,
        dimension: "3D",
        method: "Multi-view RGB",
        subjects: "Multi",
        description: "Extreme Pose Interaction. Captures professional Lindy Hop dancers performing acrobatic moves with severe occlusion and complex contact.",
        formats: ["OBJ", "MP4"],
        links: {
            website: "https://team.inria.fr/robotlearn/research/expi-dataset/",
            paper: "https://arxiv.org/abs/2108.08673"
        },
        labels: ["Dance", "Occlusion", "Acrobatic"],
        categories: ["Sports", "Interaction"],
        stats: { subjects: 4, motions: "30k Frames", fps: 25 }
    },
    {
        id: "HI4D",
        name: "Hi4D",
        institution: "ETH Zurich",
        license: "Research Only",
        year: 2023,
        dimension: "3D",
        method: "4D Scanner",
        subjects: "Multi",
        description: "Humans interacting in 4D. High-fidelity 4D textured scans of close human interactions, focused on disentangling meshes during contact.",
        formats: ["OBJ", "MP4"],
        links: {
            website: "https://hi4d.ait.ethz.ch/",
            paper: "https://arxiv.org/abs/2303.11183"
        },
        labels: ["4D", "Texture", "Contact"],
        categories: ["Interaction"],
        stats: { subjects: 40, motions: "11k Frames", fps: "N/A" }
    },
    {
        id: "INTH",
        name: "InterHuman",
        institution: "ShanghaiTech / HKU",
        license: "Research Only",
        year: 2023,
        dimension: "3D",
        method: "Multi-view RGB",
        subjects: "Multi",
        description: "A large-scale dataset for language-guided human interaction generation. Contains 107M frames of interaction with text descriptions.",
        formats: ["SMPL", "TXT"],
        links: {
            website: "https://tr3e.github.io/intergen-page/",
            paper: "https://arxiv.org/abs/2304.05684"
        },
        labels: ["Generative", "Language", "Interaction"],
        categories: ["Interaction"],
        stats: { subjects: "Various", motions: "107M Frames", fps: 30 }
    },
    {
        id: "BHAV",
        name: "BEHAVE",
        institution: "Max Planck Institute (MPI-INF)",
        license: "Research Only",
        year: 2022,
        dimension: "3D",
        method: "Kinect (RGB-D)",
        subjects: "Single",
        description: "Full body human-object interactions in natural environments. Tracks both the human (SMPL) and the object (Mesh) simultaneously.",
        formats: ["SMPL", "OBJ", "RGB-D"],
        links: {
            website: "https://virtualhumans.mpi-inf.mpg.de/behave/",
            paper: "https://arxiv.org/abs/2204.06950"
        },
        labels: ["HOI", "Object Tracking"],
        categories: ["Interaction"],
        stats: { subjects: 8, motions: "15k Frames", fps: 30 }
    },
    {
        id: "GRAB",
        name: "GRAB",
        institution: "Max Planck Institute (MPI-IS)",
        license: "Research Only",
        year: 2020,
        dimension: "3D",
        method: "Marker (MoSh++)",
        subjects: "Single",
        description: "GRasping Actions with Bodies. Captures full-body motion and finger articulation while interacting with various 3D objects.",
        formats: ["SMPL-X", "OBJ"],
        links: {
            website: "https://grab.is.tuebingen.mpg.de/",
            paper: "https://arxiv.org/abs/2008.11200"
        },
        labels: ["Grasping", "Hands", "HOI"],
        categories: ["Interaction", "Hands/Face"],
        stats: { subjects: 10, motions: "1.6M Frames", fps: 120 }
    },
    {
        id: "PROX",
        name: "PROX",
        institution: "Max Planck Institute (MPI-IS)",
        license: "Research Only",
        year: 2019,
        dimension: "3D",
        method: "Kinect + Scanner",
        subjects: "Single",
        description: "Proximal Relationships with Object eXclusion. Qualitative dataset of people interacting with static 3D scenes (sitting on sofas, etc).",
        formats: ["SMPL-X", "PLY"],
        links: {
            website: "https://prox.is.tue.mpg.de/",
            paper: "https://arxiv.org/abs/1908.06963"
        },
        labels: ["Scene", "Interaction", "Indoor"],
        categories: ["Interaction", "Daily Living"],
        stats: { subjects: 20, motions: "100k Frames", fps: 30 }
    },
    {
        id: "GIMO",
        name: "GIMO",
        institution: "Stanford University",
        license: "Research Only",
        year: 2022,
        dimension: "3D",
        method: "IMU + Eye Tracker",
        subjects: "Single",
        description: "Gaze and Indoor MOtion. Captures ego-centric video, eye gaze, and body motion to study how human intent (gaze) drives movement.",
        formats: ["MP4", "CSV", "PLY"],
        links: {
            website: "https://geometry.stanford.edu/projects/gimo/",
            paper: "https://arxiv.org/abs/2204.09315"
        },
        labels: ["Egocentric", "Gaze", "Indoor"],
        categories: ["Egocentric", "Daily Living"],
        stats: { subjects: "Various", motions: "High", fps: "N/A" }
    },
    {
        id: "EGBD",
        name: "EgoBody",
        institution: "ETH Zurich",
        license: "CC-BY 4.0",
        year: 2022,
        dimension: "3D",
        method: "Kinect + HoloLens",
        subjects: "Multi",
        description: "Captures social interactions from an egocentric perspective (HoloLens) with accurate 3D ground truth from external Kinects.",
        formats: ["SMPL", "MP4"],
        links: {
            website: "https://egobody.inf.ethz.ch/",
            paper: "https://arxiv.org/abs/2112.07642"
        },
        labels: ["Egocentric", "Social", "HoloLens"],
        categories: ["Egocentric", "Interaction"],
        stats: { subjects: 36, motions: "125 Seqs", fps: 30 }
    },
    {
        id: "HML3",
        name: "HumanML3D",
        institution: "Various (Aggregated)",
        license: "Public / Free (Commercial Allowed)",
        year: 2022,
        dimension: "3D",
        method: "Aggregated (AMASS + KIT)",
        subjects: "Single",
        description: "Standard dataset for text-to-motion generation. Contains 14k+ motions re-targeted from AMASS with fine-grained text descriptions.",
        formats: ["TXT"],
        links: {
            website: "https://github.com/EricGuo5513/HumanML3D",
            paper: "https://arxiv.org/abs/2203.01997"
        },
        labels: ["Generative", "Language", "Text-to-Motion"],
        categories: ["General"],
        stats: { subjects: "Various", motions: "14,616", fps: 20 }
    },
    {
        id: "MOTX",
        name: "Motion-X",
        institution: "IDEA Research",
        license: "Research Only",
        year: 2023,
        dimension: "3D",
        method: "Video (SMPL-X Fitting)",
        subjects: "Single",
        description: "Large-scale expressive whole-body motion dataset. Includes face expressions, hand gestures, and text labels extracted from massive online videos.",
        formats: ["SMPL-X", "TXT"],
        links: {
            website: "https://motion-x-dataset.github.io/",
            paper: "https://arxiv.org/abs/2307.00818"
        },
        labels: ["Expressive", "Face", "Hand"],
        categories: ["General", "Daily Living", "Interaction"],
        stats: { subjects: "Thousands", motions: "15.6M Frames", fps: 30 }
    },
    {
        id: "SLOP",
        name: "SLOPER4D",
        institution: "Peking University",
        license: "Research Only",
        year: 2023,
        dimension: "3D",
        method: "Lidar + IMU (Wearable)",
        subjects: "Single",
        description: "Scene-Aware Lidar-based Outdoor Pose Estimation. Captures global human trajectories in large urban scenes (up to 30k m²).",
        formats: ["PKL", "PCD"],
        links: {
            website: "http://www.lidarhumanmotion.net/data-sloper4d/",
            paper: "https://arxiv.org/abs/2303.09095"
        },
        labels: ["Lidar", "Outdoor", "Global"],
        categories: ["Wild"],
        stats: { subjects: 12, motions: "100k Frames", fps: 20 }
    },
    {
        id: "IEMO",
        name: "IEMOCAP",
        institution: "USC (SAIL)",
        license: "Research Only",
        year: 2008,
        dimension: "3D",
        method: "Marker + Video",
        subjects: "Multi",
        description: "Interactive Emotional Dyadic Motion Capture. Actors perform scripted and improvised scenarios to elicit authentic emotions.",
        formats: ["BVH", "WAV", "AVI"],
        links: {
            website: "https://sail.usc.edu/iemocap/",
            paper: "https://sail.usc.edu/publications/files/Busso_2008_IEMOCAP.pdf"
        },
        labels: ["Emotion", "Speech", "Dyadic"],
        categories: ["Expressive", "Interaction"],
        stats: { subjects: 10, motions: "12 Hours", fps: "N/A" }
    },
    {
        id: "BNDA",
        name: "Bandai Namco Motion",
        institution: "Bandai Namco Research",
        license: "Research Only",
        year: 2022,
        dimension: "3D",
        method: "Marker (Vicon)",
        subjects: "Single",
        description: "High-quality dataset for style transfer. Contains actions like walking/running performed in different styles (active, tired, happy, etc.).",
        formats: ["BVH"],
        links: {
            website: "https://github.com/BandaiNamcoResearchInc/Bandai-Namco-Research-Motiondataset",
            paper: "https://arxiv.org/abs/2306.08861"
        },
        labels: ["Style", "Locomotion", "Game"],
        categories: ["Expressive", "General"],
        stats: { subjects: 3, motions: "400k Frames", fps: "N/A" }
    },
    {
        id: "PTRK",
        name: "PoseTrack",
        institution: "MPI-INF",
        license: "Research Only",
        year: 2018,
        dimension: "2D",
        method: "Video / Manual Annotation",
        subjects: "Multi",
        description: "Large-scale benchmark for multi-person pose estimation and tracking in video. Focuses on articulated tracking in crowded scenes.",
        formats: ["JSON", "JPG"],
        links: {
            website: "https://github.com/anDoer/PoseTrack21",
            paper: "https://arxiv.org/abs/1710.10000"
        },
        labels: ["Tracking", "Benchmark", "Crowd"],
        categories: ["Wild", "Sports"],
        stats: { subjects: "Many", motions: "1,356 Videos", fps: "Var" }
    },
    {
        id: "CRWD",
        name: "CrowdHuman",
        institution: "Megvii / Face++",
        license: "CC-BY 4.0",
        year: 2018,
        dimension: "2D",
        method: "Image / Manual Annotation",
        subjects: "Crowd",
        description: "Benchmark for detecting humans in crowded scenarios. Features high-density crowds and severe occlusion.",
        formats: ["JSON", "JPG"],
        links: {
            website: "https://www.crowdhuman.org/",
            paper: "https://arxiv.org/abs/1805.00123"
        },
        labels: ["Detection", "Crowd", "Occlusion"],
        categories: ["Wild"],
        stats: { subjects: "470k", motions: "Static", fps: "N/A" }
    },
    {
        id: "MUPT",
        name: "MuPoTS-3D",
        institution: "Max Planck Institute (MPI-INF)",
        license: "Research Only",
        year: 2018,
        dimension: "3D",
        method: "Markerless Multi-view",
        subjects: "Multi",
        description: "Multi-Person Test Set. A benchmark for 3D multi-person pose estimation in both indoor and outdoor scenes.",
        formats: ["MAT", "JPG"],
        links: {
            website: "https://projects.mpi-inf.mpg.de/datasets/mupots-3d/",
            paper: "https://arxiv.org/abs/1611.09813"
        },
        labels: ["Benchmark", "Multi-view", "Outdoor"],
        categories: ["Wild"],
        stats: { subjects: 8, motions: "20 Seqs", fps: "Var" }
    },
    {
        id: "OAKI",
        name: "OakInk",
        institution: "Shanghai Jiao Tong University (SJTU)",
        license: "CC-BY 4.0",
        year: 2022,
        dimension: "3D",
        method: "Marker + Video",
        subjects: "Single",
        description: "Large-scale knowledge base for hand-object interaction. Links object affordances (Oak) with human interaction intents (Ink).",
        formats: ["PKL", "OBJ"],
        links: {
            website: "https://oakink.net/",
            paper: "https://arxiv.org/abs/2203.15709"
        },
        labels: ["Hands", "Object Interaction", "Affordance"],
        categories: ["Hands/Face", "Interaction"],
        stats: { subjects: 12, motions: "50k Interactions", fps: "N/A" }
    },
    {
        id: "ARCT",
        name: "ARCTIC",
        institution: "ETH Zurich / MPI-IS",
        license: "Research Only",
        year: 2023,
        dimension: "3D",
        method: "Marker (Vicon)",
        subjects: "Single",
        description: "Dataset for dexterous bimanual manipulation of articulated objects (e.g., laptops, scissors). Accurate hand and object meshes.",
        formats: ["SMPL-X", "OBJ"],
        links: {
            website: "https://arctic.is.tue.mpg.de/",
            paper: "https://arxiv.org/abs/2304.01261"
        },
        labels: ["Dexterous", "Hands", "Manipulation"],
        categories: ["Hands/Face", "Interaction"],
        stats: { subjects: 10, motions: "2.1M Frames", fps: 120 }
    },
    {
        id: "HOTO",
        name: "HUMOTO",
        institution: "UT Austin / Adobe",
        license: "Research Only",
        year: 2024,
        dimension: "3D",
        method: "Hybrid (Sensor + Camera)",
        subjects: "Single",
        description: "High-fidelity 4D human-object interaction dataset. Features complex, multi-stage tasks (e.g. cooking) guided by LLM-generated scripts.",
        formats: ["SMPL-X", "MP4"],
        links: {
            website: "https://jiaxin-lu.github.io/humoto/",
            paper: "https://arxiv.org/abs/2405.10414"
        },
        labels: ["HOI", "Task-oriented", "Kitchen"],
        categories: ["Interaction", "Daily Living"],
        stats: { subjects: "N/A", motions: "735 Seqs", fps: 30 }
    },
    {
        id: "OMOM",
        name: "OMOMO",
        institution: "Peking University / BIGAI",
        license: "Research Only",
        year: 2023,
        dimension: "3D",
        method: "Mocap",
        subjects: "Single",
        description: "Object Motion guided Human Motion. Focuses on large object manipulation (chairs, tables) and inferring body pose from object trajectory.",
        formats: ["SMPL-X", "BVH"],
        links: {
            website: "https://arxiv.org/abs/2309.16237",
            paper: "https://arxiv.org/abs/2309.16237"
        },
        labels: ["HOI", "Generative", "Large Objects"],
        categories: ["Interaction"],
        stats: { subjects: "N/A", motions: "10 Hours", fps: "N/A" }
    },
    {
        id: "BEDL",
        name: "BEDLAM",
        institution: "Max Planck Institute (MPI-IS)",
        license: "Research Only",
        year: 2023,
        dimension: "3D",
        method: "Synthetic",
        subjects: "Multi",
        description: "Bodies Exhibiting Detailed Lifelike Animated Motion. A large synthetic dataset with realistic clothing simulation for training pose estimators.",
        formats: ["SMPL-X", "PNG", "MP4"],
        links: {
            website: "https://bedlam.is.tue.mpg.de/",
            paper: "https://arxiv.org/abs/2303.00816"
        },
        labels: ["Synthetic", "Clothing", "Realism"],
        categories: ["General"],
        stats: { subjects: "271 (Avatar)", motions: "10k Seqs", fps: 30 }
    },
    {
        id: "AGOR",
        name: "AGORA",
        institution: "Max Planck Institute (MPI-IS)",
        license: "Research Only",
        year: 2021,
        dimension: "3D",
        method: "Synthetic",
        subjects: "Crowd",
        description: "Avatars in Geography Optimized for Regression Analysis. High-realism synthetic images of crowds with ground truth 3D pose and shape.",
        formats: ["SMPL-X", "PNG"],
        links: {
            website: "https://agora.is.tue.mpg.de/",
            paper: "https://arxiv.org/abs/2104.14638"
        },
        labels: ["Synthetic", "Evaluation", "Crowd"],
        categories: ["Wild"],
        stats: { subjects: "350+ (Avatar)", motions: "14k Images", fps: "N/A" }
    },
    {
        id: "HUMN",
        name: "HuMMan",
        institution: "SenseTime / NTU",
        license: "Research Only",
        year: 2022,
        dimension: "3D",
        method: "Multi-modal (RGBD + Phone)",
        subjects: "Single",
        description: "Large-scale multi-modal 4D human dataset. Uniquely includes data captured from mobile devices (LiDAR/Phone) alongside professional sensors.",
        formats: ["SMPL", "Point Cloud"],
        links: {
            website: "https://caizhongang.github.io/projects/HuMMan/",
            paper: "https://arxiv.org/abs/2204.13686"
        },
        labels: ["Mobile", "Multi-modal", "4D"],
        categories: ["General"],
        stats: { subjects: 1000, motions: "60M Frames", fps: "Var" }
    },
    {
        id: "HACT",
        name: "HumanAct12",
        institution: "N/A (Derived)",
        license: "Public / Free (Commercial Allowed)",
        year: 2020,
        dimension: "3D",
        method: "Derived (from PHSPD)",
        subjects: "Single",
        description: "A clean dataset for action generation, derived from the PHSPD dataset. Categorizes motion into 12 distinct action classes.",
        formats: ["NPY"],
        links: {
            website: "https://github.com/EricGuo5513/action-to-motion",
            paper: "https://arxiv.org/abs/2007.13886"
        },
        labels: ["Action Generation", "Classified"],
        categories: ["General"],
        stats: { subjects: "N/A", motions: "1,191 Clips", fps: "N/A" }
    },
    {
        id: "ASSM",
        name: "AssemblyHands",
        institution: "Meta / Facebook Research",
        license: "CC-BY 4.0",
        year: 2023,
        dimension: "3D",
        method: "Egocentric Video",
        subjects: "Single",
        description: "Large-scale benchmark for egocentric hand-object interaction during assembly tasks. High-quality 3D hand pose annotations.",
        formats: ["JPG", "TXT"],
        links: {
            website: "https://assemblyhands.github.io/",
            paper: "https://arxiv.org/abs/2304.06734"
        },
        labels: ["Hands", "Egocentric", "Assembly"],
        categories: ["Egocentric", "Hands/Face", "Interaction"],
        stats: { subjects: "N/A", motions: "3.0M Images", fps: "N/A" }
    },
    {
        id: "H2O1",
        name: "H2O",
        institution: "ETH Zurich",
        license: "Research Only",
        year: 2021,
        dimension: "3D",
        method: "Multi-view RGB-D",
        subjects: "Single",
        description: "2 Hands and Objects. Egocentric interaction recognition dataset with full 3D pose of two hands and 6D object pose.",
        formats: ["RGB-D", "TXT"],
        links: {
            website: "https://taeinkwon.com/projects/h2o/",
            paper: "https://arxiv.org/abs/2106.13437"
        },
        labels: ["Egocentric", "Hands", "HOI"],
        categories: ["Egocentric", "Hands/Face", "Interaction"],
        stats: { subjects: 4, motions: "570k Frames", fps: 30 }
    },
    {
        id: "IDNC",
        name: "InterDance",
        institution: "Tsinghua University",
        license: "Academic Use Only",
        year: 2024,
        dimension: "3D",
        method: "Marker (Vicon)",
        subjects: "Multi",
        description: "High-quality duet dance dataset. Focuses on complex interactions and physical contact between two professional dancers.",
        formats: ["BVH", "MP4"],
        links: {
            website: "https://inter-dance.github.io/",
            paper: "https://arxiv.org/abs/2312.16982"
        },
        labels: ["Dance", "Duet", "Contact"],
        categories: ["Sports", "Interaction"],
        stats: { subjects: "Pairs", motions: "3.9 Hours", fps: "N/A" }
    },
    {
        id: "SYNB",
        name: "SynBody",
        institution: "Shanghai AI Lab",
        license: "Research Only",
        year: 2023,
        dimension: "3D",
        method: "Synthetic",
        subjects: "Multi",
        description: "Large-scale synthetic dataset with layered human models (body, clothing) to support human mesh recovery and neural rendering.",
        formats: ["SMPL-X", "PNG"],
        links: {
            website: "https://github.com/SynBody/SynBody",
            paper: "https://arxiv.org/abs/2303.17368"
        },
        labels: ["Synthetic", "Layered", "Clothing"],
        categories: ["General"],
        stats: { subjects: "10,000 (Avatar)", motions: "1.2M Frames", fps: "N/A" }
    },
    {
        id: "DNAR",
        name: "DNA-Rendering",
        institution: "Shanghai AI Lab / SenseTime",
        license: "Research Only",
        year: 2023,
        dimension: "3D",
        method: "Multi-view (60 cameras)",
        subjects: "Single",
        description: "Diverse Neural Actor Repository. High-fidelity 4D scans for neural rendering, capturing varied clothing, accessories, and motions.",
        formats: ["OBJ", "JPG"],
        links: {
            website: "https://dna-rendering.github.io/",
            paper: "https://arxiv.org/abs/2307.10173"
        },
        labels: ["Rendering", "4D", "High-Fidelity"],
        categories: ["General"],
        stats: { subjects: 1500, motions: "67.5M Frames", fps: 15 }
    },
    {
        id: "GTIM",
        name: "GTA-IM",
        institution: "Nanjing University / UC Berkeley",
        license: "Research Only",
        year: 2020,
        dimension: "3D",
        method: "Synthetic (GTA V)",
        subjects: "Single",
        description: "GTA Indoor Motion. Exploits the GTA V game engine to collect human-scene interactions in realistic indoor environments.",
        formats: ["JPG", "TXT"],
        links: {
            website: "https://github.com/ZheC/GTA-IM-Dataset",
            paper: "https://arxiv.org/abs/2005.12239"
        },
        labels: ["Indoor", "Synthetic", "HOI"],
        categories: ["Daily Living"],
        stats: { subjects: "Various", motions: "1M Frames", fps: "N/A" }
    },
    {
        id: "WIP1",
        name: "WIP / UIP-DB",
        institution: "ETH Zurich (SIPLab)",
        license: "Research Only",
        year: 2023,
        dimension: "3D",
        method: "IMU + UWB",
        subjects: "Single",
        description: "Wearable Inertial Poser. Combines IMUs with Ultra-Wideband ranging to prevent drift in long-term capture.",
        formats: ["CSV"],
        links: {
            website: "https://siplab.org/projects/UltraInertialPoser",
            paper: "https://arxiv.org/abs/2205.02279"
        },
        labels: ["Inertial", "UWB", "Drift-free"],
        categories: ["General"],
        stats: { subjects: 10, motions: "200 Min", fps: 60 }
    },
    {
        id: "REMO",
        name: "ReMoCap",
        institution: "Zhejiang University / DFKI",
        license: "CC-BY 4.0",
        year: 2024,
        dimension: "3D",
        method: "Multi-view",
        subjects: "Multi",
        description: "Dataset for disentangled representation learning of interacting humans. Focuses on handling occlusion in social interactions.",
        formats: ["SMPL", "MP4"],
        links: {
            website: "https://wanghongsheng01.github.io/RemoCap/",
            paper: "https://arxiv.org/abs/2405.12724"
        },
        labels: ["Interaction", "Disentanglement"],
        categories: ["Interaction"],
        stats: { subjects: "N/A", motions: "Various", fps: "N/A" }
    },
    {
        id: "JRDB",
        name: "JRDB-Pose",
        institution: "Monash University / Stanford",
        license: "Research Only",
        year: 2022,
        dimension: "3D",
        method: "Robot (RGB + Lidar)",
        subjects: "Crowd",
        description: "Large-scale dataset captured from a mobile social robot navigating university campuses. Crucial for pedestrian tracking and forecasting.",
        formats: ["JSON", "PCD", "JPG"],
        links: {
            website: "https://jrdb.erc.monash.edu/",
            paper: "https://arxiv.org/abs/2210.11940"
        },
        labels: ["Robotics", "Pedestrian", "Navigation"],
        categories: ["Wild", "Interaction"],
        stats: { subjects: "Thousands", motions: "600k Poses", fps: 15 }
    },
    {
        id: "SBUK",
        name: "SBU Kinect",
        institution: "Stony Brook University",
        license: "Research Only",
        year: 2012,
        dimension: "3D",
        method: "Kinect v1",
        subjects: "Multi",
        description: "Early RGB-D dataset focusing on two-person interactions (shaking hands, hugging, kicking, punching).",
        formats: ["TXT"],
        links: {
            website: "https://www.cs.unc.edu/~suhit/kinect_dataset.html",
            paper: "https://www3.cs.stonybrook.edu/~kiwon/Papers/CVPRW12_Yun.pdf"
        },
        labels: ["Interaction", "Action Recognition"],
        categories: ["Interaction"],
        stats: { subjects: 7, motions: "300 Clips", fps: 15 }
    },
    {
        id: "U2ME",
        name: "You2Me",
        institution: "UT Austin",
        license: "Research Only",
        year: 2020,
        dimension: "3D",
        method: "Egocentric + Kinect",
        subjects: "Multi",
        description: "Inferring body pose in egocentric video via interactions. Leverages the visible partner's pose to infer the camera wearer's pose.",
        formats: ["MP4", "JSON"],
        links: {
            website: "https://vision.cs.utexas.edu/projects/you2me/",
            paper: "https://arxiv.org/abs/1904.09882"
        },
        labels: ["Egocentric", "Interaction", "Inference"],
        categories: ["Egocentric", "Interaction"],
        stats: { subjects: 10, motions: "42 Clips", fps: "N/A" }
    },
    {
        id: "GTAC",
        name: "GTA Combat",
        institution: "N/A (Liang Xu et al.)",
        license: "Research Only",
        year: 2023,
        dimension: "3D",
        method: "Synthetic (GTA V)",
        subjects: "Multi",
        description: "Synthetic dataset focusing on multi-person combat behaviors extracted from the GTA V engine to facilitate interaction generation.",
        formats: ["NPY", "MP4"],
        links: {
            website: "https://liangxuy.github.io/actformer/",
            paper: "https://arxiv.org/abs/2203.07686"
        },
        labels: ["Combat", "Synthetic", "Interaction"],
        categories: ["Interaction", "Sports"],
        stats: { subjects: "2-5 per clip", motions: "7k Seqs", fps: "N/A" }
    },
    {
        id: "UEST",
        name: "UESTC RGB-D",
        institution: "UESTC",
        license: "Research Only",
        year: 2018,
        dimension: "3D",
        method: "Kinect v2",
        subjects: "Single",
        description: "Large-scale varying-view RGB-D action dataset. Contains 40 categories of aerobic exercises captured from 8 viewpoints.",
        formats: ["TXT", "AVI"],
        links: {
            website: "https://github.com/Hwang64/UESTC-RGBD-Varying-view-Action-Database",
            paper: "https://ieeexplore.ieee.org/document/8403257"
        },
        labels: ["Exercise", "Multi-view", "RGB-D"],
        categories: ["Sports", "General"],
        stats: { subjects: 118, motions: "25k Samples", fps: 30 }
    },
    {
        id: "CMUP",
        name: "CMU Panoptic",
        institution: "Carnegie Mellon University",
        license: "Research Only",
        year: 2016,
        dimension: "3D",
        method: "Massive Multi-view",
        subjects: "Crowd",
        description: "Captured inside a geodesic dome with 480 VGA cameras and 31 HD cameras. Unprecedented density for social interaction capture.",
        formats: ["JSON", "MP4"],
        links: {
            website: "http://domedb.perception.cs.cmu.edu/",
            paper: "http://domedb.perception.cs.cmu.edu/papers/joo_iccv_2015.pdf"
        },
        labels: ["Dense", "Social", "Dome"],
        categories: ["Interaction", "Daily Living"],
        stats: { subjects: "Groups", motions: "5.5 Hours", fps: 30 }
    },
    {
        id: "BMLR",
        name: "BMLrub",
        institution: "York University (BioMotionLab)",
        license: "Research Only",
        year: 2021,
        dimension: "3D",
        method: "Marker (Optical)",
        subjects: "Single",
        description: "Focused on biological motion perception, trotting, and walking. captures cues used to identify gender, emotion, and weight from point-lights.",
        formats: ["C3D", "MP4"],
        links: {
            website: "https://www.biomotionlab.ca/databases/",
            paper: "https://www.biomotionlab.ca/databases/"
        },
        labels: ["Perception", "Psychophysics", "Gait"],
        categories: ["General", "Daily Living"],
        stats: { subjects: "Various", motions: "Walk/Trot", fps: "N/A" }
    },
    {
        id: "ACCD",
        name: "ACCAD",
        institution: "Ohio State University",
        license: "Research Only",
        year: 2010,
        dimension: "3D",
        method: "Marker (Optical)",
        subjects: "Single",
        description: "Focuses on artistic and expressive capabilities of human motion, including mime, modern dance, and stylized walks.",
        formats: ["BVH", "C3D"],
        links: {
            website: "https://accad.osu.edu/research/motion-lab",
            download: "https://accad.osu.edu/research/motion-lab"
        },
        labels: ["Arts", "Dance", "Mime"],
        categories: ["Expressive", "Sports"],
        stats: { subjects: "Various", motions: "Performative", fps: "N/A" }
    },
    {
        id: "INTX",
        name: "Inter-X",
        institution: "ShanghaiTech",
        license: "Research Only",
        year: 2024,
        dimension: "3D",
        method: "Multi-view",
        subjects: "Multi",
        description: "Expands on InterHuman with semantic labels for high-quality social interactions, designed for generative models.",
        formats: ["SMPL", "TXT"],
        links: {
            website: "https://github.com/liangxuy/awesome-human-human-interaction",
            paper: "https://arxiv.org/abs/2304.05684"
        },
        labels: ["Interaction", "Language", "Semantic"],
        categories: ["Interaction"],
        stats: { subjects: "Various", motions: "Large Scale", fps: "30" }
    },
    {
        id: "HM4D",
        name: "Harmony4D",
        institution: "Various",
        license: "Research Only",
        year: 2024,
        dimension: "3D",
        method: "Multi-view",
        subjects: "Multi",
        description: "In-the-wild dataset focusing on unchoreographed, dynamic contact sports like wrestling and MMA to solve occlusion problems.",
        formats: ["MP4", "SMPL"],
        links: {
            website: "https://papers.nips.cc/paper_files/paper/2024/hash/c20b843d0c6b1b40a8e6eb9a44e719c9-Abstract-Datasets_and_Benchmarks_Track.html",
            paper: "https://papers.nips.cc/paper_files/paper/2024/file/c20b843d0c6b1b40a8e6eb9a44e719c9-Paper-Datasets_and_Benchmarks_Track.pdf"
        },
        labels: ["Combat", "Sports", "Contact"],
        categories: ["Sports", "Interaction"],
        stats: { subjects: "Multi", motions: "Millions", fps: "N/A" }
    },
    {
        id: "UEMO",
        name: "UniEgoMotion",
        institution: "Various",
        license: "Research Only",
        year: 2025,
        dimension: "3D",
        method: "Egocentric",
        subjects: "Single",
        description: "Designed for generating full-body motion from a single egocentric camera view, bridging the gap between first-person vision and body dynamics.",
        formats: ["SMPL", "MP4"],
        links: {
            website: "https://arxiv.org/abs/2508.01126",
            paper: "https://arxiv.org/abs/2508.01126"
        },
        labels: ["Egocentric", "Generative", "Vision"],
        categories: ["Egocentric", "General"],
        stats: { subjects: "Various", motions: "Various", fps: "N/A" }
    },
    {
        id: "BABL",
        name: "BABEL",
        institution: "Max Planck Institute (MPI-IS)",
        license: "Research Only",
        year: 2021,
        dimension: "3D",
        method: "Annotation (AMASS)",
        subjects: "Single",
        description: "A semantic layer for AMASS providing dense, frame-level action labels for over 43 hours of motion. Critical for action recognition.",
        formats: ["JSON", "TXT"],
        links: {
            website: "https://babel.is.tue.mpg.de/",
            paper: "https://arxiv.org/abs/2106.09696"
        },
        labels: ["Semantic", "Fine-grained", "Dense"],
        categories: ["Egocentric", "Hands/Face"],
        stats: { subjects: "N/A", motions: "43 Hours", fps: "Var" }
    },
    {
        id: "EMLY",
        name: "Emilya",
        institution: "Telecom ParisTech",
        license: "Research Only",
        year: 2014,
        dimension: "3D",
        method: "Marker (Optical)",
        subjects: "Single",
        description: "Emotional body expression in daily actions. 11 actors perform actions like walking or sitting with 8 specific emotions (joy, anger, panic, etc).",
        formats: ["BVH", "C3D"],
        links: {
            website: "https://www.semanticscholar.org/paper/Emilya%3A-Emotional-body-expression-in-daily-actions-Fourati-Pelachaud/7340432d9298d936507257f3d8a66ddd8b80abd8",
            paper: "https://www.semanticscholar.org/paper/Emilya%3A-Emotional-body-expression-in-daily-actions-Fourati-Pelachaud/7340432d9298d936507257f3d8a66ddd8b80abd8"
        },
        labels: ["Emotion", "Expressive", "Style"],
        categories: ["Expressive", "Daily Living"],
        stats: { subjects: 11, motions: "Emotional", fps: "N/A" }
    },
    {
        id: "DIEM",
        name: "DIEM-A",
        institution: "Tohoku University (RIEC)",
        license: "Academic Use Only",
        year: 2025,
        dimension: "3D",
        method: "Marker (Optical)",
        subjects: "Single",
        description: "Diverse Intercultural E-Motion Database. 97 Asian professional performers expressing 12 emotions (e.g. joy, guilt, shame) with 3 intensity levels based on self-created scenarios.",
        formats: ["BVH", "C3D", "FBX", "TXT"],
        links: {
            website: "https://www.cr-ict.riec.tohoku.ac.jp/diem-a/",
            download: "https://www.cr-ict.riec.tohoku.ac.jp/diem-a/",
            paper: "https://www.researchgate.net/publication/397823008_Asian_Emotional_Body_Movement_Database_Diverse_Intercultural_E-Motion_Database_of_Asian_Performers_DIEM-A"
        },
        labels: ["Emotion", "Cross-cultural", "Asian", "Psychology"],
        categories: ["Expressive", "General"],
        stats: { subjects: 97, motions: "10,767", fps: "120" }
    },
    {
        id: "INTC",
        name: "InterAct",
        institution: "The University of Hong Kong",
        license: "CC BY-NC-SA 4.0",
        year: 2025,
        dimension: "3D",
        method: "Marker (Optical)",
        subjects: "Multi",
        description: "A large-scale multi-modal dataset of dynamic, expressive, and interactive activities between two people. Includes speech, body motion, and facial expressions for 60+ minute long interaction scenarios.",
        formats: ["BVH", "ARKit (Face)", "WAV"],
        links: {
            website: "https://hku-cg.github.io/interact/",
            paper: "https://doi.org/10.1145/3747871"
        },
        labels: ["Dyadic", "Long-term", "Speech-Gesture"],
        categories: ["Interaction", "Expressive"],
        stats: { subjects: "Pairs", motions: "241 Seqs", fps: "N/A" }
    },
    {
        id: "DEXY",
        name: "DexYCB",
        institution: "NVIDIA",
        license: "CC BY-NC 4.0",
        year: 2021,
        dimension: "3D",
        method: "Multi-view RGB-D",
        subjects: "Single",
        description: "A benchmark for capturing hand grasping of objects, featuring 3D hand pose and 6D object pose annotations.",
        formats: ["RGB-D", "JSON"],
        links: {
            website: "https://dex-ycb.github.io/",
            download: "https://dex-ycb.github.io/",
            paper: "https://arxiv.org/abs/2104.04631"
        },
        labels: ["Grasping", "Hand-Object", "Benchmark"],
        categories: ["Hands/Face", "Interaction"],
        stats: { subjects: 10, motions: "1,000 grasps", fps: 30 }
    },
    {
        id: "HO3D",
        name: "HO-3D",
        institution: "TU Graz",
        license: "Research Only",
        year: 2020,
        dimension: "3D",
        method: "RGB-D + Object Pose",
        subjects: "Single",
        description: "A dataset designed to tackle severe occlusion in hand-object interaction using global temporal optimization for annotation.",
        formats: ["JPG", "PNG", "PKL"],
        links: {
            website: "https://github.com/shreyashampali/ho3d",
            download: "https://github.com/shreyashampali/ho3d",
            paper: "https://arxiv.org/abs/1907.01481"
        },
        labels: ["Hand Pose", "Object Pose", "Depth"],
        categories: ["Hands/Face", "Interaction"],
        stats: { subjects: 10, motions: "103,462 frames", fps: "N/A" }
    },
    {
        id: "DFAU",
        name: "DFAUST",
        institution: "MPI-IS",
        license: "Research Only",
        year: 2017,
        dimension: "4D",
        method: "4D Scans",
        subjects: "Single",
        description: "A dataset for 4D human shape registration, capturing soft-tissue dynamics and non-rigid deformations of the human body in motion.",
        formats: ["PLY", "OBJ"],
        links: {
            website: "https://dfaust.is.tue.mpg.de/",
            download: "https://dfaust.is.tue.mpg.de/",
            paper: "https://ps.is.mpg.de/publications/dfaust-cvpr-2017"
        },
        labels: ["Body Scan", "Mesh Registration"],
        categories: ["General"],
        stats: { subjects: 10, motions: "40,000 meshes", fps: 60 }
    },
    {
        id: "HU4D",
        name: "Human4D",
        institution: "Univ. Crete",
        license: "CC-BY 4.0",
        year: 2020,
        dimension: "4D",
        method: "Volumetric Capture",
        subjects: "Multi",
        description: "A multimodal dataset designed for immersive media, featuring synchronized volumetric video, MoCap, RGB-D, and audio.",
        formats: ["PLY", "C3D", "RGB"],
        links: {
            website: "https://www.csd.uoc.gr/~cpanag/Human4D/",
            download: "https://github.com/tofis/human4d_dataset",
            paper: "https://arxiv.org/abs/2110.07235"
        },
        labels: ["Volumetric Video", "Audio-Visual", "Immersive"],
        categories: ["Interaction", "General"],
        stats: { subjects: "Various", motions: "Various", fps: "N/A" }
    },
    {
        id: "FREI",
        name: "FreiHAND",
        institution: "University of Freiburg",
        license: "Research Only", // Website says "Creative Commons Non-Commercial"
        year: 2019,
        dimension: "3D",
        method: "Multi-view RGB",
        subjects: "Single",
        description: "A large-scale, multi-view dataset for 3D hand pose and shape estimation. Contains 32,560 unique training samples captured with a green screen.",
        formats: ["JPG", "JSON"],
        links: {
            website: "https://lmb.informatik.uni-freiburg.de/projects/freihand/",
            download: "https://lmb.informatik.uni-freiburg.de/projects/freihand/",
            paper: "https://arxiv.org/abs/1909.04349"
        },
        labels: ["Hands", "Shape", "MANO"],
        categories: ["Hands/Face", "General"],
        stats: { subjects: 32, motions: "130k samples", fps: "N/A" }
    },
    {
        id: "IH26",
        name: "InterHand2.6M",
        institution: "Meta / Facebook Research",
        license: "CC-BY-NC 4.0",
        year: 2020,
        dimension: "3D",
        method: "Multi-view RGB",
        subjects: "Single", // Note: It is one person using two hands
        description: "Large-scale dataset for 3D interacting hand pose estimation. Captures complex two-hand interactions and hand-object interactions with accurate ground truth.",
        formats: ["JPG", "JSON"],
        links: {
            website: "https://mks0601.github.io/InterHand2.6M/",
            download: "https://mks0601.github.io/InterHand2.6M/",
            paper: "https://arxiv.org/abs/2008.09309"
        },
        labels: ["Hands", "Interaction", "Two-hand"],
        categories: ["Hands/Face", "Interaction"],
        stats: { subjects: 26, motions: "2.6M Frames", fps: "30" } // Confirmed 30fps version exists
    },
    {
        id: "EG4D",
        name: "Ego4D",
        institution: "Meta / University Consortium",
        license: "Research Only", // Requires signing a license agreement
        year: 2022,
        dimension: "2D", // Primarily video
        method: "Egocentric Camera",
        subjects: "Crowd",
        description: "A massive-scale egocentric video dataset capturing daily life activity across the globe. 3,670 hours of video collected by 923 unique participants.",
        formats: ["MP4", "JSON"],
        links: {
            website: "https://ego4d-data.org/",
            download: "https://ego4d-data.org/docs/start-here/",
            paper: "https://arxiv.org/abs/2110.07058"
        },
        labels: ["Egocentric", "Episodic Memory", "Social"],
        categories: ["Egocentric", "Daily Living"],
        stats: { subjects: "923", motions: "3,670 Hours", fps: "Various" }
    }
];

