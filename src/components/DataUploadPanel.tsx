
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Upload, FileText, CheckCircle, AlertCircle, Database, Settings } from 'lucide-react';

const dataStats = [
  { label: 'Total Records', value: '1,247,893', change: '+5.2%' },
  { label: 'Data Quality Score', value: '94.7%', change: '+2.1%' },
  { label: 'Missing Values', value: '0.3%', change: '-1.2%' },
  { label: 'Last Updated', value: '2 hours ago', change: 'Real-time' }
];

const dataFeatures = [
  { name: 'Transaction Date', status: 'processed', records: '1,247,893' },
  { name: 'Product Category', status: 'processed', records: '1,247,893' },
  { name: 'Sales Amount', status: 'processed', records: '1,247,893' },
  { name: 'Customer Segment', status: 'processing', records: '823,456' },
  { name: 'Seasonal Indicators', status: 'generated', records: '1,247,893' },
  { name: 'Holiday Flags', status: 'generated', records: '1,247,893' }
];

export const DataUploadPanel = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleUpload = () => {
    setIsProcessing(true);
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="space-y-8">
      {/* Data Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dataStats.map((stat, index) => (
          <Card key={index} className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                </div>
                <Database className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Data Upload Section */}
      <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
            <Upload className="h-5 w-5 mr-2" />
            Data Upload & Processing
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Upload Area */}
            <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center bg-blue-50/50">
              <Upload className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Upload Historical Sales Data
              </h3>
              <p className="text-gray-600 mb-4">
                Support for CSV, Excel, and JSON formats. Maximum file size: 100MB
              </p>
              <Button 
                onClick={handleUpload}
                disabled={isProcessing}
                className="bg-gradient-to-r from-blue-600 to-indigo-600"
              >
                {isProcessing ? 'Processing...' : 'Choose Files'}
              </Button>
            </div>

            {/* Upload Progress */}
            {isProcessing && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Processing data...</span>
                  <span className="text-sm font-medium text-blue-600">{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="w-full" />
              </div>
            )}

            {/* Data Features Status */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800">Feature Engineering Status</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dataFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {feature.status === 'processed' && <CheckCircle className="h-5 w-5 text-green-500" />}
                      {feature.status === 'processing' && <Settings className="h-5 w-5 text-yellow-500 animate-spin" />}
                      {feature.status === 'generated' && <FileText className="h-5 w-5 text-blue-500" />}
                      <div>
                        <p className="font-medium text-gray-800">{feature.name}</p>
                        <p className="text-sm text-gray-500">{feature.records} records</p>
                      </div>
                    </div>
                    <Badge 
                      variant={
                        feature.status === 'processed' ? 'default' :
                        feature.status === 'processing' ? 'secondary' :
                        'outline'
                      }
                      className={
                        feature.status === 'processed' ? 'bg-green-100 text-green-800' :
                        feature.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }
                    >
                      {feature.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Quality Report */}
      <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800">
            Data Quality Assessment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">98.7%</div>
                <div className="text-sm text-green-600">Data Completeness</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Database className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">99.1%</div>
                <div className="text-sm text-blue-600">Data Accuracy</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Settings className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">96.3%</div>
                <div className="text-sm text-purple-600">Data Consistency</div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-800">Data Quality Summary</h4>
                  <p className="text-sm text-blue-600 mt-1">
                    Your dataset is ready for analysis. Minor data cleaning completed automatically. 
                    All features have been engineered and are ready for model training.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
