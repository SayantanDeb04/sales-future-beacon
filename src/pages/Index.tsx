
import { useState } from 'react';
import { DashboardHeader } from '@/components/DashboardHeader';
import { SalesOverview } from '@/components/SalesOverview';
import { ForecastingPanel } from '@/components/ForecastingPanel';
import { InsightsPanel } from '@/components/InsightsPanel';
import { DataUploadPanel } from '@/components/DataUploadPanel';

const Index = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <DashboardHeader />
      
      <div className="container mx-auto px-6 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-white/70 backdrop-blur-sm p-1 rounded-xl shadow-lg">
          {[
            { id: 'overview', label: 'Sales Overview', icon: '📊' },
            { id: 'forecast', label: 'Forecasting', icon: '🔮' },
            { id: 'insights', label: 'Business Insights', icon: '💡' },
            { id: 'data', label: 'Data Management', icon: '📁' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 font-medium ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-white/50 hover:text-blue-600'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Panels */}
        <div className="transition-all duration-500 ease-in-out">
          {activeTab === 'overview' && <SalesOverview />}
          {activeTab === 'forecast' && <ForecastingPanel />}
          {activeTab === 'insights' && <InsightsPanel />}
          {activeTab === 'data' && <DataUploadPanel />}
        </div>
      </div>
    </div>
  );
};

export default Index;
