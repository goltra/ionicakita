import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProvider} from '../../providers/user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private userProv:UserProvider) {

  }
  addUser(){
    this.userProv.addItem('Juan');
  }
  test(){
    this.userProv.getUser('papa');
  }
}
