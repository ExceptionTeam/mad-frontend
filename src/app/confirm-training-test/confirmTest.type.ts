import { UserId } from '../Types/UserId.type';
import { SectionId } from '../Types/SectionId.type';

export interface ConfirmTestInfo {
  _id: string;
  sectionId: SectionId;
  userId: UserId;
  status: string;
  display?: boolean;
  onclickDone?: boolean;
}
