import { Injectable } from '@angular/core';
import { SessionStore, User, initialState } from '../../state/session.store';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;


@Injectable()
export class SessionProvider {

  constructor(private sessionStore: SessionStore) {

  }

  /**
   * Función que setea los datos del user y establece el lastLogin. 
   */
  login(user: User) {
    user.lastLogin = Date.now();
    this.sessionStore.update({ user: user });
    this._updateLocalStorageUi()

  }

  setUsername(value: string) {
    this.sessionStore.update({ user: { username: value } })
    this._updateLocalStorageUi()
    
  }
  setToken(value: string) {
    this.sessionStore.update({ user: { token: value } })
    this._updateLocalStorageUi()

  }
  setName(value: string) {
    this.sessionStore.update({ user: { name: value } })
    this._updateLocalStorageUi()

  }
  setLanguage(value: string) {
    this.sessionStore.update({ user: { language: value } })
    this._updateLocalStorageUi()

  }

  logout() {
    this.sessionStore.update(initialState());
    this._updateLocalStorageUi()

  }
  private _updateLocalStorageUi(): Promise<void> {
    let data = JSON.stringify(this.sessionStore._value());
    return Storage.set({ key: 'session', value: data });
  }
}
