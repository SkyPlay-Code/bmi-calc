import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface WeightEntry {
  date: string;
  weight: number;
  bmi: number;
}

const WeightHistory: React.FC = () => {
  const [weightHistory] = useState<WeightEntry[]>([
    { date: '2024-01-01', weight: 70, bmi: 22.5 },
    { date: '2024-02-01', weight: 69, bmi: 22.2 },
    { date: '2024-03-01', weight: 68, bmi: 21.9 },
    { date: '2024-04-01', weight: 67.5, bmi: 21.7 },
    { date: '2024-05-01', weight: 67, bmi: 21.5 },
  ]);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Date: {new Date(payload[0].payload.date).toLocaleDateString()}
          </p>
          <p className="text-sm font-medium text-blue-500">
            Weight: {payload[0].value}kg
          </p>
          <p className="text-sm font-medium text-purple-500">
            BMI: {payload[1].value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Weight History
        </h3>
        <button
          className="px-3 py-1 text-sm text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors duration-200"
          onClick={() => {
            // Add new entry functionality would go here
            alert('This feature will allow adding new weight entries');
          }}
        >
          Add Entry
        </button>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={weightHistory}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
            <XAxis
              dataKey="date"
              tickFormatter={(date) => new Date(date).toLocaleDateString()}
              stroke="#6B7280"
              fontSize={12}
            />
            <YAxis yAxisId="left" stroke="#3B82F6" fontSize={12} />
            <YAxis yAxisId="right" orientation="right" stroke="#8B5CF6" fontSize={12} />
            <Tooltip content={<CustomTooltip />} />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="weight"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={{ fill: '#3B82F6', strokeWidth: 2 }}
              activeDot={{ r: 8 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="bmi"
              stroke="#8B5CF6"
              strokeWidth={2}
              dot={{ fill: '#8B5CF6', strokeWidth: 2 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-center space-x-6">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-sm text-gray-600 dark:text-gray-300">Weight (kg)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <span className="text-sm text-gray-600 dark:text-gray-300">BMI</span>
        </div>
      </div>
    </div>
  );
};

export default WeightHistory; 