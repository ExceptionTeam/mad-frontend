export interface TaskId {
  name: string;
  description: string;
  weight: Number;
}

export interface TeacherId {
  name: string;
  surname: string;
}

export interface TaskFullDStudent {
  _id: string;
  assId: string;
  taskId: TaskId;
  deadline: Date;
  teacherId: TeacherId;
}
