import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscreverUsuarioComponent } from './inscrever-usuario.component';

describe('InscreverUsuarioComponent', () => {
  let component: InscreverUsuarioComponent;
  let fixture: ComponentFixture<InscreverUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscreverUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscreverUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
