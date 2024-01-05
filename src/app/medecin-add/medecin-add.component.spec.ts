import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinAddComponent } from './medecin-add.component';

describe('MedecinAddComponent', () => {
  let component: MedecinAddComponent;
  let fixture: ComponentFixture<MedecinAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedecinAddComponent]
    });
    fixture = TestBed.createComponent(MedecinAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
