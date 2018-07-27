import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material'; '';

@Component({
  selector: 'exc-all-students-table',
  templateUrl: './all-students-table.component.html',
  styleUrls: ['./all-students-table.component.scss']
})
export class AllStudentsTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'university'];
  @Input() dataSource;
  constructor() { }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
