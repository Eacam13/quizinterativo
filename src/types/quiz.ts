export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizState {
  playerName: string;
  currentQuestion: number;
  questions: Question[];
  score: number;
  answers: number[];
  isStarted: boolean;
  isFinished: boolean;
  setPlayerName: (name: string) => void;
  startQuiz: () => void;
  answerQuestion: (answer: number) => void;
  resetQuiz: () => void;
}