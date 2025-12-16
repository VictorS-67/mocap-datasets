// --- STATE MANAGEMENT ---
if (typeof datasets === 'undefined') {
    console.error("Error: datasets.js failed to load.");
}

let state = {
    searchQuery: "",
    filters: {
        dimension: "all",
        method: "all",
        subjects: "all"
    },
    filteredData: typeof datasets !== 'undefined' ? [...datasets] : []
};

// ICON MAPPING
const categoryIcons = {
    "General": "🏛️",
    "Sports": "⚽",
    "Interaction": "🤝",
    "Wild": "🌲",
    "Social": "🎬",
    "Synthetic": "🤖",
    "Shape": "🧊",
    "Hands/Face": "🖐️",
    "Egocentric": "🕶️",
    "Expressive": "🎭"
};

// Fallback if category is missing or typo
const defaultIcon = "📁";

// --- DOM ELEMENTS ---
let gridEl, emptyStateEl, searchInput, resetButton;
let filterSelects = {};
let totalCountDisplay, multiPersonCountDisplay, actionLabelCountDisplay;
let modal, modalOverlay, closeModalBtn, modalContent = {};
let dimChartInstance = null;
let methodChartInstance = null;

// --- CORE FUNCTIONS ---

function init() {
    // 1. Grab Elements
    gridEl = document.getElementById('datasetGrid');
    emptyStateEl = document.getElementById('emptyState');
    searchInput = document.getElementById('searchInput');

    filterSelects = {
        dimension: document.getElementById('dimensionFilter'),
        method: document.getElementById('methodFilter'),
        subjects: document.getElementById('subjectsFilter')
    };
    resetButton = document.getElementById('resetFilters');

    // Modal
    modal = document.getElementById('detailModal');
    modalOverlay = document.getElementById('modalOverlay');
    closeModalBtn = document.getElementById('closeModalBtn');
    modalContent = {
        title: document.getElementById('modalTitle'),
        desc: document.getElementById('modalDescription'),
        badges: document.getElementById('modalBadges'),
        stats: document.getElementById('modalStats'),
        tags: document.getElementById('modalTags'),
        icon: document.getElementById('modalIcon')
    };

    // Stats
    totalCountDisplay = document.getElementById('totalCountDisplay');
    multiPersonCountDisplay = document.getElementById('multiPersonCountDisplay');
    actionLabelCountDisplay = document.getElementById('actionLabelCountDisplay');

    // 2. Load State from URL (The new step!)
    loadFromURL();

    // 3. Setup & Render
    setupEventListeners();
    updateStats();
    renderCharts();

    // Initial filter application (to respect URL params)
    applyFilters(false); // false = don't write to URL on initial load
}

function setupEventListeners() {
    searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.toLowerCase();
        applyFilters(true);
    });

    Object.keys(filterSelects).forEach(key => {
        filterSelects[key].addEventListener('change', (e) => {
            state.filters[key] = e.target.value;
            applyFilters(true);
        });
    });

    resetButton.addEventListener('click', () => {
        state.searchQuery = "";
        searchInput.value = "";
        state.filters = { dimension: "all", method: "all", subjects: "all" };
        Object.values(filterSelects).forEach(sel => sel.value = "all");
        applyFilters(true);
    });

    closeModalBtn.addEventListener('click', toggleModal);
    modalOverlay.addEventListener('click', toggleModal);
}

// --- NEW URL LOGIC ---

function updateURL() {
    const params = new URLSearchParams();

    // Only add params if they are different from default
    if (state.searchQuery) params.set('q', state.searchQuery);
    if (state.filters.dimension !== 'all') params.set('dim', state.filters.dimension);
    if (state.filters.method !== 'all') params.set('method', state.filters.method);
    if (state.filters.subjects !== 'all') params.set('sub', state.filters.subjects);

    // Update browser URL without reloading
    const newURL = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newURL);
}

