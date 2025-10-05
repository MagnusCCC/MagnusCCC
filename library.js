const documents = [
    // MICROGRAVITY (MG1-MG7)
    { 
        id: 1, 
        filename: "MG1.pdf",
        title: "Effects of Microgravity on Cellular DNA Repair Mechanisms", 
        authors: "Dr. Sarah Chen, Dr. Michael Roberts, Dr. Elena Vasquez",
        abstract: "Recent studies demonstrate significant alterations in DNA repair pathways under microgravity conditions, with implications for long-duration spaceflight. This comprehensive study examines the molecular mechanisms by which microgravity affects cellular repair systems and proposes countermeasures for future missions.",
        keywords: ["microgravity", "DNA repair", "cellular mechanisms", "spaceflight"],
        tags: ["microgravity", "dna"], 
        year: "2024",
        pages: 45,
        journal: "Space Biology Quarterly"
    },
    { 
        id: 2, 
        filename: "MG2.pdf",
        title: "Cardiovascular Adaptations to Microgravity Environments", 
        authors: "Dr. James Park, Dr. Lisa Anderson",
        abstract: "Study of heart function and vascular changes in astronauts during and after spaceflight. Long-term cardiovascular monitoring reveals significant adaptations that may impact crew health on extended missions to Mars and beyond.",
        keywords: ["cardiovascular", "microgravity", "heart function", "vascular adaptation"],
        tags: ["microgravity"], 
        year: "2024",
        pages: 38,
        journal: "Journal of Space Medicine"
    },
    { 
        id: 3, 
        filename: "MG3.pdf",
        title: "Immune System Function in Space Environments", 
        authors: "Dr. Patricia Kumar, Dr. Robert Zhang",
        abstract: "Investigation of immune cell activity and disease susceptibility during orbital missions. Results indicate significant immune system dysregulation that could pose risks during interplanetary travel.",
        keywords: ["immune system", "microgravity", "disease susceptibility"],
        tags: ["microgravity"], 
        year: "2023",
        pages: 42,
        journal: "Immunology in Space"
    },
    { 
        id: 4, 
        filename: "MG4.pdf",
        title: "Neural Plasticity Changes in Microgravity", 
        authors: "Dr. Amanda Foster, Dr. David Kim",
        abstract: "Brain imaging studies revealing structural and functional changes in astronauts' nervous systems. Advanced MRI techniques show remarkable neuroplasticity adaptations to the space environment.",
        keywords: ["neural plasticity", "brain imaging", "microgravity", "neuroadaptation"],
        tags: ["microgravity"], 
        year: "2024",
        pages: 51,
        journal: "Neuroscience Frontiers"
    },
    { 
        id: 5, 
        filename: "MG5.pdf",
        title: "Mitochondrial Function in Altered Gravity", 
        authors: "Dr. Thomas Wright, Dr. Jennifer Lee",
        abstract: "Changes in cellular energy production and oxidative stress responses in space. This study reveals how microgravity affects the powerhouses of cells and implications for astronaut metabolism.",
        keywords: ["mitochondria", "cellular energy", "oxidative stress", "metabolism"],
        tags: ["microgravity"], 
        year: "2024",
        pages: 36,
        journal: "Cellular Biology Today"
    },
    { 
        id: 6, 
        filename: "MG6.pdf",
        title: "Protein Crystallization Studies in Microgravity", 
        authors: "Dr. Rebecca Martinez, Dr. Kevin O'Brien",
        abstract: "Enhanced protein structure determination using space-based crystallization techniques. Microgravity environments produce higher quality protein crystals for pharmaceutical research.",
        keywords: ["protein crystallization", "structural biology", "pharmaceuticals"],
        tags: ["microgravity"], 
        year: "2023",
        pages: 29,
        journal: "Structural Biology Reports"
    },
    { 
        id: 7, 
        filename: "MG7.pdf",
        title: "Bacterial Behavior and Virulence in Space", 
        authors: "Dr. Christopher Taylor, Dr. Monica Singh",
        abstract: "Changes in microbial growth patterns and antibiotic resistance during spaceflight. Understanding bacterial adaptation to microgravity is crucial for crew health and contamination control.",
        keywords: ["bacteria", "virulence", "antibiotic resistance", "microbiology"],
        tags: ["microgravity"], 
        year: "2024",
        pages: 47,
        journal: "Microbiology in Space"
    },

    // COSMIC RADIATION (CR1-CR7)
    { 
        id: 8, 
        filename: "CR1.pdf",
        title: "Cosmic Radiation Impact on Gene Expression in Arabidopsis", 
        authors: "Dr. Maria Gonzalez, Dr. John Peterson",
        abstract: "Analysis of plant gene expression patterns reveals adaptive responses to cosmic radiation exposure during orbital experiments. This research has implications for sustainable food production in space habitats.",
        keywords: ["cosmic radiation", "gene expression", "plants", "space agriculture"],
        tags: ["radiation", "plants"], 
        year: "2024",
        pages: 43,
        journal: "Plant Space Biology"
    },
    { 
        id: 9, 
        filename: "CR2.pdf",
        title: "Radiation Shielding Effects on Biological Systems", 
        authors: "Dr. Richard Brown, Dr. Susan Clark",
        abstract: "Evaluating the effectiveness of various shielding materials in protecting biological specimens from cosmic radiation. Novel composite materials show promise for future deep space missions.",
        keywords: ["radiation shielding", "protection", "materials science"],
        tags: ["radiation"], 
        year: "2023",
        pages: 55,
        journal: "Space Engineering & Biology"
    },
    { 
        id: 10, 
        filename: "CR3.pdf",
        title: "Genetic Mutations Induced by Space Radiation Exposure", 
        authors: "Dr. Laura Wilson, Dr. Andrew Thompson",
        abstract: "Comprehensive analysis of mutation rates and types in organisms exposed to cosmic radiation. Long-term genetic monitoring reveals concerning mutation patterns.",
        keywords: ["genetic mutations", "radiation exposure", "DNA damage"],
        tags: ["dna", "radiation"], 
        year: "2023",
        pages: 62,
        journal: "Genetics Today"
    },
    { 
        id: 11, 
        filename: "CR4.pdf",
        title: "Radiation Dosimetry on Deep Space Missions", 
        authors: "Dr. Daniel Harris, Dr. Emily White",
        abstract: "Modeling radiation exposure levels for future Mars and lunar surface missions. Advanced dosimetry techniques provide crucial data for mission planning and crew safety.",
        keywords: ["radiation dosimetry", "Mars missions", "crew safety"],
        tags: ["radiation"], 
        year: "2024",
        pages: 48,
        journal: "Space Radiation Research"
    },
    { 
        id: 12, 
        filename: "CR5.pdf",
        title: "Space Radiation Effects on Eye Health", 
        authors: "Dr. Margaret Davis, Dr. Paul Robinson",
        abstract: "Study of vision changes and retinal damage in astronauts exposed to cosmic radiation. Long-term ophthalmological monitoring reveals progressive damage patterns.",
        keywords: ["eye health", "vision changes", "retinal damage", "radiation"],
        tags: ["radiation"], 
        year: "2024",
        pages: 40,
        journal: "Ophthalmology in Space"
    },
    { 
        id: 13, 
        filename: "CR6.pdf",
        title: "Radiation-Induced Cataracts in Space Travelers", 
        authors: "Dr. Steven Miller, Dr. Catherine Moore",
        abstract: "Long-term ophthalmological outcomes in astronauts with high radiation exposure. Preventive strategies and treatment protocols are evaluated.",
        keywords: ["cataracts", "radiation damage", "eye disease"],
        tags: ["radiation"], 
        year: "2023",
        pages: 34,
        journal: "Clinical Space Medicine"
    },
    { 
        id: 14, 
        filename: "CR7.pdf",
        title: "Radiation Damage to Central Nervous System", 
        authors: "Dr. Brian Taylor, Dr. Jessica Adams",
        abstract: "Neurological risks from galactic cosmic rays during interplanetary missions. Advanced imaging reveals structural changes in brain tissue following radiation exposure.",
        keywords: ["CNS damage", "neurological risks", "galactic cosmic rays"],
        tags: ["radiation"], 
        year: "2024",
        pages: 58,
        journal: "Neurology & Space Medicine"
    },

    // DNA (DNA1-DNA6)
    { 
        id: 15, 
        filename: "DNA1.pdf",
        title: "DNA Damage Response in Microgravity Environments", 
        authors: "Dr. Nicole Green, Dr. Mark Johnson",
        abstract: "Investigating cellular mechanisms for detecting and repairing DNA damage in the absence of gravitational forces. Novel repair pathways are identified.",
        keywords: ["DNA damage", "repair mechanisms", "microgravity"],
        tags: ["dna", "microgravity"], 
        year: "2024",
        pages: 46,
        journal: "Molecular Biology in Space"
    },
    { 
        id: 16, 
        filename: "DNA2.pdf",
        title: "Cellular Aging Acceleration in Space", 
        authors: "Dr. Rachel Cooper, Dr. George Martinez",
        abstract: "Telomere length and cellular senescence markers in astronauts before and after spaceflight. Evidence suggests accelerated aging processes during extended missions.",
        keywords: ["telomeres", "cellular aging", "senescence"],
        tags: ["dna", "microgravity"], 
        year: "2023",
        pages: 41,
        journal: "Aging Research International"
    },
    { 
        id: 17, 
        filename: "DNA3.pdf",
        title: "Gene Editing Technologies for Space Medicine", 
        authors: "Dr. Samuel Evans, Dr. Victoria Brooks",
        abstract: "CRISPR applications for preventing radiation-induced genetic damage. Therapeutic gene editing shows promise for protecting astronauts on long-duration missions.",
        keywords: ["CRISPR", "gene editing", "radiation protection"],
        tags: ["dna", "radiation"], 
        year: "2024",
        pages: 52,
        journal: "Gene Therapy Reviews"
    },
    { 
        id: 18, 
        filename: "DNA4.pdf",
        title: "DNA Methylation Patterns in Space-Flown Organisms", 
        authors: "Dr. Karen Phillips, Dr. Timothy Russell",
        abstract: "Epigenetic changes induced by spaceflight and their transgenerational effects. Long-term studies reveal heritable modifications in gene expression patterns.",
        keywords: ["DNA methylation", "epigenetics", "transgenerational effects"],
        tags: ["dna"], 
        year: "2023",
        pages: 49,
        journal: "Epigenetics Journal"
    },
    { 
        id: 19, 
        filename: "DNA5.pdf",
        title: "Chromosomal Aberrations from Cosmic Radiation", 
        authors: "Dr. Donald Gray, Dr. Michelle Turner",
        abstract: "Cytogenetic analysis of radiation-induced chromosomal damage in astronauts. Detailed karyotype analysis reveals specific chromosome fragmentation patterns.",
        keywords: ["chromosomal aberrations", "cytogenetics", "radiation damage"],
        tags: ["dna", "radiation"], 
        year: "2023",
        pages: 44,
        journal: "Cytogenetics Research"
    },
    { 
        id: 20, 
        filename: "DNA6.pdf",
        title: "Genetic Diversity in Space-Adapted Plant Lines", 
        authors: "Dr. Linda Hayes, Dr. Frank Nelson",
        abstract: "Breeding programs for developing robust crops for extraterrestrial cultivation. Selection of radiation-resistant and microgravity-adapted plant varieties.",
        keywords: ["genetic diversity", "plant breeding", "space agriculture"],
        tags: ["plants", "dna"], 
        year: "2024",
        pages: 37,
        journal: "Agricultural Biotechnology"
    },

    // MUSCLE LOSS (muscle1-muscle6)
    { 
        id: 21, 
        filename: "muscle1.pdf",
        title: "Myotelic Protein Expression in Extended Spaceflight", 
        authors: "Dr. Angela Scott, Dr. Patrick Rivera",
        abstract: "Comprehensive proteomics study examining muscle protein degradation mechanisms in astronauts. Identification of key biomarkers for muscle atrophy prediction.",
        keywords: ["muscle proteins", "proteomics", "muscle atrophy"],
        tags: ["muscle"], 
        year: "2024",
        pages: 53,
        journal: "Muscle & Nerve Science"
    },
    { 
        id: 22, 
        filename: "muscle2.pdf",
        title: "Muscle Atrophy Countermeasures in Long-Duration Spaceflight", 
        authors: "Dr. Gregory Campbell, Dr. Diane Foster",
        abstract: "Assessment of exercise protocols and pharmaceutical interventions to prevent muscle mass loss in astronauts. Resistance training combined with nutritional supplementation shows best results.",
        keywords: ["muscle atrophy", "countermeasures", "exercise protocols"],
        tags: ["muscle"], 
        year: "2024",
        pages: 47,
        journal: "Sports Medicine in Space"
    },
    { 
        id: 23, 
        filename: "muscle3.pdf",
        title: "Muscle Fiber Type Changes During Spaceflight", 
        authors: "Dr. Harold Barnes, Dr. Sophia Coleman",
        abstract: "Histological analysis of skeletal muscle adaptations to weightlessness. Shift from slow-twitch to fast-twitch fibers observed in prolonged missions.",
        keywords: ["muscle fibers", "histology", "skeletal muscle"],
        tags: ["muscle"], 
        year: "2024",
        pages: 39,
        journal: "Skeletal Muscle Research"
    },
    { 
        id: 24, 
        filename: "muscle4.pdf",
        title: "Sarcopenia Mechanisms in Simulated Microgravity", 
        authors: "Dr. Christine Ward, Dr. Jeffrey Powell",
        abstract: "Ground-based models for studying muscle wasting and potential countermeasures. Bed rest studies provide insights into microgravity-induced sarcopenia.",
        keywords: ["sarcopenia", "muscle wasting", "ground-based studies"],
        tags: ["muscle"], 
        year: "2024",
        pages: 45,
        journal: "Clinical Muscle Studies"
    },
    { 
        id: 25, 
        filename: "muscle5.pdf",
        title: "Metabolic Changes in Spaceflight-Induced Muscle Atrophy", 
        authors: "Dr. Walter Hughes, Dr. Megan Price",
        abstract: "Analysis of metabolic pathways affected during muscle loss in microgravity. Disrupted protein synthesis and enhanced proteolysis identified as key factors.",
        keywords: ["metabolism", "muscle atrophy", "protein synthesis"],
        tags: ["muscle"], 
        year: "2023",
        pages: 42,
        journal: "Metabolism & Physiology"
    },
    { 
        id: 26, 
        filename: "muscle6.pdf",
        title: "Neuromuscular Function in Prolonged Weightlessness", 
        authors: "Dr. Olivia Reed, Dr. Charles Morgan",
        abstract: "Investigation of nerve-muscle communication changes during extended missions. Electromyography studies reveal altered motor unit recruitment patterns.",
        keywords: ["neuromuscular function", "EMG", "motor control"],
        tags: ["muscle"], 
        year: "2023",
        pages: 38,
        journal: "Neuromuscular Disorders"
    },

    // BONE DENSITY (bd1-bd7)
    { 
        id: 27, 
        filename: "bd1.pdf",
        title: "Bone Density Changes During Extended Orbital Missions", 
        authors: "Dr. Joseph Bell, Dr. Barbara King",
        abstract: "Longitudinal study of bone mineral density in crew members during 6-12 month ISS missions. Progressive bone loss documented with advanced DEXA scanning.",
        keywords: ["bone density", "BMD", "osteoporosis"],
        tags: ["bone"], 
        year: "2023",
        pages: 50,
        journal: "Bone Research International"
    },
    { 
        id: 28, 
        filename: "bd2.pdf",
        title: "Osteoporosis Prevention Strategies for Astronauts", 
        authors: "Dr. Edward Murphy, Dr. Sharon Collins",
        abstract: "Clinical trials of bone-protective medications and interventions in space. Bisphosphonates combined with resistance exercise show promising results.",
        keywords: ["osteoporosis prevention", "bone health", "medications"],
        tags: ["bone"], 
        year: "2024",
        pages: 44,
        journal: "Clinical Bone Medicine"
    },
    { 
        id: 29, 
        filename: "bd3.pdf",
        title: "Calcium Metabolism in Weightlessness", 
        authors: "Dr. Frances Cook, Dr. Raymond Bailey",
        abstract: "Mechanisms of bone calcium loss and interventions to maintain bone health. Altered calcium homeostasis contributes to accelerated bone resorption.",
        keywords: ["calcium metabolism", "bone resorption", "homeostasis"],
        tags: ["bone"], 
        year: "2023",
        pages: 41,
        journal: "Mineral Metabolism Journal"
    },
    { 
        id: 30, 
        filename: "bd4.pdf",
        title: "Bone Remodeling Dynamics in Altered Gravity", 
        authors: "Dr. Albert Rivera, Dr. Gloria Stewart",
        abstract: "Real-time monitoring of bone formation and resorption rates in space. Imbalance between osteoblast and osteoclast activity documented.",
        keywords: ["bone remodeling", "osteoblasts", "osteoclasts"],
        tags: ["bone"], 
        year: "2024",
        pages: 48,
        journal: "Bone Physiology Today"
    },
    { 
        id: 31, 
        filename: "bd5.pdf",
        title: "Vertebral Bone Loss in Long-Duration Spaceflight", 
        authors: "Dr. Pamela Morris, Dr. Louis Rogers",
        abstract: "Focused study on spine bone density changes during extended missions. Lumbar vertebrae show highest rates of bone loss.",
        keywords: ["vertebral bone", "spine health", "bone loss"],
        tags: ["bone"], 
        year: "2024",
        pages: 35,
        journal: "Spine Research"
    },
    { 
        id: 32, 
        filename: "bd6.pdf",
        title: "Bisphosphonate Therapy for Space-Induced Osteoporosis", 
        authors: "Dr. Virginia Reed, Dr. Arthur Cox",
        abstract: "Evaluation of bisphosphonate efficacy in preventing bone loss during spaceflight. Zoledronic acid shows superior bone-protective effects.",
        keywords: ["bisphosphonates", "drug therapy", "bone protection"],
        tags: ["bone"], 
        year: "2023",
        pages: 43,
        journal: "Pharmacology in Space"
    },
    { 
        id: 33, 
        filename: "bd7.pdf",
        title: "Trabecular Architecture Changes in Microgravity", 
        authors: "Dr. Russell Howard, Dr. Judith Ward",
        abstract: "High-resolution imaging of bone microarchitecture in astronauts. Significant deterioration of trabecular bone structure observed.",
        keywords: ["trabecular bone", "bone microarchitecture", "imaging"],
        tags: ["bone"], 
        year: "2024",
        pages: 46,
        journal: "Bone Imaging & Analysis"
    },

    // PLANT BIOLOGY (PB1-PB7)
    { 
        id: 34, 
        filename: "PB1.pdf",
        title: "Plant Growth Experiments in Reduced Gravity", 
        authors: "Dr. Dorothy Butler, Dr. Carl Peterson",
        abstract: "Examining root development, nutrient uptake, and photosynthesis efficiency in space-grown plants. Veggie experiments provide insights for sustainable space agriculture.",
        keywords: ["plant growth", "space agriculture", "root development"],
        tags: ["plants", "microgravity"], 
        year: "2024",
        pages: 54,
        journal: "Plant Science in Space"
    },
    { 
        id: 35, 
        filename: "PB2.pdf",
        title: "Plant-Based Life Support Systems for Mars", 
        authors: "Dr. Henry Richardson, Dr. Joyce Cooper",
        abstract: "Development of closed-loop agricultural systems using space-adapted plants. Bioregenerative life support systems for long-duration missions.",
        keywords: ["life support", "bioregenerative systems", "Mars missions"],
        tags: ["plants"], 
        year: "2024",
        pages: 61,
        journal: "Astrobotany Review"
    },
    { 
        id: 36, 
        filename: "PB3.pdf",
        title: "Photosynthetic Efficiency in Space-Grown Crops", 
        authors: "Dr. Deborah Jenkins, Dr. Ryan Perry",
        abstract: "Optimizing light conditions for maximum plant productivity in space agriculture. LED spectrum optimization improves crop yields in controlled environments.",
        keywords: ["photosynthesis", "LED lighting", "crop productivity"],
        tags: ["plants"], 
        year: "2024",
        pages: 37,
        journal: "Photosynthesis Research"
    },
    { 
        id: 37, 
        filename: "PB4.pdf",
        title: "Gravitropism Mechanisms in Microgravity", 
        authors: "Dr. Alice Watson, Dr. Justin Brooks",
        abstract: "Study of plant orientation and growth responses in the absence of gravity. Molecular mechanisms of gravitropism investigated at cellular level.",
        keywords: ["gravitropism", "plant orientation", "growth responses"],
        tags: ["plants", "microgravity"], 
        year: "2023",
        pages: 40,
        journal: "Plant Physiology Quarterly"
    },
    { 
        id: 38, 
        filename: "PB5.pdf",
        title: "Seed Germination in Space Environments", 
        authors: "Dr. Willie Bennett, Dr. Theresa Gray",
        abstract: "Analysis of seed viability and germination rates in microgravity. Understanding early plant development crucial for space agriculture.",
        keywords: ["seed germination", "plant development", "viability"],
        tags: ["plants"], 
        year: "2023",
        pages: 33,
        journal: "Seed Science & Technology"
    },
    { 
        id: 39, 
        filename: "PB6.pdf",
        title: "Nutritional Content of Space-Grown Vegetables", 
        authors: "Dr. Eugene Powell, Dr. Brenda Long",
        abstract: "Comparative analysis of vitamin and mineral content in ISS-grown produce. Space-grown vegetables show comparable nutritional value to Earth controls.",
        keywords: ["nutrition", "vegetables", "vitamin content"],
        tags: ["plants"], 
        year: "2024",
        pages: 36,
        journal: "Food Science in Space"
    },
    { 
        id: 40, 
        filename: "PB7.pdf",
        title: "Hydroponic Systems for Extraterrestrial Agriculture", 
        authors: "Dr. Ruby Sanders, Dr. Fred Kelly",
        abstract: "Engineering advanced hydroponic systems for planetary habitats. Water recycling and nutrient delivery optimization for space farming.",
        keywords: ["hydroponics", "water recycling", "agricultural engineering"],
        tags: ["plants"], 
        year: "2024",
        pages: 49,
        journal: "Agricultural Engineering Today"
    }
];

