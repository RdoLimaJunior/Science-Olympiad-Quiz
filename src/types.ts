export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  text: string;
  image?: string;
  options: Option[];
  correctAnswerId: string;
  explanation: string;
}

export interface UserAnswer {
  questionId: number;
  answerId: string;
  isCorrect: boolean;
}

export interface QuizResultHistory {
  year: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  date: string;
}

export interface StudyMaterial {
    title: string;
    summary: string;
    imageUrl: string;
    videoUrl: string;
    tips: string[];
    // FIX: Added 'suggestedQuestions' to the StudyMaterial type to resolve a property access error.
    suggestedQuestions: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}