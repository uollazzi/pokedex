import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticoloAddComponent } from './articolo-add.component';

describe('ArticoloAddComponent', () => {
  let component: ArticoloAddComponent;
  let fixture: ComponentFixture<ArticoloAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticoloAddComponent]
    });
    fixture = TestBed.createComponent(ArticoloAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