let filteredDocuments = [...documents];

document.addEventListener('DOMContentLoaded', () => {
    renderDocuments(filteredDocuments);
    setupFilters();
    setupSorting();
    setupMobileFilters();
});

function renderDocuments(docs) {
    const grid = document.getElementById('documentsGrid');
    const emptyState = document.getElementById('emptyState');
    const resultsCount = document.getElementById('resultsCount');

    if (docs.length === 0) {
        grid.style.display = 'none';
        emptyState.style.display = 'block';
        resultsCount.textContent = 'No documents found';
        return;
    }

    grid.style.display = 'grid';
    emptyState.style.display = 'none';
    resultsCount.textContent = `Showing ${docs.length} document${docs.length !== 1 ? 's' : ''}`;

    grid.innerHTML = docs.map(doc => `
        <div class="document-card">
            <div class="document-preview">📄</div>
            <div class="document-content">
                <div class="document-number">#${doc.id} — ${doc.filename}</div>
                <h3 class="document-title">${doc.title}</h3>
                <p class="document-snippet">${doc.abstract.substring(0, 120)}...</p>
                <div class="document-tags">
                    ${doc.tags.map(tag => `<span class="document-tag">${tag}</span>`).join('')}
                    <span class="document-tag">${doc.year}</span>
                </div>
                <a href="document-detail.html?id=${doc.id}" class="document-link">View Document →</a>
            </div>
        </div>
    `).join('');
}

