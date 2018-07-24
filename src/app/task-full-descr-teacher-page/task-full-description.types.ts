export interface File {
  link: string;
  name: string;
}

export interface Task {
  _id: string;
  name: string;
  tags: string[];
  description: string;
  weight: number;
  inputFilesUrls: File[];
  outputFilesUrls: File[];
  additAbility: boolean;
}
