// MoCap Index Data Source
// Schema conforms to validator rules: id (4-char), name, institution, license, year, dimension, method, subjects, description, formats, links, labels, stats, categories.

const datasets = [
    {
        id: "CMU1",
        name: "CMU Mocap",
        institution: "Carnegie Mellon University",
        license: "Public / Free (Commercial Allowed)",
        year: 2003, a
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
        license: "Academic Use Only (Strict)",
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
        license: "Research Only",
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
        license: "Simplified BSD (Research)",
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
        license: "CC-BY 4.0 (Commercial Allowed)",
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
        license: "CC-BY 4.0 (Commercial Allowed)",
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
        id: "KINE",
        name: "Kinetics-400",
        institution: "DeepMind",
        license: "CC-BY 4.0 (Commercial Allowed)",
        year: 2017,
        dimension: "2D",
        method: "Video",
        subjects: "Crowd",
        description: "A large-scale, high-quality dataset of YouTube video URLs which include a diverse range of human focused actions.",
        formats: ["CSV", "JSON", "MP4 (Source)"],
        links: {
            website: "https://www.deepmind.com/open-source/kinetics",
            paper: "https://arxiv.org/abs/1705.06950"
        },
        labels: ["Classification", "YouTube", "Large Scale"],
        categories: ["Daily Living", "Wild"],
        stats: { subjects: "Many", motions: "300k Clips", fps: "Var" }
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
    }
];