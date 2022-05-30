import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export interface componentDeactivate{
  canDeactivate: () => boolean | Observable<boolean> | Promise<boolean>
}
export class CanDeactivateService implements CanDeactivate<componentDeactivate> {

  constructor() { }
  canDeactivate(
    component: componentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return component.canDeactivate()
  }
}
