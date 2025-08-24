# Timeline App  

## Task 6: Accessibility Improvements  

This is the sixth stage of the Timeline App project.  

### Features Included:  
- **ARIA Roles and Attributes**:  
  - Added `role="dialog"` for the modal to ensure assistive technology support.  
  - Used `aria-current="true"` on the active timeline marker.  
  - Added proper ARIA labels to buttons and interactive elements.  

- **Focus Management**:  
  - Implemented **focus trapping** inside the modal when open.  
  - Ensured focus **returns to the triggering marker** after closing the modal.  

- **Keyboard Navigation**:  
  - Timeline markers are accessible using **Tab** and **Arrow keys**.  
  - Modal can be closed using the **Esc key**.  

- **Colour Contrast & WCAG Compliance**:  
  - Verified colour contrast meets **WCAG AA** standards (≥4.5:1 for text).  
  - Ensured all UI elements meet accessibility guidelines.  

- **Code Organization**:  
  - Accessibility logic included in `modal.ts` and `timeline.ts`.  
  - Created a separate `ACCESSIBILITY.md` file documenting all improvements.  

- **User Experience**:  
  - Improved accessibility for users with disabilities.  
  - Ensures consistent usability across screen readers, keyboard navigation, and visual modes.  
