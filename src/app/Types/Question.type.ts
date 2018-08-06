import { Answer } from 'src/app/Types/Answer.type';

export interface Question {
  _id: string;
  type: string;
  category: string;
  difficulty: string;
  answerOptions: string[];
  question: string;
  tags: string;
  answer: Answer[];
  studentAnswer: string[];
}
