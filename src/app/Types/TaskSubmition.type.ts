import { FileInfo } from 'src/app/Types/FileInfo.type';

export interface TaskSubmition {
  srcFileId: FileInfo;
  href: string;
  tests: boolean[];
  passedTests: number;
  mark: number;
}
