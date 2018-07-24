import { FileInfo } from 'src/app/Types/FileInfo.type';

export interface TaskEditInfo {
  name: string;
  description: string;
  weight: number;
  inputFilesId: FileInfo[];
  outputFilesId: FileInfo[];
  tags: string[];
}
