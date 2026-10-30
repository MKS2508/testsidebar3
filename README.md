# React Customizable Sidebar

A fully customizable sidebar component for React applications with TypeScript support.

## Features

- Modern glassmorphism design with subtle gradients and soft shadows
- Responsive and mobile-first
- Smooth expand/collapse transitions
- Accessible (ARIA, keyboard navigation, focus states)
- Auto-collapse to hamburger menu on small screens
- Customizable hover and active states for items
- Support for fixed or scrollable sidebar content
- Dark/light mode support
- TypeScript support with proper type definitions

## Installation

```bash
npm install react-customizable-sidebar
```

## Usage

```jsx
import React, { useState } from 'react';
import { SideBar, Layout } from 'react-customizable-sidebar';
import { Home, User, Settings } from 'lucide-react';

const App = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const sidebarProps = {
    logo: { imgSrc: '/path/to/logo.png', text: 'My App' },
    isExpanded,
    onToggle: () => setIsExpanded(!isExpanded),
    items: [
      { icon: <Home size={24} />, label: 'Home', href: '/', isActive: true },
      { icon: <User size={24} />, label: 'Profile', href: '/profile', isActive: false },
      { icon: <Settings size={24} />, label: 'Settings', href: '/settings', isActive: false },
    ],
    theme: {
      bg: 'bg-gray-800',
      icon: 'text-gray-400',
      text: 'text-white',
    },
  };

  return (
    <>
      <SideBar {...sidebarProps} />
      <Layout sidebarExpanded={isExpanded}>
        {/* Your main content goes here */}
        <h1>Welcome to My App</h1>
      </Layout>
    </>
  );
};

export default App;
```

## Props

### SideBar Props

| Prop | Type | Description |
|------|------|-------------|
| `logo` | `{ imgSrc: string, text?: string }` | Logo image with optional text |
| `isExpanded` | `boolean` | Controls sidebar expansion state |
| `onToggle` | `() => void` | Callback for expanding/collapsing |
| `items` | `Array<{ icon: ReactNode, label: string, href: string, isActive: boolean }>` | Navigation items |
| `theme` | `{ bg: string, icon: string, text: string }` | Custom color scheme |

### Layout Props

| Prop | Type | Description |
|------|------|-------------|
| `children` | `React.ReactNode` | Main content to be rendered |
| `sidebarExpanded` | `boolean` | Whether the sidebar is expanded |

## Customization

You can customize the appearance of the sidebar by modifying the `theme` prop. The `theme` object accepts Tailwind CSS classes for background, icon, and text colors.

## Development

To run the development server:

```bash
npm run dev
```

To build the package:

```bash
npm run build
```

To run tests:

```bash
npm test
```

To run Storybook:

```bash
npm run storybook
```

## License

MIT