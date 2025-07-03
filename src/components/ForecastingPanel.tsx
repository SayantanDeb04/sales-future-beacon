
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, Zap, Settings, TrendingUp } from 'lucide-react';

const forecastData = [
  { month: 'Jan 2024', actual: 105000, forecast: 103000, upper: 110000, lower: 96000 },
  { month: 'Feb 2024', forecast: 98000, upper: 105000, lower: 91000 },
  { month: 'Mar 2024', forecast: 112000, upper: 120000, lower: 104000 },
  { month: 'Apr 2024', forecast: 125000, upper: 135000, lower: 115000 },
  { month: 'May 2024', forecast: 118000, upper: 128000, lower: 108000 },
  { month: 'Jun 2024', forecast: 132000, upper: 145000, lower: 119000 },
];

const models = [
  { name: 'ARIMA', accuracy: '91.2%', status: 'active', description: 'Time series analysis with seasonal components' },
  { name: 'Prophet', accuracy: '89.7%', status: 'standby', description: 'Facebook\'s forecasting tool for business time series' },
  { name: 'XGBoost', accuracy: '93.1%', status: 'training', description: 'Gradient boosting with feature engineering' },
];

export const ForecastingPanel = () => {
  return (
    <div className="space-y-8">
      {/* Model Performance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {models.map((model, index) => (
          <Card key={index} className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-blue-600" />
                  <h3 className="font-bold text-lg">{model.name}</h3>
                </div>
                <Badge 
                  variant={model.status === 'active' ? 'default' : model.status === 'training' ? 'secondary' : 'outline'}
                  className={
                    model.status === 'active' ? 'bg-green-100 text-green-800' :
                    model.status === 'training' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }
                >
                  {model.status}
                </Badge>
              </div>
              <p className="text-gray-600 text-sm mb-3">{model.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">{model.accuracy}</span>
                <Button size="sm" variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Configure
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Forecast Chart with Confidence Intervals */}
      <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl font-bold text-gray-800">
            6-Month Sales Forecast with Confidence Intervals
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600">
              <Zap className="h-4 w-4 mr-2" />
              Run Forecast
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={forecastData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  borderRadius: '12px',
                  border: 'none',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                }} 
              />
              <Area
                type="monotone"
                dataKey="upper"
                stroke="none"
                fill="rgba(59, 130, 246, 0.1)"
                fillOpacity={0.3}
              />
              <Area
                type="monotone"
                dataKey="lower"
                stroke="none"
                fill="rgba(255, 255, 255, 0.8)"
                fillOpacity={1}
              />
              <Line 
                type="monotone" 
                dataKey="actual" 
                stroke="#10b981" 
                strokeWidth={3}
                dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
                name="Actual Sales"
              />
              <Line 
                type="monotone" 
                dataKey="forecast" 
                stroke="#3b82f6" 
                strokeWidth={3}
                strokeDasharray="5 5"
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                name="Forecast"
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="mt-4 flex items-center justify-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span>Actual Sales</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-blue-500 border-dashed rounded"></div>
              <span>Forecasted Sales</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-200 rounded"></div>
              <span>Confidence Interval</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Feature Engineering Panel */}
      <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            Feature Engineering Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Seasonality</h4>
              <p className="text-2xl font-bold text-blue-600">High</p>
              <p className="text-sm text-blue-600">Peak: Nov-Dec</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Trend</h4>
              <p className="text-2xl font-bold text-green-600">+15.2%</p>
              <p className="text-sm text-green-600">YoY Growth</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Holiday Impact</h4>
              <p className="text-2xl font-bold text-purple-600">+28%</p>
              <p className="text-sm text-purple-600">Avg Lift</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Volatility</h4>
              <p className="text-2xl font-bold text-orange-600">12.4%</p>
              <p className="text-sm text-orange-600">Std Deviation</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
