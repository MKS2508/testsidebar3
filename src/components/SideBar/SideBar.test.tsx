import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import SideBar from './SideBar';
import { Home } from 'lucide-react';

describe('SideBar', () => {
  const defaultProps = {
    logo: { imgSrc: 'logo.png', text: 'My App' },
    isExpanded: true,
    onToggle: vi.fn(),
    items: [
      { icon: <Home />, label: 'Home', href: '/', isActive: true },
    ],
    theme: { bg: 'bg-gray-800', icon: 'text-gray-400', text: 'text-white' },
  };

  it('renders correctly', () => {
    render(<SideBar {...defaultProps} />);
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    expect(screen.getByText('My App')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('toggles sidebar on button click', () => {
    render(<SideBar {...defaultProps} />);
    const toggleButton = screen.getByLabelText('Collapse sidebar');
    fireEvent.click(toggleButton);
    expect(defaultProps.onToggle).toHaveBeenCalled();
  });

  it('applies correct classes based on isExpanded prop', () => {
    const { rerender } = render(<SideBar {...defaultProps} />);
    expect(screen.getByRole('navigation')).toHaveClass('w-64');

    rerender(<SideBar {...defaultProps} isExpanded={false} />);
    expect(screen.getByRole('navigation')).toHaveClass('w-20');
  });
});