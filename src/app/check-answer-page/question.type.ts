export interface QuestionId {
  _id: string;
  section: string[];
  tags: string[];
  question: string;
}

export interface StudentId {
  _id: string;
  name: string;
  surname: string;
}

export interface SubmissionId {
  _id: string;
  completeDate: string;
}

export interface CheckQuestion {
  _id: string;
  teacherId: string;
  assignmentId: string;
  submissionId: SubmissionId;
  questionId: QuestionId;
  answer: string;
  studentId: StudentId;
  display?: boolean;
  onclickDone?: boolean;
}

export interface CheckData {
  requests: CheckQuestion[];
  amount: number;
}
