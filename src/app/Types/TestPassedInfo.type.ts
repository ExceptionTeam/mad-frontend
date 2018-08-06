import { Question } from 'src/app/Types/Question.type';

export interface TestPassedInfo {
  _id: string;
  assignmentId: string;
  userId: string;
  questionsId: Question[];
  timeToPass: number;
  creationDate: number;
  status: string;
}
