import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appConfig } from './app.config';

describe('bootstrap (smoke)', () => {
  it('bootstrapApplication es función', () => {
    expect(typeof bootstrapApplication).toBe('function');
  });

  it('AppComponent está definido', () => {
    expect(AppComponent).toBeDefined();
  });

  it('appConfig está definido', () => {
    expect(appConfig).toBeDefined();
  });
});
