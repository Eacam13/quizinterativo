import { create } from 'zustand';
import { QuizState } from '../types/quiz';
import { questions } from '../data/questions';

const getRandomQuestions = (count: number) => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const useQuizStore = create<QuizState>((set) => ({
  playerName: '',
  currentQuestion: 0,
  questions: [],
  score: 0,
  answers: [],
  isStarted: false,
  isFinished: false,

  setPlayerName: (name) => set({ playerName: name }),
  
  startQuiz: () => set({
    questions: getRandomQuestions(10),
    isStarted: true,
    currentQuestion: 0,
    score: 0,
    answers: [],
  }),

  answerQuestion: (answer) => set((state) => {
    const isCorrect = state.questions[state.currentQuestion].correctAnswer === answer;
    const newScore = isCorrect ? state.score + 10 : state.score;
    const newAnswers = [...state.answers, answer];
    const isFinished = state.currentQuestion === state.questions.length - 1;

    return {
      score: newScore,
      answers: newAnswers,
      currentQuestion: isFinished ? state.currentQuestion : state.currentQuestion + 1,
      isFinished,
    };
  }),

  resetQuiz: () => set({
    currentQuestion: 0,
    questions: [],
    score: 0,
    answers: [],
    isStarted: false,
    isFinished: false,
  }),
}));