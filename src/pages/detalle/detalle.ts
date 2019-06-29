import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { UserQuery } from '../../state/user.query';
import { User, createUser } from '../../models/user.model';
import { Observable } from 'rxjs';

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
 // private users$: Observable<User[]>;
  users$:Observable<User[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private usrProvider: UserProvider, private usrQuery: UserQuery) {
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
    this.users$ =   this.usrQuery.selectAll();
    this.usrQuery.selectCount().subscribe(num=>{
      console.log('num elementos ' ,num);
      
    })
  }

}
