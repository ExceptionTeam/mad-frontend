export interface Question {
  _id: string;
  type: string;
  category: string;
  difficulty: string;
  answerOptions: string[];
  question: string;
  tags: string;
  studentAnswer: string[];
}