function setupFilters() {
    const filterInputs = document.querySelectorAll('.filter-option input[type="checkbox"]');
    const clearBtn = document.getElementById('clearFilters');

    filterInputs.forEach(input => {
        input.addEventListener('change', applyFilters);
    });

    clearBtn.addEventListener('click', () => {
        filterInputs.forEach(input => input.checked = false);
        applyFilters();
    });
}

function applyFilters() {
    const topicFilters = Array.from(document.querySelectorAll('input[name="topic"]:checked')).map(el => el.value);
    const yearFilters = Array.from(document.querySelectorAll('input[name="year"]:checked')).map(el => el.value);

    filteredDocuments = documents.filter(doc => {
        const matchesTopic = topicFilters.length === 0 || topicFilters.some(topic => doc.tags.includes(topic));
        const matchesYear = yearFilters.length === 0 || yearFilters.includes(doc.year);
        return matchesTopic && matchesYear;
    });

    renderDocuments(filteredDocuments);
}

function setupSorting() {
    const sortSelect = document.getElementById('sortSelect');

    sortSelect.addEventListener('change', (e) => {
        const sortBy = e.target.value;
        let sorted = [...filteredDocuments];

        switch (sortBy) {
            case 'newest':
                sorted.sort((a, b) => b.year.localeCompare(a.year));
                break;
            case 'oldest':
                sorted.sort((a, b) => a.year.localeCompare(b.year));
                break;
            case 'title':
                sorted.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'relevance':
                sorted.sort((a, b) => a.id - b.id);
                break;
        }

        renderDocuments(sorted);
    });
}

function setupMobileFilters() {
    const filterToggle = document.getElementById('filterToggle');
    const sidebar = document.getElementById('filtersSidebar');

    if (filterToggle) {
        filterToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!filterToggle.contains(e.target) && !sidebar.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        });
    }
}

// Export documents for use in document-detail.html
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { documents };
}