import { Injectable } from '@angular/core';
import {UserStore} from '../../state/user.store';
import {createUser,User,timezones} from '../../models/user.model';
import {UserQuery} from '../../state/user.query';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  i:number = 0;
  constructor(private userStore:UserStore, private userQuery:UserQuery) {
    console.log('Hello UserProvider Provider');
  }

  addItem(nombre:string){
    const user:User = createUser({});
    user.id = 'pepeId' + this.i++;
    user.isLogged = false;
    user.language = 'ES';
    user.lastLogin = Date.now();
    user.nombre = nombre;
    user.timeZone = timezones["Europe/London"];
    user.username = 'pepe'
    
    this.userStore.add(user);
  }

  getUser(id:string){
    this.userQuery.selectAll().subscribe(res=>{
      console.log(res);
      
    })
  }
}
