export interface UserId {
  _id: string;
  name: string;
  surname: string;
}

export interface SectionId {
  _id: string;
  name: string;
}

export interface ConfirmTestInfo {
  _id: string;
  sectionId: SectionId;
  userId: UserId;
  status: string;
}
