import { TestBed } from '@angular/core/testing';
import { Interceptor } from './interceptor.interceptor';

describe('AuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Interceptor
    ]
  }))

  it('should be created', () => {
    const interceptor: Interceptor = TestBed.inject(Interceptor)
    expect(interceptor).toBeTruthy()
  })
})

