export interface Student {
  _id: string;
  name: string;
}

export interface Group {
  _id: string;
  name: string;
  groupStudents: Student[];
}
