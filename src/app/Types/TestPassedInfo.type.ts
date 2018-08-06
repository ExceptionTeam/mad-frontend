import { Question } from 'src/app/Types/Question.type';
import { Answer } from 'src/app/Types/Answer.type';

export interface TestPassedInfo {
  _id: string;
  answers: Answer[];
  assignmentId: string;
  userId: string;
  questionsId: Question[];
  timeToPass: number;
  creationDate: number;
  status: string;
}
