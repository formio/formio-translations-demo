import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationStart } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  previousUrl: string;
  currentUrl: string;

  constructor(public translate: TranslateService, public router: Router) {
    translate.currentLoader['prefix'] = environment.assetLocation;
    translate.setDefaultLang('en');
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.currentUrl = event.url;
        if (this.currentUrl === '/phraseapp/edit' && this.previousUrl !== '/phraseapp/edit' && this.previousUrl) {
          this.previousUrl = this.currentUrl;
          window.location.reload(true);
        }
        if (this.previousUrl === '/phraseapp/edit' && this.currentUrl !== '/phraseapp/edit') {
          window.location.reload(true);
        }
        this.previousUrl = this.currentUrl;
      }
    });
  }
}