function loadFromURL() {
    const params = new URLSearchParams(window.location.search);

    // 1. Update State
    if (params.has('q')) state.searchQuery = params.get('q');
    if (params.has('dim')) state.filters.dimension = params.get('dim');
    if (params.has('method')) state.filters.method = params.get('method');
    if (params.has('sub')) state.filters.subjects = params.get('sub');

    // 2. Sync UI Elements (Set dropdowns to match URL)
    if (searchInput) searchInput.value = state.searchQuery;
    if (filterSelects.dimension) filterSelects.dimension.value = state.filters.dimension;
    if (filterSelects.method) filterSelects.method.value = state.filters.method;
    if (filterSelects.subjects) filterSelects.subjects.value = state.filters.subjects;
}

// --- FILTERING ---

function applyFilters(shouldUpdateURL = true) {
    if (typeof datasets === 'undefined') return;

    // Update URL if requested
    if (shouldUpdateURL) updateURL();

    state.filteredData = datasets.filter(item => {
        // Search Text
        const matchesSearch = item.name.toLowerCase().includes(state.searchQuery) ||
            item.description.toLowerCase().includes(state.searchQuery) ||
            item.labels.some(l => l.toLowerCase().includes(state.searchQuery));

        // Dimension Filter
        const matchesDim = state.filters.dimension === "all" ||
            (state.filters.dimension === "Hybrid" ? item.dimension.includes("Hybrid") : item.dimension === state.filters.dimension);

        // Method Filter (Fuzzy matching)
        let matchesMethod = true;
        if (state.filters.method !== "all") {
            if (state.filters.method === "Marker") matchesMethod = item.method.includes("Marker");
            else if (state.filters.method === "Markerless/Video") matchesMethod = item.method.includes("Video") || item.method.includes("Image");
            else if (state.filters.method === "IMU") matchesMethod = item.method.includes("IMU");
            else if (state.filters.method === "Synthetic") matchesMethod = item.method.includes("Synthetic");
        }

        // Subject Filter
        let matchesSub = true;
        if (state.filters.subjects !== "all") {
            if (state.filters.subjects === "Multi") matchesSub = item.subjects === "Multi" || item.subjects === "Crowd";
            else if (state.filters.subjects === "Crowd") matchesSub = item.subjects === "Crowd";
            else matchesSub = item.subjects === "Single";
        }

        return matchesSearch && matchesDim && matchesMethod && matchesSub;
    });

    renderGrid();
}

// ... (Rendering functions remain exactly the same as before) ...
// For brevity, I am not repeating getBadgeColor, renderGrid, updateStats, 
// renderCharts, openModal, toggleModal here because they did NOT change.
// Just paste the previous versions of those functions below.

function getBadgeColor(type, value) {
    if (type === 'dim') {
        if (value.includes('3D')) return 'bg-blue-100 text-blue-800';
        if (value.includes('2D')) return 'bg-green-100 text-green-800';
        return 'bg-purple-100 text-purple-800';
    }
    if (type === 'sub') {
        if (value === 'Single') return 'bg-stone-100 text-stone-600';
        return 'bg-orange-100 text-orange-800';
    }
    return 'bg-gray-100 text-gray-800';
}

