# Timeline App  

## Task 4: Event Modal Integration  

This is the fourth stage of the Timeline App project.  

### Features Included:  
- **Event Modal**: A modal popup to display detailed event information (title, description, date, year, and category).  
- **Interactive Event Cards**: Clicking an event card opens the modal with its corresponding details.  
- **Modal Controls**:  
  - Close button (`×`) to dismiss the modal.  
  - Clicking outside the modal also closes it.  
- **TypeScript Integration**:  
  - Added `EventData` interface in `types.ts` to strongly type event objects.  
  - Improved maintainability and type safety across the project.  
- **Project Structure**: Ensured all source files remain under the `src/` directory with `rootDir` properly configured.  
- **Code Organization**:  
  - `modal.ts` handles modal setup and interactions.  
  - `index.ts` integrates modal functionality with event rendering.  