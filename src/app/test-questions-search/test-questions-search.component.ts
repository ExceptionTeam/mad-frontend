import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'exc-test-questions-search',
  templateUrl: './test-questions-search.component.html',
  styleUrls: ['./test-questions-search.component.scss']
})
export class TestQuestionsSearchComponent implements OnInit {

  constructor(private testService: TestService) { }

  onSearch(query: string) {
    this.testService.searchParams.query = query;
    this.testService.searchParams.paging.pageIndex = 0;
    this.testService.loadQuestions();
  }

  ngOnInit() {
  }

}
