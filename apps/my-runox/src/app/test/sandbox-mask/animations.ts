import {
  animate,
  animation,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

export const fadeIn = animation(
  [style({ opacity: 0 }), animate('{{delay}}'), style({ opacity: 1 })],
  { params: { delay: '1000ms' } }
);

export const fadeOut = animation(
  [animate('{{delay}}'), style({ opacity: 0 })],
  {
    params: { delay: '100ms' },
  }
);

export const fadeInOut = trigger('fadeInOut', [
  transition('void => *', useAnimation(fadeIn, { params: { delay: '500ms' } })),
  transition('* => void', useAnimation(fadeOut)),
]);
