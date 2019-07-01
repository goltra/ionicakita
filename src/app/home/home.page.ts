import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular'
import { SessionProvider } from '../../providers/session/session';
import { SessionQuery } from '../../state/session.query';
import { UiQuery } from '../../state/ui.query';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private nombre: string = '';
  private isLogged$: Observable<boolean>;
  private sidebarStatus$: Observable<any>;
  private darkMode$: Observable<any>;

  constructor(public navCtrl: NavController, private SessionProv: SessionProvider,
    private sessionQ: SessionQuery, private uiQ: UiQuery, private alertCtrl: AlertController) {
    this.sidebarStatus$ = this.uiQ.sidebarIsOpen$;
    this.darkMode$ = this.uiQ.isDarkMode$;
  }
  ngOnInit() {
    this.sidebarStatus$ = this.uiQ.sidebarIsOpen$;
    this.darkMode$ = this.uiQ.isDarkMode$;
    this.isLogged$ = this.sessionQ.isLogged$;
  }
  logIn(){
    this.SessionProv.login({username:'goltra',name:'Francisco',token:''});
  }
  logOut(){
    this.SessionProv.logout();
  }

}
