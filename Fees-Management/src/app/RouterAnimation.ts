import { trigger, state, transition, style, animate, query, group, animateChild } from '@angular/animations'

export const RouterAnimation = trigger('routeAnimations', [
  state('home', style({
    transform: 'translateX(0px)',
    opacity: 1
  })),
  state('addstudent', style({
    transform: 'translateX(0px)',
    opacity: 1
  })),
  state('students', style({
    transform: 'translateX(0px)',
    opacity: 1
  })),
  state('studentswithbalance', style({
    transform: 'translateX(0px)',
    opacity: 1
  })),
  state('studentswithoutbalance', style({
    transform: 'translateX(0px)',
    opacity: 1
  })),
  transition('* <=> *', animate(500, style({
    transform: 'translateX(-20px)',
    opacity: 0.1
  })))
])