function renderGrid() {
    gridEl.innerHTML = "";

    if (state.filteredData.length === 0) {
        emptyStateEl.classList.remove('hidden');
    } else {
        emptyStateEl.classList.add('hidden');

        state.filteredData.forEach(dataset => {
            const card = document.createElement('div');
            card.className = "dataset-card bg-white rounded-xl border border-stone-200 p-6 flex flex-col h-full cursor-pointer hover:border-amber-300";
            card.onclick = () => openModal(dataset);

            const primaryCategory = dataset.categories ? dataset.categories[0] : "General";
            const icon = categoryIcons[primaryCategory] || defaultIcon;

            card.innerHTML = `
                <div class="flex justify-between items-start mb-4">
                    <div class="flex items-center gap-3">
                        <span class="text-2xl bg-stone-50 p-2 rounded-lg">${icon}</span>
                        <div>
                            <h3 class="font-bold text-stone-900 leading-tight">${dataset.name}</h3>
                            <span class="text-xs text-stone-500">${dataset.year}</span>
                        </div>
                    </div>
                    <span class="px-2 py-1 rounded text-xs font-semibold ${getBadgeColor('dim', dataset.dimension)}">
                        ${dataset.dimension}
                    </span>
                </div>
                
                <p class="text-stone-600 text-sm mb-4 line-clamp-3 flex-grow">${dataset.description}</p>
                
                <div class="space-y-2 mt-auto">
                    <div class="flex flex-wrap gap-2 text-xs">
                        <span class="px-2 py-1 bg-stone-50 text-stone-600 rounded border border-stone-100 icon-marker">
                            ${dataset.method}
                        </span>
                        <span class="px-2 py-1 bg-stone-50 text-stone-600 rounded border border-stone-100 icon-single">
                            ${dataset.subjects}
                        </span>
                    </div>
                    <div class="pt-3 border-t border-stone-100 flex justify-between items-center">
                        <span class="text-xs text-stone-400 font-mono">${dataset.labels.slice(0, 2).join(", ")}...</span>
                        <span class="text-xs font-medium text-amber-600 group-hover:underline">View Details →</span>
                    </div>
                </div>
            `;
            gridEl.appendChild(card);
        });
    }
}

function updateStats() {
    if (typeof datasets === 'undefined') return;
    totalCountDisplay.innerText = datasets.length;
    multiPersonCountDisplay.innerText = datasets.filter(d => d.subjects !== "Single").length;
    actionLabelCountDisplay.innerText = datasets.filter(d => d.labels.some(l => l.includes("Action") || l.includes("Activity"))).length;
}

