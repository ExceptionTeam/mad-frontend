export interface FileInfo {
  link: string;
  name: string;
  id: string;
}

export interface TaskEditInfo {
  name: string;
  description: string;
  weight: number;
  inputFilesId: FileInfo[];
  outputFilesId: FileInfo[];
  tags: string[];
}
