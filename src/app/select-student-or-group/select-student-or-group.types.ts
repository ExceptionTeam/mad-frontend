export interface Student {
  _id: number;
  name: string;
}

export interface Group {
  _id: number;
  name: string;
  students: Student[];
}
