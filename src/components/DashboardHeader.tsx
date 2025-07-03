
import { TrendingUp, BarChart3, Brain, Target } from 'lucide-react';

export const DashboardHeader = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
              <TrendingUp className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Retail Sales Forecasting Platform
              </h1>
              <p className="text-blue-100 mt-1">
                Predictive Analytics • Machine Learning • Business Intelligence
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <Brain className="h-5 w-5 text-green-300" />
              <span className="text-sm font-medium">AI Model Active</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <Target className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-medium">92% Accuracy</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
