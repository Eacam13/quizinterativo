import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useQuizStore } from '../store/quizStore';

const StartScreen = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const { setPlayerName, startQuiz } = useQuizStore();

  const handleStart = () => {
    if (name.length < 3) {
      setError('O nome deve ter pelo menos 3 caracteres');
      return;
    }
    setPlayerName(name);
    startQuiz();
  };

  return (
    <div className="max-w-md mx-auto">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-center text-primary mb-6">
          Bem-vindo ao Quiz Cultura Digital!
        </h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Seu Nome
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError('');
              }}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
              placeholder="Digite seu nome"
            />
            {error && (
              <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 px-6 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
            onClick={handleStart}
          >
            Começar Quiz
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default StartScreen;