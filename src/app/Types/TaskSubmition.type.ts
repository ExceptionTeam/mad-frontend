import { FileInfo } from 'src/app/Types/FileInfo.type';

export interface TaskSubmition {
  file: FileInfo;
  href: string;
  tests: boolean[];
  passedTests: number;
  mark: number;
}
