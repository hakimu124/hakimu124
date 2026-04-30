// ===== 3D Viewer =====

const viewerModal = document.getElementById('viewerModal');
const viewerClose = document.getElementById('viewerClose');
const foodViewer = document.getElementById('foodViewer');
const viewerProgress = document.getElementById('viewerProgress');

// Open Viewer Modal
window.openViewerModal = function(itemName, modelFile) {
    if (!viewerModal) return;

    const viewerTitle = document.getElementById('viewerTitle');
    const foodViewer = document.getElementById('foodViewer');

    if (viewerTitle) viewerTitle.textContent = itemName;
    if (foodViewer) foodViewer.src = `assets/models/${modelFile}`;

    const viewerProgress = document.getElementById('viewerProgress');
    if (viewerProgress) viewerProgress.classList.remove('hidden');

    viewerModal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

// Close Viewer
window.closeViewer = function() {
    if (!viewerModal) return;
    viewerModal.classList.remove('active');
    document.body.style.overflow = '';
};

// Close on backdrop click
if (viewerModal) {
    viewerModal.addEventListener('click', (e) => {
        if (e.target === viewerModal) {
            closeViewer();
        }
    });
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && viewerModal && viewerModal.classList.contains('active')) {
        closeViewer();
    }
});

// Model loading
if (foodViewer) {
    foodViewer.addEventListener('load', () => {
        const viewerProgress = document.getElementById('viewerProgress');
        if (viewerProgress) viewerProgress.classList.add('hidden');
    });

    foodViewer.addEventListener('error', () => {
        const viewerProgress = document.getElementById('viewerProgress');
        if (viewerProgress) {
            viewerProgress.innerHTML = '<span style="color: var(--gray-light);">3D preview loading...</span>';
            setTimeout(() => {
                viewerProgress.classList.add('hidden');
            }, 2000);
        }
    });
}

// Auto-rotate toggle
window.toggleAutoRotate = function() {
    const foodViewer = document.getElementById('foodViewer');
    const btn = document.getElementById('autoRotateBtn');
    if (foodViewer) {
        foodViewer.autoRotate = !foodViewer.autoRotate;
        if (btn) {
            btn.classList.toggle('active', foodViewer.autoRotate);
        }
    }
};

// Reset camera
window.resetCamera = function() {
    const foodViewer = document.getElementById('foodViewer');
    if (foodViewer) {
        foodViewer.cameraControls = false;
        setTimeout(() => {
            foodViewer.cameraControls = true;
        }, 100);
    }
};

// Request AR
window.requestAR = function() {
    const foodViewer = document.getElementById('foodViewer');
    if (foodViewer && foodViewer.canActivateAR) {
        foodViewer.activateAR();
    } else {
        alert('AR is not supported on this device. Please try on a mobile device.');
    }
};