export interface Test {
  _id: string;
  assignDate: number;
  deadline: number;
  name: string;
  status: string;
  tags: string[];
  teacherId: {
    id: string;
    name: string;
    surname: string;
  };
  testSize: number;
  timeToPass: number;
  timeToPassStr?: string;
  type: string;
}

export class TestInfoStudent {
  ids: Test[];
  amount: number;
}
