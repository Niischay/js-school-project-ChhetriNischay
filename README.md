# Timeline App  

## Task 5: Dark Mode Support  

This is the fifth stage of the Timeline App project.  

### Features Included:  
- **Dark Mode Toggle**:  
  - Added a toggle button to switch between light and dark themes.  
  - Dark mode preferences are saved using `localStorage` to persist across sessions.  

- **Styling Updates**:  
  - Defined `:root` CSS variables for both light and dark themes.  
  - Event years now display in **white** for better visibility in dark mode.  
  - Ensured consistent contrast for text and backgrounds across both themes.  

- **Code Organization**:  
  - `theme.ts` manages dark mode state, toggling, and persistence.  
  - Updated `style.css` to include both light and dark theme rules.  

- **User Experience**:  
  - Seamless switching between themes.  
  - Enhanced readability in dark environments.  
