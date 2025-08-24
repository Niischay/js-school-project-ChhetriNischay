# Accessibility Features

This document outlines the accessibility features implemented in the Timeline App.

## Keyboard Navigation

- **Timeline Markers**: All event markers are accessible via Tab key navigation
- **Modal Interaction**: 
  - Modal can be opened by pressing Enter or Space on a marker
  - Modal can be closed with Escape key
  - Focus is trapped within the modal when open
  - Focus returns to the triggering element when modal closes
- **Focus Indicators**: All interactive elements have visible focus styles

## Screen Reader Support

- **ARIA Roles**: Proper ARIA roles implemented (dialog, list, listitem)
- **ARIA Attributes**: 
  - `aria-label` for buttons without text content
  - `aria-current` for the selected timeline marker
  - `aria-modal` and `aria-labelledby` for the modal
- **Semantic HTML**: Appropriate HTML elements used for better screen reader interpretation

## Color Contrast

- All text elements meet WCAG AA contrast requirements (≥4.5:1)
- Focus indicators have sufficient contrast against background
- Color is not used as the only visual means of conveying information

## Additional Features

- **Skip Link**: Added skip link for keyboard users to jump to main content
- **Reduced Motion**: Consider implementing prefers-reduced-motion in future updates
- **Text Scaling**: Layout designed to work well with text scaling up to 200%

## Testing

The application has been tested with:
- Keyboard-only navigation
- Screen readers (NVDA, VoiceOver)
- Browser accessibility audits
- Color contrast checkers

## Future Improvements

- Add support for prefers-reduced-motion
- Implement more comprehensive screen reader announcements
- Add language attribute to HTML element
- Provide alternative text for any future images