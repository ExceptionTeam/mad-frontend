export interface Account {
  university: string;
  year: string;
  faculty: string;
}

export interface User {
  _id: string;
  name: string;
  surname: string;
  account: Account;
}

export interface Pagination {
  total: number;
  filtered: number;
}

export interface AllUsers {
  data: User[];
  pagination: Pagination;
}
