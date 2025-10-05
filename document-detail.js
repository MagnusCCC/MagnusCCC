// PDF.js setup
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;
let scale = 1.5;
let currentDoc = null;

// Get document ID from URL
const urlParams = new URLSearchParams(window.location.search);
const docId = parseInt(urlParams.get('id'));

// Load document data
document.addEventListener('DOMContentLoaded', () => {
    loadDocumentData();
    setupViewToggle();
});

function loadDocumentData() {
    // Find document from library.js documents array
    currentDoc = documents.find(doc => doc.id === docId);
    
    if (!currentDoc) {
        document.getElementById('docTitle').textContent = 'Document not found';
        return;
    }

    // Populate metadata
    document.getElementById('docNumber').textContent = `#${currentDoc.id} — ${currentDoc.filename}`;
    document.getElementById('docTitle').textContent = currentDoc.title;
    document.getElementById('docAuthors').textContent = currentDoc.authors;
    document.getElementById('docAbstract').textContent = currentDoc.abstract;
    document.getElementById('docAuthorsInfo').textContent = currentDoc.authors;
    document.getElementById('docJournal').textContent = currentDoc.journal;
    document.getElementById('docYear').textContent = currentDoc.year;
    document.getElementById('docPages').textContent = currentDoc.pages;
    document.getElementById('docFilename').textContent = currentDoc.filename;

    // Populate tags
    const headerTags = document.getElementById('headerTags');
    headerTags.innerHTML = currentDoc.tags.map(tag => 
        `<span class="tag">${tag}</span>`
    ).join('');

    // Populate keywords
    const keywordsContainer = document.getElementById('docKeywords');
    keywordsContainer.innerHTML = currentDoc.keywords.map(keyword => 
        `<span class="keyword-tag">${keyword}</span>`
    ).join('');

    // Load related documents
    loadRelatedDocuments();

    // Load PDF
    loadPDF();

    // Setup download button
    setupDownloadButton();
}

function loadPDF() {
    const pdfPath = `pdfs/${currentDoc.filename}`;
    
    pdfjsLib.getDocument(pdfPath).promise.then(pdf => {
        pdfDoc = pdf;
        document.getElementById('pageCount').textContent = pdf.numPages;
        document.getElementById('pdfLoading').style.display = 'none';
        renderPage(pageNum);
        setupPDFControls();
    }).catch(error => {
        console.error('Error loading PDF:', error);
        document.getElementById('pdfLoading').innerHTML = `
            <p style="color: #ff6b6b;">⚠️ PDF file not found</p>
            <p style="font-size: 14px; margin-top: 10px;">Please download ${currentDoc.filename} <br>red from the library to view the PDF</p>
        `;
    });
}

function renderPage(num) {
    pageRendering = true;
    
    pdfDoc.getPage(num).then(page => {
        const canvas = document.getElementById('pdfCanvas');
        const ctx = canvas.getContext('2d');
        
        // Use device pixel ratio for crisp rendering
        const outputScale = window.devicePixelRatio || 1;
        const viewport = page.getViewport({ scale: scale });

        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = Math.floor(viewport.width) + "px";
        canvas.style.height = Math.floor(viewport.height) + "px";

        const transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;

        const renderContext = {
            canvasContext: ctx,
            viewport: viewport,
            transform: transform
        };

        const renderTask = page.render(renderContext);

        renderTask.promise.then(() => {
            pageRendering = false;
            if (pageNumPending !== null) {
                renderPage(pageNumPending);
                pageNumPending = null;
            }
        });
    });

    document.getElementById('pageNum').textContent = num;
}

function queueRenderPage(num) {
    if (pageRendering) {
        pageNumPending = num;
    } else {
        renderPage(num);
    }
}

function setupPDFControls() {
    // Previous page
    document.getElementById('prevPage').addEventListener('click', () => {
        if (pageNum <= 1) return;
        pageNum--;
        queueRenderPage(pageNum);
    });

    // Next page
    document.getElementById('nextPage').addEventListener('click', () => {
        if (pageNum >= pdfDoc.numPages) return;
        pageNum++;
        queueRenderPage(pageNum);
    });

    // Zoom in
    document.getElementById('zoomIn').addEventListener('click', () => {
        if (scale >= 3) return;
        scale += 0.25;
        document.getElementById('zoomLevel').textContent = Math.round(scale * 100) + '%';
        queueRenderPage(pageNum);
    });

    // Zoom out
    document.getElementById('zoomOut').addEventListener('click', () => {
        if (scale <= 0.5) return;
        scale -= 0.25;
        document.getElementById('zoomLevel').textContent = Math.round(scale * 100) + '%';
        queueRenderPage(pageNum);
    });
}

function setupDownloadButton() {
    const downloadBtn = document.getElementById('downloadBtn');
    
    downloadBtn.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = `pdfs/${currentDoc.filename}`;
        link.download = currentDoc.filename;
        link.click();
    });
}

function setupViewToggle() {
    const toggleBtn = document.getElementById('toggleViewBtn');
    const pdfSection = document.getElementById('pdfViewerSection');
    const metadataSection = document.getElementById('metadataSection');
    const viewModeText = document.getElementById('viewModeText');
    
    let showingPDF = true;

    toggleBtn.addEventListener('click', () => {
        if (showingPDF) {
            pdfSection.style.display = 'none';
            metadataSection.style.display = 'block';
            viewModeText.textContent = 'Switch to PDF';
            showingPDF = false;
        } else {
            pdfSection.style.display = 'block';
            metadataSection.style.display = 'none';
            viewModeText.textContent = 'Switch to Metadata';
            showingPDF = true;
        }
    });
}

function loadRelatedDocuments() {
    // Find related documents with similar tags
    const relatedDocs = documents
        .filter(doc => 
            doc.id !== currentDoc.id && 
            doc.tags.some(tag => currentDoc.tags.includes(tag))
        )
        .slice(0, 3);

    const relatedContainer = document.getElementById('relatedDocs');
    
    if (relatedDocs.length === 0) {
        relatedContainer.innerHTML = '<p style="color: #888;">No related documents found</p>';
        return;
    }

    relatedContainer.innerHTML = relatedDocs.map(doc => `
        <a href="document-detail.html?id=${doc.id}" class="related-doc-card">
            <div class="related-icon">📄</div>
            <div class="related-info">
                <h4>${doc.title}</h4>
                <p>${doc.filename}</p>
            </div>
        </a>
    `).join('');
}