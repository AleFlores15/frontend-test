import { TestBed } from '@angular/core/testing';
import { appConfig } from './app.config';

describe('appConfig', () => {
  it('existe appConfig', () => {
    expect(appConfig).toBeTruthy();
  });

  it('providers está definido como array', () => {
    const providers = (appConfig as any).providers;
    expect(Array.isArray(providers)).toBeTrue();
  });

  it('providers no contiene elementos nulos', () => {
    const providers = (appConfig as any).providers ?? [];
    expect(providers.every((p: any) => p != null)).toBeTrue();
  });
});
