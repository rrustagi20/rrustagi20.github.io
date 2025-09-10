// Global Website Visit Counter
(function() {
    'use strict';
    
    // Configuration
    const STORAGE_KEY = 'rahul-website-visits';
    const SESSION_KEY = 'rahul-session-visit';
    
    // Check if this is a new session (to avoid counting multiple page views in same session)
    function isNewSession() {
        return !sessionStorage.getItem(SESSION_KEY);
    }
    
    // Update global visit counter
    function updateGlobalVisitCount() {
        if (isNewSession()) {
            // Mark this session as counted
            sessionStorage.setItem(SESSION_KEY, 'true');
            
            // Get current visit count
            let visitCount = localStorage.getItem(STORAGE_KEY);
            if (!visitCount) {
                visitCount = 0;
            }
            
            // Increment and store
            visitCount = parseInt(visitCount) + 1;
            localStorage.setItem(STORAGE_KEY, visitCount);
            
            // Log for debugging (remove in production)
            console.log('New visitor! Total visits:', visitCount);
        }
    }
    
    // Get current visit count
    function getVisitCount() {
        const count = localStorage.getItem(STORAGE_KEY);
        return count ? parseInt(count) : 0;
    }
    
    // Animate counter display
    function animateCounter(element, targetCount) {
        let currentCount = 0;
        const increment = Math.max(1, Math.floor(targetCount / 50));
        
        const timer = setInterval(function() {
            currentCount += increment;
            if (currentCount >= targetCount) {
                element.textContent = targetCount.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = currentCount.toLocaleString();
            }
        }, 30);
    }
    
    // Initialize when DOM is ready
    function init() {
        // Update visit count
        updateGlobalVisitCount();
        
        // Update any visit counter displays on the page
        const counterElements = document.querySelectorAll('#visit-counter, .visit-counter');
        const visitCount = getVisitCount();
        
        counterElements.forEach(element => {
            if (visitCount > 0) {
                animateCounter(element, visitCount);
            } else {
                element.textContent = '0';
            }
        });
    }
    
    // Run when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Expose function globally for manual updates
    window.RahulVisitCounter = {
        getCount: getVisitCount,
        reset: function() {
            localStorage.removeItem(STORAGE_KEY);
            sessionStorage.removeItem(SESSION_KEY);
        }
    };
})(); 