"use client"

// We put the "use client" directive here instead of in layout.tsx
export default function ClientScripts() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Set scrollRestoration to auto - let the browser handle it naturally
            if ('scrollRestoration' in history) {
              history.scrollRestoration = 'auto';
            }
            
            // ULTRA-SIMPLE EMERGENCY FIX
            document.addEventListener('DOMContentLoaded', function() {
              let savedScrollY = 0;
              
              // Check for modals and handle scroll locking
              function checkForModals() {
                const hasModal = document.querySelector('[role="dialog"], .modal, .fixed.inset-0');
                const isLocked = document.body.classList.contains('modal-open');
                
                if (hasModal && !isLocked) {
                  // Save position and lock
                  savedScrollY = window.scrollY;
                  document.body.classList.add('modal-open');
                  document.body.style.overflow = 'hidden';
                  document.body.style.height = '100%';
                  document.body.style.position = 'relative';
                } 
                else if (!hasModal && isLocked) {
                  // Unlock
                  document.body.classList.remove('modal-open');
                  document.body.style.overflow = '';
                  document.body.style.height = '';
                  document.body.style.position = '';
                  
                  // Restore scroll position directly
                  window.scrollTo(0, savedScrollY);
                }
              }
              
              // Initialize any MutationObservers here properly
              if (typeof MutationObserver !== 'undefined' && document.body) {
                // Safe to use MutationObserver now
                const observer = new MutationObserver(checkForModals);
                
                observer.observe(document.body, {
                  childList: true,
                  subtree: true
                });
              }
              
              // Also check on page load
              checkForModals();
            });
          `,
        }}
      />
    </>
  );
} 