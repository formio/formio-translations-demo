import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { createForm } from 'formiojs';

@Component({
  selector: 'app-platform-resource',
  templateUrl: './platform-resource.component.html',
  styleUrls: ['./platform-resource.component.scss']
})

export class PlatformResourceComponent implements OnInit {
  formURL: string;
  languageResource: string;
  english: string;
  spanish: string;
  french: string;

  constructor(private http: HttpClient) {
    this.formURL = environment.appUrl + '/translations';
    this.languageResource = environment.appUrl + '/language/submission/';
    this.english = '5ab194d0b05b30ebce3544b1';
    this.spanish = '5ab1a43786214c6c611d8f43';
    this.french =  '5ab1a4690180ad26206d2cb1';
  }

  fetchLanguage(url: string): Promise<object> {
    return this.http.get(url).toPromise();
  }

  remoteParse(data: object): Promise<object> {
    return new Promise<object>((resolve) => {
      const formated: object = {};
      const input: any = data;
      for (let j = 0; j < input.grid.length; j++) {
        formated[input.grid[j].key] = input.grid[j].value;
      }
      resolve({lang: input.language, trans: formated });
    });
  }


  ngOnInit() {
    createForm(document.getElementById('Resource'), this.formURL, {
      readOnly: false
    }).then( form  => {
      (<any>window).setLanguage = function (lang) {
        form.language = lang;
      };

      (<any>window).setLanguage('en');
      form.options.i18n.resources.es = {};
      form.options.i18n.resources.fr = {};

      form.on('toggleEn', () => {
        this.fetchLanguage(this.languageResource + this.english).then((res: any) => {
          this.remoteParse(res.data).then( data => {
            const passThrough: any = data;
            form.addLanguage(passThrough.lang, passThrough.trans);
            (<any>window).setLanguage(passThrough.lang);
          });
        });
      });

      form.on('toggleEs', () => {
        this.fetchLanguage(this.languageResource + this.spanish).then(  (res: any) => {
          this.remoteParse(res.data).then( data => {
            const passThrough: any = data;
            form.addLanguage(passThrough.lang, passThrough.trans);
            (<any>window).setLanguage(passThrough.lang);
          });
        });
      });

      form.on('toggleFr', () => {
        this.fetchLanguage(this.languageResource + this.french).then((res: any) => {
          this.remoteParse(res.data).then( data => {
            const passThrough: any = data;
            form.addLanguage(passThrough.lang, passThrough.trans);
            (<any>window).setLanguage(passThrough.lang);
          });
        });
      });
    });
  }
}



