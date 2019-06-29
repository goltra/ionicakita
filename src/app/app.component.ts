import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UiProvider } from '../providers/ui/ui';
import { UiQuery } from '../state/ui.query';
import { UserQuery } from '../state/user.query';
import { User } from '../models/user.model';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Observable } from 'rxjs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  darkMode: any;
  user$: Observable<User[]>;
  userActiveId$:Observable<any>;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, 
    private uiProv: UiProvider, private uiQ: UiQuery,private userQ:UserQuery) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.uiQ.isDarkMode$.subscribe(res => {
        this.darkMode = res;
      });
      this.user$ = this.userQ.selectAll();
      this.userActiveId$ = this.userQ.isActive$;
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  clickedSidebar(open: boolean = true) {
    this.uiProv.setSideMenu(open);
  }
  darkmode() {
    this.uiProv.setDarkMode(!this.darkMode);
  }
}
