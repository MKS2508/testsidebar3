// @ts-nocheck
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SideBar from '../components/SideBar/SideBar';
import { Home, Settings, User } from 'lucide-react';

const meta: Meta<typeof SideBar> = {
  title: 'Components/SideBar',
  component: SideBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SideBar>;

const Template: Story = {
  render: (args) => {
    const [isExpanded, setIsExpanded] = useState(true);
    return (
      <SideBar
        {...args}
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
      />
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    logo: { imgSrc: 'https://via.placeholder.com/50', text: 'My App' },
    items: [
      { icon: <Home size={24} />, label: 'Home', href: '#', isActive: true },
      { icon: <User size={24} />, label: 'Profile', href: '#', isActive: false },
      { icon: <Settings size={24} />, label: 'Settings', href: '#', isActive: false },
    ],
    theme: {
      bg: 'bg-gray-800',
      icon: 'text-gray-400',
      text: 'text-white',
    },
  },
};

export const LightTheme: Story = {
  ...Template,
  args: {
    ...Default.args,
    theme: {
      bg: 'bg-white',
      icon: 'text-gray-600',
      text: 'text-gray-900',
    },
  },
};

export const CustomColors: Story = {
  ...Template,
  args: {
    ...Default.args,
    theme: {
      bg: 'bg-indigo-600',
      icon: 'text-indigo-200',
      text: 'text-white',
    },
  },
};