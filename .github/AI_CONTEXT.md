# **🤖 Project Context: MoCap Index**

## **1\. Project Mission**

**MoCap Index** (mocapdatasets.org) is an open-source, community-curated repository for Motion Capture datasets.

* **Goal:** To categorize the fragmented ecosystem of MoCap data for researchers in Computer Vision and Graphics.  
* **Tone:** Academic, neutral, functional, and trustworthy.  
* **User Base:** Researchers, PhD students, and Graphics Engineers.

## **2\. Technical Philosophy (The "No-Build" Rule)**

This project is architected to be accessible to academic contributors who may not be familiar with modern web build stacks (React/Webpack/Vite).

* **Stack:** Vanilla HTML5, CSS3, ES6+ JavaScript.  
* **No Build Step:** The code must run directly in the browser. No npm install, no compilation.  
* **Dependencies:** All libraries (Tailwind CSS, Chart.js) are loaded via CDN in the \<head\>.  
* **Browser Support:** Modern browsers only (Chrome, Edge, Firefox, Safari).

## **3\. Architecture**

The project follows a decoupled MVC-lite pattern:

* **index.html** (View): Main structure.  
* **assets/app.js** (Controller): Handles state, URL parameters (Deep Linking), and DOM rendering.  
* **assets/styles.css** (Style): Custom CSS overrides.  
* **data/datasets.js** (Model): Single JS file exporting const datasets.  
* **tests/validate\_data.js**: Node.js script for CI/CD validation.

## **4\. Data Schema (Strict)**

Every entry in data/datasets.js must adhere to this schema.

{  
    id: "CODE",           // REQUIRED: Unique String (A-Z, 0-9), EXACTLY 4 characters.  
    name: "Title",        // Full Name  
    institution: "Name",  // Originating Lab/University  
    license: "Type",      // ENUM: "Public / Free (Commercial Allowed)", "Research Only", "Academic Use Only", "CC-BY 4.0"  
    year: 2024,           // Integer  
    dimension: "3D",      // ENUM: "2D", "3D", "Hybrid"  
    method: "Marker",     // ENUM: "Marker", "Video", "IMU", "Synthetic", "Hybrid"  
    subjects: "Single",   // ENUM: "Single", "Multi", "Crowd"  
    description: "Text",  // Concise academic summary (max 2 sentences)  
    formats: \["Ext"\],     // Array of strings: "C3D", "BVH", "MP4", "NPZ"  
    links: {  
        website: "url",   // Required  
        paper: "url",     // Optional  
        download: "url"   // Optional  
    },  
    labels: \["Tag"\],      // Array of keywords  
    categories: \["Primary", "Secondary"\], // Array. First item determines Icon. See Taxonomy below.  
    stats: {   
        subjects: 10,     // Integer or String  
        motions: "10k",   // String  
        fps: 60           // Integer or "Var"  
    }  
}

## **5\. Taxonomy & Iconography**

Icons are **derived** from the primary category (index 0 of categories). Do not hardcode icons in data.

| Category | Emoji | Definition |
| :---- | :---- | :---- |
| **General** | 🏛️ | Broad, multi-purpose lab datasets (Locomotion, ROM). |
| **Sports** | ⚽ | Athletics, dance, martial arts, performance. |
| **Interaction** | 🤝 | Multi-person scenarios or Human-Object Interaction. |
| **Daily Living** | ☕ | Cooking, Eating, Hygiene, Housework, Office work. |
| **Wild** | 🌲 | Unscripted, natural behavior recorded outdoors/public. |
| **Hands/Face** | 🖐️ | Focused purely on specific body parts. |

## **6\. Operational Guidelines**

1. **Privacy:** NO external tracking scripts (Google Analytics, etc.). Use GitHub Insights.  
2. **Validation:** Any changes to the Data Schema must be reflected in tests/validate\_data.js.  
3. **IDs:** Must be 4-character Uppercase Alphanumeric (e.g., CMU1, AMAS).

## **7\. How to Onboard**

When writing code for this project:

1. Check AI\_CONTEXT.md for architectural constraints.  
2. If modifying data, run node tests/validate\_data.js locally to verify.  
3. Keep logic in app.js and content in datasets.js.