import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifComponent } from './modif.component';

describe('ModifComponent', () => {
  let component: ModifComponent;
  let fixture: ComponentFixture<ModifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifComponent]
    });
    fixture = TestBed.createComponent(ModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
