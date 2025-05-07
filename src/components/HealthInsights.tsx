interface HealthInsightsProps {
  bmi: number;
}

export default function HealthInsights({ bmi }: HealthInsightsProps) {
  const getInsights = (bmi: number) => {
    if (bmi === 0) return {
      title: 'Enter your details',
      description: 'Fill in your height and weight to get personalized health insights.',
      tips: [],
    };

    if (bmi < 18.5) return {
      title: 'Underweight Range',
      description: 'Being underweight may indicate nutritional deficiencies or other health issues.',
      tips: [
        'Increase caloric intake with nutrient-rich foods',
        'Add strength training to build muscle mass',
        'Consider consulting a nutritionist',
        'Eat more frequently throughout the day',
      ],
    };

    if (bmi < 25) return {
      title: 'Healthy Range',
      description: 'Your BMI indicates a healthy weight. Keep up the good work!',
      tips: [
        'Maintain a balanced diet',
        'Regular physical activity',
        'Stay hydrated',
        'Get adequate sleep',
      ],
    };

    if (bmi < 30) return {
      title: 'Overweight Range',
      description: 'Being overweight may increase your risk of certain health conditions.',
      tips: [
        'Focus on portion control',
        'Increase physical activity',
        'Choose whole foods over processed ones',
        'Monitor daily caloric intake',
      ],
    };

    return {
      title: 'Obese Range',
      description: 'Obesity can significantly impact your health. Consider consulting healthcare professionals.',
      tips: [
        'Seek medical guidance',
        'Start with gentle exercise',
        'Make sustainable dietary changes',
        'Consider keeping a food diary',
      ],
    };
  };

  const insights = getInsights(bmi);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
        {insights.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {insights.description}
      </p>
      {insights.tips.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Recommendations:
          </h4>
          <ul className="space-y-2">
            {insights.tips.map((tip, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs">
                  ✓
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-300">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
} 