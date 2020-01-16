import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxConfettiComponent } from './ngx-confetti.component';

describe('NgxConfettiComponent', () => {
  let component: NgxConfettiComponent;
  let fixture: ComponentFixture<NgxConfettiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxConfettiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxConfettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
