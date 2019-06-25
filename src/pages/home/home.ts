import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProvider} from '../../providers/user/user';
import { DetallePage} from '../detalle/detalle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private nombre:string='';
  private isLogged:boolean = false;
  constructor(public navCtrl: NavController,private userProv:UserProvider) {

  }
  actualizaUser(){
    this.userProv.setNombre(this.nombre);
    this.userProv.setLogged(this.isLogged);
  }
  irDetalle(){
    this.navCtrl.push('DetallePage');
  }
  test(){
    console.log('getuser',this.userProv.getUser());
  }
}
