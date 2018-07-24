import { FileInfo } from 'src/app/Types/FileInfo.type';

export interface TaskFullInfo {
  name: string;
  description: string;
  weight: number;
  inputFilesId: FileInfo[];
  outputFilesId: FileInfo[];
  tags: string[];
  attempts?: Number;
  successfulAttempts?: Number;
  active?: boolean;
}
