import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { createForm } from 'formiojs';

@Component({
  selector: 'app-phraseapp-view',
  templateUrl: './phraseapp-view.component.html',
  styleUrls: ['./phraseapp-view.component.scss']
})

export class PhraseappViewComponent implements OnInit {
  PhraseId: string;
  PhraseBase: string;
  formRemote: string;

  constructor(private translate: TranslateService, private http: HttpClient) {
    this.PhraseId = environment.phraseAppId;
    this.PhraseBase = 'https://api.phraseapp.com/api/v2/projects/' + this.PhraseId + '/locales/';
    this.formRemote = environment.appUrl + '/phraseapp';
  }
  switchLanguage(language: string) {
    (<any>window).setLanguage(language);
    this.translate.use(language);
  }

  getLanguages():Promise<any> {
    return this.http.get(this.PhraseBase).toPromise();
  }

  getTranslations(data) {
    let promises:any = [];
    for (let i = 0; i < data.length; i++) {
      promises.push(this.http.get(this.PhraseBase + data[i]['id'] + '/translations').toPromise());
    }
    return promises;
  }

  createConversions(phrases) {
    return new Promise((resolve) => {
      let toMergeBase = {};
      let toMergePhrase = {};
      let newLanguage = {};
      for (let i = 0; i < phrases.length; i++) {
        for (let propt in phrases[i]) {
          let injectLang = phrases[i][propt]['locale']['code'];
          let injectKeyBase = phrases[i][propt]['key']['name'];
          let injectKeyPhrase = '[[__phrase_' + phrases[i][propt]['key']['name'] + '__]]';
          let injectValue = phrases[i][propt]['content'] ;

          toMergeBase = { [injectKeyBase] : injectValue} ;
          toMergePhrase = { [injectKeyPhrase] : injectValue} ;

          let prevValue = newLanguage[injectLang] || {};
          newLanguage[injectLang] = Object.assign(prevValue, toMergePhrase, toMergeBase);
        }

        resolve(newLanguage);
      }
    });
  }

  ngOnInit() {
    this.getLanguages().then((languages: any[])  => {
      Promise.all(this.getTranslations(languages)).then((phrases: any[]) => {
        this.createConversions(phrases).then((i18n: any[]) => {
          createForm(document.getElementById('PhraseView'), this.formRemote, {
            readOnly: false, i18n : i18n
          }).then(form => {
            (<any>window).setLanguage = function (lang) {
              form.language = lang;
            };
          });
        });
      });
    });
  }
}
