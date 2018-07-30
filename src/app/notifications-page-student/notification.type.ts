import { UserId } from '../Types/UserId.type';
import { SectionId } from '../Types/SectionId.type';

export interface Notification {
  _id: string;
  userId: UserId;
  sectionId: SectionId;
  isTestChecked: boolean;
  mark: number;
  date: number;
}
