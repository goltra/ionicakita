import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { environment } from '../environments/environment';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { SessionProvider } from '../providers/session/session';
import { SessionStore } from '../state/session.store';
import { SessionQuery } from '../state/session.query';
import { UiProvider } from '../providers/ui/ui';
import { UiQuery } from '../state/ui.query';
import { UiStore } from '../state/ui.store';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),environment.production ? [] : AkitaNgDevtools.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SessionProvider, SessionStore, SessionQuery,
    UiProvider, UiStore, UiQuery
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
