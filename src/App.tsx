import { useState } from 'react'
import BMIForm from './components/BMIForm'
import BMIVisualization from './components/BMIVisualization'
import HealthInsights from './components/HealthInsights'
import WeightHistory from './components/WeightHistory'

function App() {
  // Dark mode toggle state
  const [darkMode, setDarkMode] = useState(false);
  const [bmi, setBmi] = useState(0);

  return (
    <div className={`w-full min-h-screen ${darkMode ? 'dark bg-gradient-to-br from-gray-900 to-gray-800 transition-colors duration-500' : 'bg-gradient-to-br from-blue-100 to-purple-200 transition-colors duration-500'}`}>
      <div className="flex justify-end p-6">
        <button
          aria-label="Toggle dark mode"
          className="relative w-14 h-8 flex items-center bg-white dark:bg-gray-700 rounded-full p-1 shadow-lg transition-colors duration-300"
          onClick={() => setDarkMode((d) => !d)}
        >
          <span className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 shadow-md transform transition-transform duration-300 ${darkMode ? 'translate-x-6' : ''}`}></span>
          <span className="sr-only">Toggle dark mode</span>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 w-full">
        <div className="backdrop-blur-lg bg-white/30 dark:bg-gray-900/40 rounded-3xl shadow-2xl p-8 max-w-4xl w-full flex flex-col gap-8 border border-white/20 dark:border-gray-700/40 transition-all duration-500">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center tracking-tight mb-2">BMI Calculator</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center">A premium health tracking tool for modern lifestyles</p>
          </div>

          {/* BMI Form & Visualization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 shadow-lg">
              <BMIForm onBMIChange={setBmi} />
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 shadow-lg">
              <BMIVisualization bmi={bmi} />
            </div>
          </div>

          {/* Health Insights & Weight History */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 shadow-lg">
              <HealthInsights bmi={bmi} />
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 shadow-lg">
              <WeightHistory />
            </div>
          </div>
        </div>
        
        <footer className="mt-8 text-gray-500 dark:text-gray-400 text-sm text-center w-full">&copy; {new Date().getFullYear()} Premium BMI Calculator</footer>
      </div>
    </div>
  )
}

export default App
