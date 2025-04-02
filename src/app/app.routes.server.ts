import { RenderMode, ServerRoute } from '@angular/ssr';
import test from 'node:test';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
