import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatdisplayComponent } from './chatdisplay.component';

describe('ChatdisplayComponent', () => {
  let component: ChatdisplayComponent;
  let fixture: ComponentFixture<ChatdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
