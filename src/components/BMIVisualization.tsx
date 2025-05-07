import React from 'react';

interface BMIVisualizationProps {
  bmi: number;
}

const BMIVisualization: React.FC<BMIVisualizationProps> = ({ bmi }) => {
  const getBMICategory = (bmi: number): string => {
    if (bmi === 0) return 'Enter your details';
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  };

  const getBMIColor = (bmi: number): string => {
    if (bmi === 0) return 'bg-gray-200';
    if (bmi < 18.5) return 'bg-blue-400';
    if (bmi < 25) return 'bg-green-400';
    if (bmi < 30) return 'bg-yellow-400';
    return 'bg-red-400';
  };

  const getBMIPosition = (bmi: number): number => {
    if (bmi === 0) return 50;
    if (bmi < 15) return 0;
    if (bmi > 40) return 100;
    return ((bmi - 15) / 25) * 100;
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">BMI Visualization</h2>
      <div className="relative h-8 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div className="absolute inset-0 flex">
          <div className="w-1/4 bg-blue-400"></div>
          <div className="w-1/4 bg-green-400"></div>
          <div className="w-1/4 bg-yellow-400"></div>
          <div className="w-1/4 bg-red-400"></div>
        </div>
        <div
          className={`absolute top-0 w-4 h-8 ${getBMIColor(bmi)} rounded-full transform -translate-x-1/2 transition-all duration-500`}
          style={{ left: `${getBMIPosition(bmi)}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
        <span>Underweight</span>
        <span>Normal</span>
        <span>Overweight</span>
        <span>Obese</span>
      </div>
      <div className="text-center">
        <p className="text-3xl font-bold text-gray-800 dark:text-white">{bmi.toFixed(1)}</p>
        <p className="text-lg text-gray-600 dark:text-gray-300">{getBMICategory(bmi)}</p>
      </div>
    </div>
  );
};

export { BMIVisualization as default }; 