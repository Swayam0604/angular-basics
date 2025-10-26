import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { authdeavtivateGuard } from './authdeavtivate.guard';

describe('authdeavtivateGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authdeavtivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
