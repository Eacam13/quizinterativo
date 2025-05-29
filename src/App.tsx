import React from 'react';
import { motion } from 'framer-motion';
import { BeakerIcon } from 'lucide-react';
import { useQuizStore } from './store/quizStore';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';

function App() {
  const { isStarted, isFinished } = useQuizStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
      <header className="w-full py-4 bg-white shadow-md">
        <div className="container mx-auto px-4 flex items-center gap-2">
          <BeakerIcon className="w-8 h-8 text-primary" />
          <h1 className="text-2xl font-bold text-primary">Quiz Fake News</h1>
        </div>
      </header>

      <main className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {!isStarted && <StartScreen />}
          {isStarted && !isFinished && <QuizScreen />}
          {isFinished && <ResultScreen />}
        </motion.div>
      </main>
    </div>
  );
}

export default App;