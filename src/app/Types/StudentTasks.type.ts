export interface StudentTask {
  _id: String;
  taskId: {
    name: String;
    weight: number;
  };
  teacherId: {
    name: String;
    surname: String;
  };
  submission: {
    _id: String;
    srcFileId: String;
    mark: number;
    submitTime: Number;
    tests: Boolean[];
  };
}
