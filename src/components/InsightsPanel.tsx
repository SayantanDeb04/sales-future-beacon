
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Lightbulb, AlertTriangle, CheckCircle, ArrowRight, Download } from 'lucide-react';

const insights = [
  {
    type: 'opportunity',
    title: 'Inventory Optimization Opportunity',
    description: 'Q1 2024 forecast shows 25% increase in demand. Consider increasing inventory by 20% to avoid stockouts.',
    impact: 'High',
    confidence: '94%',
    action: 'Adjust procurement schedule',
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    type: 'warning',
    title: 'Seasonal Dip Expected',
    description: 'February typically shows 15% decline. Plan marketing campaigns and promotions to maintain momentum.',
    impact: 'Medium',
    confidence: '87%',
    action: 'Launch promotion campaign',
    icon: AlertTriangle,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50'
  },
  {
    type: 'insight',
    title: 'Holiday Sales Pattern',
    description: 'Black Friday generates 35% of November sales. Early inventory preparation recommended.',
    impact: 'High',
    confidence: '96%',
    action: 'Prepare holiday inventory',
    icon: Lightbulb,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  }
];

const recommendations = [
  {
    category: 'Inventory Management',
    recommendations: [
      'Increase stock levels by 20% for Q1 2024 based on demand forecast',
      'Implement just-in-time ordering for slow-moving items',
      'Consider safety stock of 15% for high-demand periods'
    ]
  },
  {
    category: 'Marketing Strategy',
    recommendations: [
      'Launch targeted campaigns in February to counter seasonal decline',
      'Implement dynamic pricing during peak seasons',
      'Focus on customer retention during low-demand periods'
    ]
  },
  {
    category: 'Operations Planning',
    recommendations: [
      'Staff up by 30% during November-December peak season',
      'Optimize supply chain for holiday rush preparation',
      'Implement demand-driven production scheduling'
    ]
  }
];

export const InsightsPanel = () => {
  return (
    <div className="space-y-8">
      {/* AI-Generated Insights */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">AI-Generated Business Insights</h2>
        {insights.map((insight, index) => (
          <Card key={index} className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className={`p-3 rounded-full ${insight.bgColor}`}>
                    <insight.icon className={`h-6 w-6 ${insight.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-800">{insight.title}</h3>
                      <Badge variant="outline" className="capitalize">
                        {insight.type}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{insight.description}</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">Impact:</span>
                        <Badge 
                          variant={insight.impact === 'High' ? 'destructive' : insight.impact === 'Medium' ? 'secondary' : 'outline'}
                        >
                          {insight.impact}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">Confidence:</span>
                        <span className="text-sm font-medium text-blue-600">{insight.confidence}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600">
                  {insight.action}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Strategic Recommendations */}
      <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl font-bold text-gray-800">
            Strategic Business Recommendations
          </CardTitle>
          <Button size="sm" variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {recommendations.map((category, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{category.category}</h3>
                <ul className="space-y-2">
                  {category.recommendations.map((rec, recIndex) => (
                    <li key={recIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800">
            Model Performance Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">92.4%</div>
              <div className="text-sm text-gray-600">Forecast Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">8.7%</div>
              <div className="text-sm text-gray-600">Mean Absolute Error</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">0.94</div>
              <div className="text-sm text-gray-600">R² Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">15.2%</div>
              <div className="text-sm text-gray-600">MAPE</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
