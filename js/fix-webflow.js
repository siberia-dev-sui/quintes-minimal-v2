
/**
 * Fix Webflow Interactions and Visibility
 * 
 * This script attempts to:
 * 1. Re-initialize Webflow interactions (ix2).
 * 2. Force hidden elements (opacity: 0) to be visible if interactions fail.
 */

(function () {
    console.log("Fix Webflow script loaded.");

    function fixWebflow() {
        console.log("Attempting to fix Webflow...");

        // 1. Check if Webflow is loaded
        if (window.Webflow) {
            console.log("Webflow object found.");

            // Attempt to re-initialize interactions
            try {
                window.Webflow.require('ix2').init();
                console.log("Webflow ix2 re-initialized.");
            } catch (e) {
                console.warn("Failed to re-initialize Webflow ix2:", e);
            }
        } else {
            console.warn("Webflow object NOT found.");
        }

        // 2. Fallback: Force visibility for elements stuck at opacity: 0
        // We wait a bit to let the official script try first
        setTimeout(() => {
            console.log("Running visibility fallback check...");

            // Select elements that might be hidden by Webflow interactions
            // Common selectors for Webflow animations
            const hiddenElements = document.querySelectorAll('[data-w-id], [style*="opacity: 0"], [style*="opacity:0"]');

            let fixedCount = 0;
            hiddenElements.forEach(el => {
                const style = window.getComputedStyle(el);
                if (style.opacity === '0' || el.style.opacity === '0') {
                    // Force visibility
                    el.style.opacity = '1';
                    el.style.transform = 'none'; // Reset transforms that might be moving it off-screen
                    el.style.transition = 'opacity 0.5s ease'; // Add a smooth transition
                    fixedCount++;
                }
            });

            if (fixedCount > 0) {
                console.log(`Fixed ${fixedCount} hidden elements.`);
            } else {
                console.log("No hidden elements found to fix.");
            }

        }, 1000); // Run after 1 second
    }

    // Run on load
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        fixWebflow();
    } else {
        window.addEventListener('DOMContentLoaded', fixWebflow);
        window.addEventListener('load', fixWebflow); // Double check on load
    }

})();
