import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListemedComponent } from './listemed.component';

describe('ListemedComponent', () => {
  let component: ListemedComponent;
  let fixture: ComponentFixture<ListemedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListemedComponent]
    });
    fixture = TestBed.createComponent(ListemedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
