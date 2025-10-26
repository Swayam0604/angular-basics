import { CanDeactivateFn } from '@angular/router';

export const authdeavtivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
