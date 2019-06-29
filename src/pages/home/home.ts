import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { UserQuery } from '../../state/user.query';
import { User } from '../../models/user.model'
import { UiQuery } from '../../state/ui.query';
import { DetallePage } from '../detalle/detalle';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private nombre: string = '';
  private isLogged: boolean = false;
  private user$: Observable<User[]>;
  private sidebarStatus$: Observable<any>;
  private darkMode$: Observable<any>;

  constructor(public navCtrl: NavController, private userProv: UserProvider,
    private userQ: UserQuery, private uiQ: UiQuery, private alertCtrl: AlertController) {
    this.user$ = this.userQ.selectAll();
    this.sidebarStatus$ = this.uiQ.sidebarIsOpen$;
    this.darkMode$ = this.uiQ.isDarkMode$;
  }
  ionViewDidLoad() {
    this.user$ = this.userQ.selectAll();
    this.sidebarStatus$ = this.uiQ.sidebarIsOpen$;
    this.darkMode$ = this.uiQ.isDarkMode$;
  }
  addUser() {
    this.userProv.addUser();
  }

  editUser(id) {
    let al = this.alertCtrl.create({
      title: 'Indica el nombre',
      inputs:[
        {name:'nombre'}
      ],
      buttons: [
        {
          text: 'Ok',
          handler: (data) => {
            this.setNombre(id, data.nombre);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]

    })
    al.present();
  }
  setNombre(id, value: string) {
    this.userProv.setActive(id);
    this.userProv.setNombre(value);
  }
  irDetalle() {
    this.navCtrl.push('DetallePage');
  }
  test() {
    console.log('getuser', this.userProv.getUser());
  }
}
