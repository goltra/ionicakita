import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UiProvider } from '../providers/ui/ui';
import { UiQuery } from '../state/ui.query';
import { SessionQuery } from '../state/session.query';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  darkMode: any;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar, private uiQ:UiQuery,private uiProv:UiProvider
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.uiQ.isDarkMode$.subscribe(res => {
        this.darkMode = res;
      });
    });
  }
  clickedSidebar(open: boolean = true) {
    this.uiProv.setSideMenu(open);
  }
  darkmode() {
    this.uiProv.setDarkMode(!this.darkMode);
  }
}
