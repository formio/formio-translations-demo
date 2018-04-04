import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PlatformComponent } from './platform/platform.component';
import { PlatformFormiojsComponent } from './platform/platform-formiojs/platform-formiojs.component';
import { PlatformResourceComponent } from './platform/platform-resource/platform-resource.component';
import { PhraseappModule } from './phraseapp/phraseapp.module';
import { PhraseappComponent } from './phraseapp/phraseapp.component';
import { PhraseappViewComponent } from './phraseapp/phraseapp-view/phraseapp-view.component';

import { PhraseappInterceptor } from './phraseapp/phraseapp-view/phraseapp-interceptor';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const navStack: Routes = [
  { path: '', component: HomeComponent},
  { path: 'phraseapp/instructions', component: PhraseappComponent },
  { path: 'phraseapp/view', component: PhraseappViewComponent },
  { path: 'platform', component: PlatformComponent },
  { path: 'platform/formiojs', component: PlatformFormiojsComponent },
  { path: 'platform/resource', component: PlatformResourceComponent },
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    PlatformComponent,
    PlatformFormiojsComponent,
    PlatformResourceComponent,
    PhraseappComponent,
    PhraseappViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PhraseappModule,
    RouterModule.forRoot(navStack, {useHash: true}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: PhraseappInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

