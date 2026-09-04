import { useEffect } from 'react';

const useCopyProtection = () => {
  useEffect(() => {
    // ==========================================
    // 1. DISABLE RIGHT CLICK
    // ==========================================
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // ==========================================
    // 2. DISABLE KEYBOARD SHORTCUTS
    // ==========================================
    const handleKeyDown = (e) => {
      const protectedKeys = ['c', 'u', 's', 'a', 'p', 'v', 'x'];
      
      if (
        (e.ctrlKey && protectedKeys.includes(e.key.toLowerCase())) ||
        (e.metaKey && protectedKeys.includes(e.key.toLowerCase()))
      ) {
        e.preventDefault();
        return false;
      }

      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }

      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
      }

      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        return false;
      }

      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        return false;
      }

      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
      }

      // ==========================================
      // DISABLE PRINT SCREEN (SS)
      // ==========================================
      if (e.key === 'PrintScreen') {
        e.preventDefault();
        return false;
      }

      // ==========================================
      // DISABLE WINDOWS + SHIFT + S (Snipping Tool)
      // ==========================================
      if (e.key === 'S' && e.metaKey && e.shiftKey) {
        e.preventDefault();
        return false;
      }

      // ==========================================
      // DISABLE WINDOWS + SHIFT + R (Screen Recorder)
      // ==========================================
      if (e.key === 'R' && e.metaKey && e.shiftKey) {
        e.preventDefault();
        return false;
      }

      // ==========================================
      // DISABLE WINDOWS + G (Xbox Game Bar - Screen Recording)
      // ==========================================
      if (e.key === 'G' && e.metaKey) {
        e.preventDefault();
        return false;
      }

      // ==========================================
      // DISABLE ALT + PRINT SCREEN
      // ==========================================
      if (e.key === 'PrintScreen' && e.altKey) {
        e.preventDefault();
        return false;
      }

      // ==========================================
      // DISABLE CTRL + PRINT SCREEN
      // ==========================================
      if (e.key === 'PrintScreen' && e.ctrlKey) {
        e.preventDefault();
        return false;
      }

      return true;
    };

    // ==========================================
    // 3. DISABLE COPY, CUT, PASTE
    // ==========================================
    const handleCopy = (e) => {
      e.preventDefault();
      return false;
    };

    const handleCut = (e) => {
      e.preventDefault();
      return false;
    };

    const handlePaste = (e) => {
      e.preventDefault();
      return false;
    };

    // ==========================================
    // 4. DISABLE DRAG AND DROP
    // ==========================================
    const handleDragStart = (e) => {
      e.preventDefault();
      return false;
    };

    const handleDrop = (e) => {
      e.preventDefault();
      return false;
    };

    // ==========================================
    // 5. DISABLE TEXT SELECTION
    // ==========================================
    const handleSelectStart = (e) => {
      e.preventDefault();
      return false;
    };

    // ==========================================
    // 6. IMAGE PROTECTION
    // ==========================================
    const handleImageContextMenu = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    };

    // ==========================================
    // 7. CONSOLE WATERMARK
    // ==========================================
    const addConsoleWatermark = () => {
      console.clear();
      console.log('%c ═══════════════════════════════════════════', 'font-size:16px; color:#FF6B35;');
      console.log('%c   🛑 TRANS NOVA SOLUTIONS - PROTECTED', 'font-size:20px; font-weight:bold; color:#FF6B35;');
      console.log('%c ═══════════════════════════════════════════', 'font-size:16px; color:#FF6B35;');
      console.log('%c   All content is protected by copyright law.', 'font-size:14px; color:#888;');
      console.log('%c   Unauthorized copying is prohibited.', 'font-size:14px; color:#888;');
      console.log('%c ═══════════════════════════════════════════', 'font-size:16px; color:#FF6B35;');
    };

    // ==========================================
    // 8. PREVENT SCREEN CAPTURE (CSS)
    // ==========================================
    const preventScreenCapture = () => {
      // Add CSS to prevent screen capture
      const style = document.createElement('style');
      style.id = 'prevent-screen-capture';
      style.textContent = `
        /* Prevent screen capture on elements */
        * {
          -webkit-touch-callout: none !important;
          -webkit-user-select: none !important;
          -webkit-tap-highlight-color: transparent !important;
        }
        
        /* Prevent selection on images */
        img {
          -webkit-user-drag: none !important;
          user-drag: none !important;
          -webkit-user-select: none !important;
          user-select: none !important;
          pointer-events: none !important;
        }
        
        /* Blur content when printing */
        @media print {
          body * {
            display: none !important;
          }
          body::after {
            content: "🛑 Printing is not allowed on this website" !important;
            display: block !important;
            font-size: 24px !important;
            color: red !important;
            text-align: center !important;
            margin-top: 50px !important;
            font-family: Arial, sans-serif !important;
            font-weight: bold !important;
          }
        }
      `;
      document.head.appendChild(style);
    };

    // ==========================================
    // 9. PREVENT SCREEN CAPTURE VIA VISIBILITY API
    // ==========================================
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // When tab is hidden, we can add extra protection
        document.body.style.opacity = '0.01';
      } else {
        document.body.style.opacity = '1';
      }
    };

    // ==========================================
    // 10. PREVENT PASTE IN INPUTS (Optional)
    // ==========================================
    const handleInputPaste = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        e.preventDefault();
        return false;
      }
    };

    // ==========================================
    // REGISTER ALL EVENTS
    // ==========================================
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCut);
    document.addEventListener('paste', handlePaste);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('drop', handleDrop);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('contextmenu', handleImageContextMenu);
    document.addEventListener('paste', handleInputPaste);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Add CSS protection
    preventScreenCapture();

    // Add console watermark
    addConsoleWatermark();

    // ==========================================
    // CLEANUP
    // ==========================================
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCut);
      document.removeEventListener('paste', handlePaste);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('drop', handleDrop);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('contextmenu', handleImageContextMenu);
      document.removeEventListener('paste', handleInputPaste);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      // Remove CSS
      const style = document.getElementById('prevent-screen-capture');
      if (style) style.remove();
    };
  }, []);
};

export default useCopyProtection;