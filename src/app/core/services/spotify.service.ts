import { HttpBackend } from '@angular/common/http';
import { AppConfigService } from './app.config.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private appConfigService: AppConfigService
  ) {
  }

  getUrlLogin() {
    const authEndpoint = `${this.appConfigService.appConfig.authEndpoint}?`;
    const clientId = `client_id=${this.appConfigService.appConfig.client_id}&`;
    const redirectUri = `redirect_uri=${this.appConfigService.appConfig.redirectUri}&`;
    const scopes = `scopes=${this.appConfigService.appConfig.scopes.join('%20')}&`;
    const response = `response_type=token&show_dialog=true`

    console.log( authEndpoint + clientId +  redirectUri + scopes +response);
    return authEndpoint + clientId +  redirectUri + scopes +response;
  }
}
