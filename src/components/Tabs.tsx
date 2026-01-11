import React from 'react';
import { clsx } from 'clsx';

interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="border-b border-gray-200">
      <nav 
        className="-mb-px flex overflow-x-auto scroll-smooth space-x-8 md:space-x-8 space-x-4" 
        aria-label="Tabs"
        style={{ scrollBehavior: 'smooth' }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={clsx(
              'group inline-flex items-center px-1 py-4 border-b-2 font-medium text-sm whitespace-nowrap flex-shrink-0',
              activeTab === tab.id
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            )}
            aria-current={activeTab === tab.id ? 'page' : undefined}
          >
            {tab.icon && <span className="mr-2">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};