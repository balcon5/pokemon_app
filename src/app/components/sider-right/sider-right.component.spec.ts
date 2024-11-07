import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderRightComponent } from './sider-right.component';

describe('SiderRightComponent', () => {
  let component: SiderRightComponent;
  let fixture: ComponentFixture<SiderRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiderRightComponent]
    });
    fixture = TestBed.createComponent(SiderRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
