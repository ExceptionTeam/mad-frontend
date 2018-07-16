export interface Task {
  _id: string;
  name: string;
  tags: string[];
  description: string;
  weight: number;
  inputFilesUrls: string[];
  outputFilesUrls: string[];
}
