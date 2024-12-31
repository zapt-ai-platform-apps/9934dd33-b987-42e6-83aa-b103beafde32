# Design Details

## Color Palette

- **Primary**: #1D4ED8
- **Secondary**: #9333EA
- **Accent**: #F59E0B
- **Neutral**: #374151
- **Background**: #F3F4F6
- **Text**: #111827

## Fonts

- **Primary Font**: Inter, sans-serif

## Components Design

- **Buttons**:
  - Background color: Primary
  - Text color: White
  - Hover state: Darker shade of primary
  - Active state: Even darker shade
  - Cursor: Pointer

- **Inputs**:
  - Border: 1px solid neutral
  - Padding: px-2 py-1
  - Box Model: Box-border
  - Focus state: Border changes to primary

- **Cards**:
  - Background: White
  - Border: 1px solid neutral
  - Shadow: Subtle shadow for depth
  - Rounded corners

## Layout

- **Spacing**:
  - Consistent padding and margin using Tailwind's spacing scale
- **Sizing**:
  - Responsive widths and heights using Tailwind's utility classes
- **Responsiveness**:
  - Mobile-first design utilizing Tailwind's responsive utilities
- **Accessibility**:
  - Ensure sufficient color contrast
  - Focus states for interactive elements
  - ARIA attributes where necessary

## Transitions

- Smooth transitions for hover and focus states using Tailwind's transition utilities.
- Example: `transition-colors duration-200 ease-in-out`

## Mobile Responsiveness

- Utilize Flexbox and Grid layouts for adaptable designs.
- Use Tailwind's responsive prefixes (e.g., `sm:`, `md:`, `lg:`) to adjust layouts at different breakpoints.
- Ensure touch-friendly elements with adequate sizing and spacing.

## Additional Design Elements

- **Badge**:
  - Positioned at the footer
  - Text: "Made on ZAPT"
  - Link to [www.zapt.ai](https://www.zapt.ai)
  - Styled with underline and primary color

## Example Classes

- **Button**: `bg-primary text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 active:bg-blue-900 transition-colors`
- **Input**: `border border-neutral px-2 py-1 box-border rounded focus:border-primary`
- **Card**: `bg-white border border-neutral shadow-md rounded p-4`