import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'exc-all-students-table',
  templateUrl: './all-students-table.component.html',
  styleUrls: ['./all-students-table.component.scss']
})
export class AllStudentsTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() dataSource;
  displayedColumns: string[] = ['name', 'university'];

  constructor() {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
