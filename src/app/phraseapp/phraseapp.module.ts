import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateCompiler } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PhraseAppCompiler } from 'ngx-translate-phraseapp';

import { PhraseappEditComponent } from './phraseapp-edit/phraseapp-edit.component';

const navStack: Routes = [
  { path: 'phraseapp',
    children: [
      { path: 'edit', component: PhraseappEditComponent },
    ]
  }
];

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(navStack),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      compiler: {
        provide: TranslateCompiler,
        useClass: PhraseAppCompiler
      }
    }),
  ],
  declarations: [PhraseappEditComponent]
})

export class PhraseappModule { }
