import { Component, ViewChild } from '@angular/core';
import { Activity } from '../Types/AdminActivity.type';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'exc-admin-activity',
  templateUrl: './admin-activity.component.html',
  styleUrls: ['./admin-activity.component.scss']
})
export class AdminActivityComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  paginationParams = {
    pageIndex: 0,
    pageSize: 2
  };
  activities: Activity[] = [
    {
      student: 'Влад Малиновский',
      activity: 'Запрос тренировочного теста',
      date: new Date('2/20/16')
    },
    {
      student: 'Влад Малиновский',
      activity: 'Запрос тренировочного теста',
      date: new Date('2/20/16')
    },
    {
      student: 'Василий Репников',
      activity: 'Смена роли',
      date: new Date('4/20/17')
    },
    {
      student: 'Евгений Жибрик',
      activity: 'Проверка теста',
      date: new Date('4/20/17')
    },
    {
      student: 'Борис Комраков',
      activity: 'Запрос тренировочного теста',
      date: new Date('2/20/16')
    },
    {
      student: 'Павел Мандрик',
      activity: 'Смена роли',
      date: new Date('4/20/17')
    },
    {
      student: 'Евгений Жибрик',
      activity: 'Проверка теста',
      date: new Date('4/20/17')
    }
  ];
  public length = this.activities.length;
  public array;

  constructor() {
    this.array = this.activities.slice(
      this.paginationParams.pageIndex,
      this.paginationParams.pageIndex + this.paginationParams.pageSize
    );
  }

  getPaginationParams() {
    return this.paginationParams;
  }

  onPaginateChange() {
    this.paginationParams.pageIndex = this.paginator.pageIndex;
    const startIndex =
      this.paginationParams.pageSize * this.paginationParams.pageIndex;
    this.array = this.activities.slice(
      startIndex,
      startIndex + this.paginationParams.pageSize
    );
  }
}
