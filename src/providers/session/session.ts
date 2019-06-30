import { Injectable } from '@angular/core';
import { SessionStore, User,initialState } from '../../state/session.store';


@Injectable()
export class SessionProvider {

  constructor(private sessionStore: SessionStore) {

  }
  
  /**
   * Función que setea los datos del user y establece el lastLogin. 
   */
  login(user:User) {
    user.lastLogin = Date.now();  
    this.sessionStore.update({ user:user});
  }

  setUsername(value: string) {
    this.sessionStore.update({ user: { username: value } })
  }
  setToken(value: string) {
    this.sessionStore.update({ user: { token: value } })
  }
  setName(value: string) {
    this.sessionStore.update({ user: { name: value } })
  }
  setLanguage(value: string) {
    this.sessionStore.update({ user: { language: value } })
  }

  logout(){
    this.sessionStore.update(initialState());
  }
}
