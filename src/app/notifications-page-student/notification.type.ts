import { SectionId } from '../Types/SectionId.type';

export interface Notification {
  _id: string;
  sectionId: SectionId;
  isTestChecked: boolean;
  mark: number;
  date: number;
}
