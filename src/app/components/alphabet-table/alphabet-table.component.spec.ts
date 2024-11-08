import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetTableComponent } from './alphabet-table.component';

describe('AlphabetTableComponent', () => {
  let component: AlphabetTableComponent;
  let fixture: ComponentFixture<AlphabetTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlphabetTableComponent]
    });
    fixture = TestBed.createComponent(AlphabetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
