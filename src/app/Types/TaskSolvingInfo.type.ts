export interface TaskSolvingInfo {
  file: FileServer;
  href: string;
  tests: boolean[];
  passedTests: number;
  mark: number;
}

export interface FileServer {
  id: string;
  url: string;
  name: string;
}
