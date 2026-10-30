import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface SideBarProps {
  logo: { imgSrc: string; text?: string };
  isExpanded: boolean;
  onToggle: () => void;
  items: Array<{ icon: React.ReactNode; label: string; href: string; isActive: boolean }>;
  theme: { bg: string; icon: string; text: string };
}

const SideBar: React.FC<SideBarProps> = ({ logo, isExpanded, onToggle, items, theme }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sidebarClasses = `
    fixed left-0 top-0 h-full transition-all duration-300 ease-in-out
    ${isExpanded ? 'w-64' : 'w-20'}
    ${isMobile ? (isExpanded ? 'translate-x-0' : '-translate-x-full') : ''}
    ${theme.bg} backdrop-blur-md bg-opacity-80 shadow-lg
  `;

  return (
    <nav className={sidebarClasses} aria-label="Sidebar">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            {logo.imgSrc && (
              <img src={logo.imgSrc} alt="Logo" className="w-8 h-8" />
            )}
            {isExpanded && logo.text && (
              <span className={`font-semibold ${theme.text}`}>{logo.text}</span>
            )}
          </div>
          <button
            onClick={onToggle}
            className={`p-2 rounded-full ${theme.icon} hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500`}
            aria-expanded={isExpanded}
            aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>
        <ul className="flex-1 overflow-y-auto">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={`
                  flex items-center p-4 ${isExpanded ? 'space-x-4' : 'justify-center'}
                  ${item.isActive ? `${theme.text} font-semibold` : `${theme.icon} hover:${theme.text}`}
                  transition-colors duration-200
                `}
                aria-current={item.isActive ? 'page' : undefined}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {isExpanded && <span>{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;