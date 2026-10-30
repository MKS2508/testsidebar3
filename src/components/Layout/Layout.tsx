import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  sidebarExpanded: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, sidebarExpanded }) => {
  return (
    <div className={`flex min-h-screen transition-all duration-300 ease-in-out ${sidebarExpanded ? 'ml-64' : 'ml-20'}`}>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default Layout;