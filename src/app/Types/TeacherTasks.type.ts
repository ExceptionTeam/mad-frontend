export interface TeacherTask {
  data: Task[];
  pagination: Pagination;
}

export interface Task {
  _id: string;
  name: string;
  weight: number;
  active?: boolean;
}

export interface Pagination {
  total: number;
  filtered: number;
}
