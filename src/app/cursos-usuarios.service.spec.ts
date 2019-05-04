import { TestBed } from '@angular/core/testing';

import { CursosUsuariosService } from './cursos-usuarios.service';

describe('CursosUsuariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CursosUsuariosService = TestBed.get(CursosUsuariosService);
    expect(service).toBeTruthy();
  });
});
