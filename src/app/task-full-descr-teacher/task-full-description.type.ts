export interface File {
  url: string;
  name: string;
}

export interface Task {
  name: string;
  description: string;
  weight: number;
  tags: string[];
  inputFilesId: File[];
  outputFilesId: File[];
  editable: boolean;
}
