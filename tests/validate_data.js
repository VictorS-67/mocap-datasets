const fs = require('fs');
const vm = require('vm');
const path = require('path');

// 1. Load the data file
const dataPath = path.join(__dirname, '../data/datasets.js');
const code = fs.readFileSync(dataPath, 'utf8');

const sandbox = {};
vm.createContext(sandbox);

try {
    // Run the code to define the variable in memory
    vm.runInContext(code, sandbox);
} catch (e) {
    console.error("❌ SYNTAX ERROR: Your datasets.js file has invalid JavaScript.");
    console.error(e);
    process.exit(1);
}

// --- FIX START ---
// We cannot use 'sandbox.datasets' because 'const' variables 
// don't attach to the sandbox object in Node VM.
// Instead, we evaluate the variable name inside the context to retrieve it.
let datasets;
try {
    datasets = vm.runInContext('datasets', sandbox);
} catch (e) {
    console.error("❌ ERROR: Could not find variable 'datasets'. Did you rename it?");
    process.exit(1);
}
// --- FIX END ---

// 2. Define Schema Rules
const requiredFields = ['id', 'name', 'dimension', 'method', 'subjects', 'description', 'labels'];
const validDimensions = ['2D', '3D', 'Hybrid'];
const validSubjects = ['Single', 'Multi', 'Crowd'];

// 3. Run Validation
console.log(`🔍 Validating ${datasets.length} datasets...`);
let hasError = false;

datasets.forEach((item, index) => {
    // Check Required Fields
    requiredFields.forEach(field => {
        if (!item[field]) {
            console.error(`❌ Error in Item #${index + 1} ("${item.name || 'Unknown'}"): Missing field '${field}'`);
            hasError = true;
        }
    });

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