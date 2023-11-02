import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticoloEditComponent } from './articolo-edit.component';

describe('ArticoloEditComponent', () => {
  let component: ArticoloEditComponent;
  let fixture: ComponentFixture<ArticoloEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticoloEditComponent]
    });
    fixture = TestBed.createComponent(ArticoloEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
