export interface QuestionAdmin {
  data: Question[];
  pagination: Pagination;
}

export interface Question {
  section: string[];
  tags: string[];
  type: string;
  active: boolean;
  question: string;
  difficulty: number;
  _id: string;
}

export interface Pagination {
  total: number;
  filtered: number;
}
