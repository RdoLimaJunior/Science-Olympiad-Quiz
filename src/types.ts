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
