import { Component, Input } from '@angular/core';
import { TaskSolvingInfo } from 'src/app/TaskSolvingInfo.type';

@Component({
  selector: 'exc-after-sending-task-page',
  templateUrl: './after-sending-task-page.component.html',
  styleUrls: ['./after-sending-task-page.component.scss']
})
export class AfterSendingTaskPageComponent {
  panelOpenState = false;
  taskName = 'myTask';
  files: TaskSolvingInfo[] = [
    {
      file: 'fghfghjkdfghjfghjk.java',
      href: 'http://media.comicbook.com/2017/12/pepe-1066712.png',
      tests: [true, false, true, true],
      passedTests: 3,
      mark: 4
    },
    {
      file: 'ggu.java',
      href: 'http://media.comicbook.com/2017/12/pepe-1066712.png',
      tests: [true, true, false, true],
      passedTests: 3,
      mark: 10
    },
    {
      file: 'lol.java',
      href: 'http://media.comicbook.com/2017/12/pepe-1066712.png',
      tests: [true, false, true, true],
      passedTests: 3,
      mark: 4
    }
  ];

  constructor() {
  }

  clickHref(event) {
    event.stopPropagation();
  }
}
