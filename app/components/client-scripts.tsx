"use client"

import { useEffect } from 'react';
import { getMediaPath } from '@/app/utils/asset-path';

// We put the "use client" directive here instead of in layout.tsx
export default function ClientScripts() {
  useEffect(() => {
    // Set scrollRestoration to auto - let the browser handle it naturally
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'auto';
    }
    
    // Fix audio elements with incorrect paths
    function fixAudioPaths() {
      const audioElements = document.querySelectorAll('audio');
      audioElements.forEach(audio => {
        // Skip already fixed audio elements
        if (audio.dataset.pathFixed) return;
        
        const sources = audio.querySelectorAll('source');
        sources.forEach(source => {
          const src = source.getAttribute('src');
          if (src && !src.includes('/vocal-coachingg/') && src.startsWith('/')) {
            // Clean up the path to just the filename
            const baseName = src.split('/').pop();
            if (baseName) {
              const newSrc = getMediaPath(baseName);
              console.log(`Fixing audio source path: ${src} -> ${newSrc}`);
              source.setAttribute('src', newSrc);
            }
          }
        });
        
        // Also fix direct src attributes on audio elements
        const audioSrc = audio.getAttribute('src');
        if (audioSrc && !audioSrc.includes('/vocal-coachingg/') && audioSrc.startsWith('/')) {
          const baseName = audioSrc.split('/').pop();
          if (baseName) {
            const newSrc = getMediaPath(baseName);
            console.log(`Fixing audio element src: ${audioSrc} -> ${newSrc}`);
            audio.setAttribute('src', newSrc);
          }
        }
        
        // Mark as fixed
        audio.dataset.pathFixed = 'true';
        
        // Reload the audio if needed
        if (audio.getAttribute('autoplay') === 'true' || audio.autoplay) {
          audio.load();
          audio.play().catch(err => console.error('Error playing fixed audio:', err));
        } else {
          audio.load();
        }
      });
    }
    
    // Initialize safe DOM manipulation after hydration
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
      const observer = new MutationObserver((mutations) => {
        checkForModals();
        fixAudioPaths(); // Fix any new audio elements
      });
      
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
    
    // Also check on page load
    checkForModals();
    fixAudioPaths(); // Fix initial audio elements
  }, []); // Empty dependency array means this runs once after mount

  // Return null since we don't need to render anything
  return null;
} 