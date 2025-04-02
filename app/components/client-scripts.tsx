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
      console.log("Running fixAudioPaths...");
      const audioElements = document.querySelectorAll('audio');
      console.log(`Found ${audioElements.length} audio elements`);
      
      audioElements.forEach((audio, index) => {
        try {
          // Skip already fixed audio elements
          if (audio.dataset.pathFixed) {
            console.log(`Audio #${index} already fixed, skipping`);
            return;
          }
          
          console.log(`Fixing audio #${index}:`, audio);
          
          // Check if this is a direct src on the audio element
          const audioSrc = audio.getAttribute('src');
          if (audioSrc) {
            console.log(`Audio #${index} has direct src: ${audioSrc}`);
            
            if (!audioSrc.includes('/vocal-coachingg/')) {
              // Extract filename
              const baseName = audioSrc.split('/').pop();
              if (baseName) {
                const newSrc = getMediaPath(baseName);
                console.log(`Fixing audio src: ${audioSrc} -> ${newSrc}`);
                audio.setAttribute('src', newSrc);
              }
            }
          }
          
          // Also check for source elements
          const sources = audio.querySelectorAll('source');
          console.log(`Audio #${index} has ${sources.length} source elements`);
          
          sources.forEach((source, sourceIndex) => {
            const src = source.getAttribute('src');
            if (src) {
              console.log(`Source #${sourceIndex} has src: ${src}`);
              
              if (!src.includes('/vocal-coachingg/')) {
                // Extract filename
                const baseName = src.split('/').pop();
                if (baseName) {
                  const newSrc = getMediaPath(baseName);
                  console.log(`Fixing source src: ${src} -> ${newSrc}`);
                  source.setAttribute('src', newSrc);
                }
              }
            }
          });
          
          // Mark as fixed
          audio.dataset.pathFixed = 'true';
          
          // Reload the audio
          console.log(`Reloading audio #${index}`);
          audio.load();
          
          // Play if it's supposed to autoplay
          if (audio.getAttribute('autoplay') === 'true' || audio.autoplay) {
            console.log(`Audio #${index} has autoplay, attempting to play`);
            audio.play().catch(err => {
              console.error(`Error playing fixed audio #${index}:`, err);
            });
          }
        } catch (err) {
          console.error(`Error fixing audio #${index}:`, err);
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