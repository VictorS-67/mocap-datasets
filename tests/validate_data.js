const fs = require('fs');
const vm = require('vm');
const path = require('path');

// 1. Load the data file
const dataPath = path.join(__dirname, '../data/datasets.js');
const code = fs.readFileSync(dataPath, 'utf8');

const sandbox = {};
vm.createContext(sandbox);

try {
    vm.runInContext(code, sandbox);
} catch (e) {
    console.error("❌ SYNTAX ERROR: Your datasets.js file has invalid JavaScript.");
    console.error(e);
    process.exit(1);
}

// Retrieve the datasets variable
let datasets;
try {
    datasets = vm.runInContext('datasets', sandbox);
} catch (e) {
    console.error("❌ ERROR: Could not find variable 'datasets'. Did you rename it?");
    process.exit(1);
}

// 2. Define Schema Rules
const requiredFields = ['id', 'name', 'institution', 'license', 'year', 'dimension', 'method', 'subjects', 'description', 'formats', 'links', 'labels', 'categories'];
const validDimensions = ['2D', '3D', 'Hybrid'];
const validSubjects = ['Single', 'Multi', 'Crowd'];
const validCategories = ["General", "Sports", "Interaction", "Daily Living", "Wild", "Hands/Face"];
const idRegex = /^[A-Z0-9]{4}$/;

// 3. Run Validation
console.log(`🔍 Validating ${datasets.length} datasets...`);
let hasError = false;
// Track IDs to ensure uniqueness
const seenIds = new Set();

datasets.forEach((item, index) => {
    // Check Required Fields
    requiredFields.forEach(field => {
        if (!item[field]) {
            console.error(`❌ Error in Item #${index + 1} ("${item.name || 'Unknown'}"): Missing field '${field}'`);
            hasError = true;
        }
    });

    // Check ID Format (4 Characters)
    if (item.id) {
        if (!idRegex.test(item.id)) {
            console.error(`❌ Error in Item #${index + 1} ("${item.name}"): Invalid ID '${item.id}'. Must be EXACTLY 4 uppercase alphanumeric characters (e.g., 'CMU1').`);
            hasError = true;
        }
        if (seenIds.has(item.id)) {
            console.error(`❌ Error in Item #${index + 1} ("${item.name}"): Duplicate ID '${item.id}'. IDs must be unique.`);
            hasError = true;
        }
        seenIds.add(item.id);
    }

    // Check Categories
    if (!item.categories || !Array.isArray(item.categories) || item.categories.length === 0) {
        console.error(`❌ Error in Item #${index + 1}: Must have 'categories' array with at least one item.`);
        hasError = true;
    } else {
        const primary = item.categories[0];
        if (!validCategories.includes(primary)) {
            console.error(`❌ Error in Item #${index + 1} ("${item.name}"): Primary category '${primary}' is invalid. Must be one of: ${validCategories.join(", ")}`);
            hasError = true;
        }
    }

    // Check Links Object
    if (item.links && !item.links.website) {
        console.error(`❌ Error in Item #${index + 1}: 'links' must contain at least a 'website' URL.`);
        hasError = true;
    }

    // Check Formats Array
    if (item.formats && !Array.isArray(item.formats)) {
        console.error(`❌ Error in Item #${index + 1}: 'formats' must be an Array.`);
        hasError = true;
    }

    // Check Enums (Dimension)
    if (item.dimension && !validDimensions.some(d => item.dimension.includes(d))) {
        console.error(`❌ Error in Item #${index + 1} ("${item.name}"): Invalid dimension '${item.dimension}'. Expected: ${validDimensions.join(', ')}`);
        hasError = true;
    }

    // Check Enums (Subjects)
    if (item.subjects && !validSubjects.some(s => item.subjects.includes(s))) {
        console.error(`❌ Error in Item #${index + 1} ("${item.name}"): Invalid subjects '${item.subjects}'. Expected: ${validSubjects.join(', ')}`);
        hasError = true;
    }
});

// 4. Final Verdict
if (hasError) {
    console.error("\n🚫 VALIDATION FAILED. Please fix the errors above.");
    process.exit(1);
} else {
    console.log("\n✅ ALL CHECKS PASSED. Data is healthy.");
    process.exit(0);
}