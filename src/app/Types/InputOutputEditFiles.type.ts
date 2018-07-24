export interface FileInfo {
  link: string;
  name: string;
  id: string;
}

export interface InputOutputEditFiles {
  inputFilesId?: FileInfo[];
  outputFilesId?: FileInfo[];
}
