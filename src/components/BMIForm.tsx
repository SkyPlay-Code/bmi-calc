import { useState, useEffect } from 'react';

interface BMIFormProps {
  onBMIChange: (bmi: number) => void;
}

export default function BMIForm({ onBMIChange }: BMIFormProps) {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [height, setHeight] = useState<{ value: string; unit: string }>({ value: '', unit: 'cm' });
  const [weight, setWeight] = useState<{ value: string; unit: string }>({ value: '', unit: 'kg' });

  const calculateBMI = () => {
    const h = parseFloat(height.value);
    const w = parseFloat(weight.value);

    if (h && w) {
      let bmi: number;
      if (unit === 'metric') {
        // BMI = weight(kg) / height(m)²
        bmi = w / Math.pow(h / 100, 2);
      } else {
        // BMI = 703 × weight(lb) / height(in)²
        bmi = (703 * w) / Math.pow(h, 2);
      }
      onBMIChange(parseFloat(bmi.toFixed(1)));
    } else {
      onBMIChange(0);
    }
  };

  useEffect(() => {
    calculateBMI();
  }, [height.value, weight.value, unit]);

  const toggleUnit = () => {
    if (unit === 'metric') {
      setUnit('imperial');
      setHeight({ value: height.value ? (parseFloat(height.value) * 0.393701).toFixed(1) : '', unit: 'in' });
      setWeight({ value: weight.value ? (parseFloat(weight.value) * 2.20462).toFixed(1) : '', unit: 'lb' });
    } else {
      setUnit('metric');
      setHeight({ value: height.value ? (parseFloat(height.value) * 2.54).toFixed(1) : '', unit: 'cm' });
      setWeight({ value: weight.value ? (parseFloat(weight.value) * 0.453592).toFixed(1) : '', unit: 'kg' });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Enter Your Details</h2>
        <button
          onClick={toggleUnit}
          className="px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors duration-200"
        >
          Switch to {unit === 'metric' ? 'Imperial' : 'Metric'}
        </button>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Height ({height.unit})
          </label>
          <input
            type="number"
            value={height.value}
            onChange={(e) => setHeight({ ...height, value: e.target.value })}
            placeholder={`Enter height in ${height.unit}`}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200"
          />
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Weight ({weight.unit})
          </label>
          <input
            type="number"
            value={weight.value}
            onChange={(e) => setWeight({ ...weight, value: e.target.value })}
            placeholder={`Enter weight in ${weight.unit}`}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>
    </div>
  );
} 