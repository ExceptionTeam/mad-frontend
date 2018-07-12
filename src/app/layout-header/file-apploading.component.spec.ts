import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileApploadingComponent } from './file-apploading.component';

describe('FileApploadingComponent', () => {
  let component: FileApploadingComponent;
  let fixture: ComponentFixture<FileApploadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileApploadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileApploadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