function renderCharts() {
    if (typeof datasets === 'undefined') return;

    // Data Prep
    const dimCounts = { "3D": 0, "2D": 0, "Hybrid": 0 };
    datasets.forEach(d => {
        if (d.dimension.includes("Hybrid")) dimCounts["Hybrid"]++;
        else if (d.dimension.includes("3D")) dimCounts["3D"]++;
        else dimCounts["2D"]++;
    });

    const methodCounts = { "Marker": 0, "Video": 0, "IMU": 0, "Synthetic": 0 };
    datasets.forEach(d => {
        if (d.method.includes("Marker")) methodCounts["Marker"]++;
        else if (d.method.includes("IMU")) methodCounts["IMU"]++;
        else if (d.method.includes("Synthetic")) methodCounts["Synthetic"]++;
        else methodCounts["Video"]++;
    });

    // Chart 1
    const ctxDim = document.getElementById('dimensionChart').getContext('2d');
    if (dimChartInstance) dimChartInstance.destroy(); // Prevent memory leaks on re-render
    dimChartInstance = new Chart(ctxDim, {
        type: 'doughnut',
        data: {
            labels: ['3D Datasets', '2D Datasets', 'Hybrid'],
            datasets: [{
                data: [dimCounts["3D"], dimCounts["2D"], dimCounts["Hybrid"]],
                backgroundColor: ['#d97706', '#78716c', '#44403c'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { usePointStyle: true, font: { family: 'ui-sans-serif' } } }
            },
            cutout: '70%'
        }
    });

    // Chart 2
    const ctxMethod = document.getElementById('methodChart').getContext('2d');
    if (methodChartInstance) methodChartInstance.destroy();
    methodChartInstance = new Chart(ctxMethod, {
        type: 'bar',
        data: {
            labels: ['Marker', 'Video/Vis', 'IMU', 'Synth'],
            datasets: [{
                label: 'Count',
                data: [methodCounts["Marker"], methodCounts["Video"], methodCounts["IMU"], methodCounts["Synthetic"]],
                backgroundColor: '#d6d3d1',
                hoverBackgroundColor: '#d97706',
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true, grid: { display: false } },
                x: { grid: { display: false } }
            },
            plugins: { legend: { display: false } }
        }
    });
}

function openModal(dataset) {
    const primaryCategory = dataset.categories ? dataset.categories[0] : "General";
    modalContent.icon.innerText = categoryIcons[primaryCategory] || defaultIcon;
    modalContent.title.innerText = dataset.name;
    modalContent.desc.innerText = dataset.description;

    // Badges (Added Institution and License)
    modalContent.badges.innerHTML = `
        <span class="px-2 py-1 rounded text-xs font-semibold bg-stone-800 text-stone-100">${dataset.institution}</span>
        <span class="px-2 py-1 rounded text-xs font-semibold ${getBadgeColor('dim', dataset.dimension)}">${dataset.dimension}</span>
        <span class="px-2 py-1 rounded text-xs font-semibold bg-stone-100 text-stone-700">${dataset.method}</span>
        <span class="px-2 py-1 rounded text-xs font-semibold ${getBadgeColor('sub', dataset.subjects)}">${dataset.subjects}</span>
    `;

    // Stats Column
    modalContent.stats.innerHTML = `
        <li class="flex justify-between border-b border-stone-100 py-1"><span>Year:</span> <span class="font-mono text-stone-900">${dataset.year}</span></li>
        <li class="flex justify-between border-b border-stone-100 py-1"><span>Subjects:</span> <span class="font-mono text-stone-900">${dataset.stats.subjects}</span></li>
        <li class="flex justify-between border-b border-stone-100 py-1"><span>FPS:</span> <span class="font-mono text-stone-900">${dataset.stats.fps}</span></li>
        <li class="flex justify-between border-b border-stone-100 py-1"><span>Volume:</span> <span class="font-mono text-stone-900">${dataset.stats.motions}</span></li>
    `;

    // New: Access Column
    const formatList = dataset.formats ? dataset.formats.join(", ") : "N/A";
    const modalAccess = document.getElementById('modalAccess'); // Make sure to grab this element in init()!
    if (modalAccess) {
        modalAccess.innerHTML = `
            <li class="flex flex-col border-b border-stone-100 py-1">
                <span class="text-xs text-stone-400">License</span>
                <span class="font-medium text-stone-900">${dataset.license}</span>
            </li>
            <li class="flex flex-col border-b border-stone-100 py-1">
                <span class="text-xs text-stone-400">Formats</span>
                <span class="font-mono text-stone-900 text-xs">${formatList}</span>
            </li>
        `;
    }

    // Tags
    modalContent.tags.innerHTML = dataset.labels.map(l =>
        `<span class="px-2 py-1 bg-amber-50 text-amber-800 text-xs rounded-full border border-amber-100">${l}</span>`
    ).join('');

    // Dynamic Links Buttons
    const linksContainer = document.getElementById('modalLinks');
    linksContainer.innerHTML = ''; // Clear old buttons

    // 1. Website Button (Primary)
    if (dataset.links.website) {
        const btn = document.createElement('a');
        btn.href = dataset.links.website;
        btn.target = "_blank";
        btn.className = "w-full sm:w-auto inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-amber-600 text-base font-medium text-white hover:bg-amber-700 sm:text-sm";
        btn.innerText = "Visit Website ↗";
        linksContainer.appendChild(btn);
    }

    // 2. Paper Button (Secondary)
    if (dataset.links.paper) {
        const btn = document.createElement('a');
        btn.href = dataset.links.paper;
        btn.target = "_blank";
        btn.className = "w-full sm:w-auto inline-flex justify-center rounded-md border border-stone-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-stone-700 hover:bg-stone-50 sm:text-sm";
        btn.innerText = "Read Paper 📄";
        linksContainer.appendChild(btn);
    }

    // 3. Download Button (Secondary)
    if (dataset.links.download) {
        const btn = document.createElement('a');
        btn.href = dataset.links.download;
        btn.target = "_blank";
        btn.className = "w-full sm:w-auto inline-flex justify-center rounded-md border border-stone-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-stone-700 hover:bg-stone-50 sm:text-sm";
        btn.innerText = "Download 💾";
        linksContainer.appendChild(btn);
    }

    modal.classList.remove('hidden');
}

function toggleModal() {
    modal.classList.add('hidden');
}

// Start when DOM is ready
window.addEventListener('DOMContentLoaded', init);