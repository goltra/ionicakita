import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SessionProvider } from '../providers/session/session';
import { SessionStore } from '../state/session.store';
import { SessionQuery } from '../state/session.query';
import { UiProvider } from '../providers/ui/ui';
import { UiQuery } from '../state/ui.query';
import { UiStore } from '../state/ui.store';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), environment.production ? [] : AkitaNgDevtools.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SessionProvider, SessionStore, SessionQuery,
    UiProvider, UiStore, UiQuery
  ]
})
export class AppModule { }
