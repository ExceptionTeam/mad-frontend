import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'exc-table-passed-tests-info',
  templateUrl: './table-passed-tests-info.component.html',
  styleUrls: ['./table-passed-tests-info.component.scss']
})
export class TablePassedTestsInfoComponent {
  @Input() dataSource;
  displayedColumns: string[] = ['fileName', 'status'];

  color(item) {
    if (item) {
      return 'green';
    }
    return 'red';
  }
}
