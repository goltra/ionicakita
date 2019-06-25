import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { UserQuery } from '../../state/user.query';
import { User, createUser } from '../../models/user.model';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
  private user: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private usrProvider: UserProvider, private usrQuery: UserQuery) {
     console.log(this.usrQuery.getValue());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

}
