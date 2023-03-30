import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCatturatiComponent } from './pokemon-catturati.component';

describe('PokemonCatturatiComponent', () => {
  let component: PokemonCatturatiComponent;
  let fixture: ComponentFixture<PokemonCatturatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCatturatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCatturatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
