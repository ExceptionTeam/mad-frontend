export interface QuestionAdding {
  section: String[];
  tags: String[];
  type: String;
  active: boolean;
  category: String;
  question: String;
  questionAuthorId: String;
  answerOptions?: String[];
  correctOptions?: String[];
  difficulty: number;
  }
