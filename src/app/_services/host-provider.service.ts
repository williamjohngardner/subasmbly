import { Injectable, Inject } from '@angular/core';
import { WINDOW } from './window.provider';

@Injectable()
export class HostProviderService {

  constructor (
    @Inject(WINDOW) readonly window: Window
  ) { }

  getHostname (): string {
    return this.window.location.hostname;
  }
}
