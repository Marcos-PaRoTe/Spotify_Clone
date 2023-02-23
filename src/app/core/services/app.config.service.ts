import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy   } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService implements OnDestroy {

  public appConfig: any;

  constructor(
    private _http: HttpClient
  ) { }

  ngOnDestroy(): void {
    this.getConfig.unsubscribe();
  }

  get getConfig() {
    return this._http.get('./assets/config/config.json').subscribe(
      (data: any) => {
        this.appConfig = data;
      }
    );
  }
}
