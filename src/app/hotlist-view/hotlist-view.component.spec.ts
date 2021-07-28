import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotlistViewComponent } from './hotlist-view.component';

describe('HotlistViewComponent', () => {
  let component: HotlistViewComponent;
  let fixture: ComponentFixture<HotlistViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotlistViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotlistViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
