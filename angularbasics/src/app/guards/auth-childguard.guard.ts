import { CanActivateChildFn } from '@angular/router';

export const authChildguardGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
