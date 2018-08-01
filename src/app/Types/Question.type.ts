export interface Question {
  type: string;
  description: string;
  answers?: string[];
  studentCheckboxAnswers?: boolean[];
  studentAnswer?: string;
}
