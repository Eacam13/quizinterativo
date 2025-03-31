import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { useQuizStore } from '../store/quizStore';

const ResultScreen = () => {
  const { score, questions, playerName, resetQuiz } = useQuizStore();
  const percentage = (score / (questions.length * 10)) * 100;
  const showTrophy = percentage > 85;

  return (
    <motion.div
      className="max-w-md mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        {showTrophy && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="mb-6"
          >
            <Trophy className="w-16 h-16 mx-auto text-accent" />
          </motion.div>
        )}

        <h2 className="text-2xl font-bold text-primary mb-2">
          Parabéns, {playerName}!
        </h2>
        
        <p className="text-gray-600 mb-6">
          Você completou o quiz!
        </p>

        <div className="mb-8">
          <p className="text-4xl font-bold text-secondary">
            {score} pontos
          </p>
          <p className="text-gray-500">
            {percentage.toFixed(1)}% de acertos
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 px-6 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
          onClick={resetQuiz}
        >
          Jogar Novamente
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ResultScreen;