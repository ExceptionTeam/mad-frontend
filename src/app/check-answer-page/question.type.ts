import { SectionId } from '../Types/SectionId.type';
import { UserId } from '../Types/UserId.type';

export interface CheckQuestion {
  _id: string;
  userId: UserId;
  sectionId: SectionId;
  date: string;
}
