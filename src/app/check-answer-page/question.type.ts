export interface UserId {
  _id: string;
  name: string;
  surname: string;
}

export interface SectionId {
  _id: string;
  name: string;
  question: string;
  answer: string;
}

export interface CheckQuestion {
  _id: string;
  userId: UserId;
  sectionId: SectionId;
  date: string;
}
