import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmsComponent } from './npms.component';

describe('NpmsComponent', () => {
  let component: NpmsComponent;
  let fixture: ComponentFixture<NpmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
