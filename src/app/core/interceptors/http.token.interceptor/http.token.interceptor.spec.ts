import { TestBed, inject } from '@angular/core/testing';

import { HttpTokenInterceptor } from './http.token.interceptor';

describe('HttpTokenInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpTokenInterceptor]
    });
  });

  it('should be created', inject([HttpTokenInterceptor], (service: HttpTokenInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
