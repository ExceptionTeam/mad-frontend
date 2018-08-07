import { UserId } from '../Types/UserId.type';

export interface TestTeacher {
  _id: string;
  name: string;
  mark?: number;
  deadline?: number;
  status?: string;
  studentId?: UserId;
  tags: string[];
  timeToPass: number;
  timeToPassStr?: string;
  testSize: number;
  teacherId: string;
  type: string;
  assignDate: string;
  groupId?: UserId;
}


export interface AssignTest {
  assignAmount: number;
  assignments: TestTeacher[];
}
