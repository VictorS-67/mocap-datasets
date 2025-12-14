MoCap Index: A Unified Repository for Motion Capture Datasets

Access the repository: https://mocapdatasets.org

Overview

The MoCap Index is an open-access, community-curated knowledge base designed to centralize and categorize the growing body of Motion Capture (MoCap) datasets. This project aims to provide a comprehensive, structured overview of the ecosystem to facilitate literature review and data selection for researchers in Computer Vision, Biomechanics, and Computer Graphics.

Data Taxonomy

The repository classifies datasets according to primary technical characteristics:

Content Domain: What are the subjects doing? (Sports, Daily Living, Interaction, etc.)

Dimensionality: 2D pose estimation vs. 3D skeletal data vs. Hybrid.

Acquisition Modality: Hardware used (Vicon/Optitrack, RGB Video, IMU, Synthetic).

Subject Complexity: Single actor vs. Multi-person vs. Crowd.

Features

Parametric Search (Deep Linking): Filter state is persisted in the URL (e.g., ?dim=3D&q=sports), enabling researchers to share specific subsets of the data.

Real-time Analytics: Visualizes the distribution of dataset types using client-side rendering.

Automated Integrity: A CI/CD pipeline verifies the syntax and schema of all incoming data contributions to ensure stability.

Contribution Guidelines

This repository is maintained as an open-source project. Contributions from the research community are essential.

Submitting a New Dataset

To add a missing resource, you can modify the data file directly via Pull Request.

Fork the repository.

Open data/datasets.js.

Append a new entry to the datasets array following this schema:

{
    id: "CODE",           // REQUIRED: Unique 4-Char Uppercase Alphanumeric (e.g., 'CMU1')
    name: "Dataset Title",
    institution: "University/Lab Name",
    license: "Research Only", // See License Types below
    year: 2024,
    dimension: "3D",      // "2D", "3D", or "Hybrid"
    method: "Marker",     // "Marker", "Video", "IMU", "Synthetic", "Hybrid"
    subjects: "Single",   // "Single", "Multi", "Crowd"
    description: "A concise academic summary.",
    formats: ["BVH", "MP4"],
    links: {
        website: "https://...",
        paper: "https://..."
    },
    labels: ["Locomotion", "Interaction"],
    categories: ["General"], // See Categories below (First item determines icon)
    stats: { 
        subjects: 10, 
        motions: "15k Frames", 
        fps: 60 
    }
},


Reference Lists

To ensure the automated validator passes your PR, please use these standard values:

Valid Categories:

General (Lab locomotion/Generic)

Sports (Athletics/Dance)

Interaction (Multi-person/Object)

Daily Living (Cooking/Housework/Office)

Wild (Outdoor/Unconstrained)

Hands/Face (Partial body)

Valid License Types:

Public / Free (Commercial Allowed)

CC-BY 4.0

Research Only (Non-commercial)

Academic Use Only (Strict University Requirement)

Architecture

The project adheres to a decoupled architecture to separate content from logic:

mocap-datasets/
├── assets/
│   ├── app.js          # Controller logic & State management
│   ├── styles.css      # Custom styling
│   └── icons/          # SVG Assets
├── data/
│   └── datasets.js     # The Content (Data Model)
├── tests/              # Validation scripts (Node.js)
├── index.html          # View Structure
└── README.md


License & Attribution

The source code for this interface is licensed under the MIT License.

Note on Data: This repository serves as an index (metadata) only. All underlying datasets remain the property of their respective authors and institutions. Users are reminded to adhere to the specific license agreements and citation requirements of each individual dataset when using them in their work.