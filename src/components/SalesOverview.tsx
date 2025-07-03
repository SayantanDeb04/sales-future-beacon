
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart } from 'lucide-react';

const salesData = [
  { month: 'Jan', sales: 45000, forecast: 47000 },
  { month: 'Feb', sales: 52000, forecast: 54000 },
  { month: 'Mar', sales: 48000, forecast: 49000 },
  { month: 'Apr', sales: 61000, forecast: 62000 },
  { month: 'May', sales: 55000, forecast: 56000 },
  { month: 'Jun', sales: 67000, forecast: 68000 },
  { month: 'Jul', sales: 72000, forecast: 71000 },
  { month: 'Aug', sales: 69000, forecast: 70000 },
  { month: 'Sep', sales: 78000, forecast: 76000 },
  { month: 'Oct', sales: 85000, forecast: 84000 },
  { month: 'Nov', sales: 92000, forecast: 90000 },
  { month: 'Dec', sales: 105000, forecast: 103000 }
];

const kpis = [
  {
    title: 'Total Revenue',
    value: '$789,000',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
    color: 'text-green-600'
  },
  {
    title: 'Average Order Value',
    value: '$156',
    change: '+5.2%',
    trend: 'up',
    icon: ShoppingCart,
    color: 'text-blue-600'
  },
  {
    title: 'Monthly Growth',
    value: '8.7%',
    change: '-2.1%',
    trend: 'down',
    icon: TrendingUp,
    color: 'text-purple-600'
  }
];

export const SalesOverview = () => {
  return (
    <div className="space-y-8">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {kpis.map((kpi, index) => (
          <Card key={index} className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{kpi.title}</p>
                  <p className="text-2xl font-bold mt-1">{kpi.value}</p>
                  <div className="flex items-center mt-2">
                    {kpi.trend === 'up' ? (
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                    )}
                    <span className={`text-sm font-medium ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {kpi.change}
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-full bg-gradient-to-br from-white to-gray-100 ${kpi.color}`}>
                  <kpi.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sales Trend Chart */}
      <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800">
            Sales Performance vs Forecast
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={salesData}>
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
              <Line 
                type="monotone" 
                dataKey="sales" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                name="Actual Sales"
              />
              <Line 
                type="monotone" 
                dataKey="forecast" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                strokeDasharray="5 5"
                dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 6 }}
                name="Forecast"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Monthly Breakdown */}
      <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800">
            Monthly Sales Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
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
              <Bar 
                dataKey="sales" 
                fill="url(#blueGradient)"
                radius={[4, 4, 0, 0]}
              />
              <defs>
                <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
