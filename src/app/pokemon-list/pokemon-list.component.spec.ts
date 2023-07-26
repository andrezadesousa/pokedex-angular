import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexListComponent } from './pokemon-list.component';

describe('PokedexListComponent', () => {
  let component: PokedexListComponent;
  let fixture: ComponentFixture<PokedexListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokedexListComponent]
    });
    fixture = TestBed.createComponent(PokedexListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
