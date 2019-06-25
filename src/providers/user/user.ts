import { Injectable } from '@angular/core';
import {UserStore} from '../../state/user.store';
// import {createUser,User,timezones} from '../../models/user.model';
import {User} from '../../models/user.model';
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

  

  getUser(){
    return this.userQuery.getValue();    
  }
  setNombre(value:string){
    this.userStore.update({nombre:value});
  }
  setLogged(value:boolean){
    this.userStore.update({isLogged:value});
  }
}
