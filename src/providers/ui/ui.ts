import { Injectable } from '@angular/core';
import { UiStore} from '../../state/ui.store';
import { Plugins } from '@capacitor/core';

const {Storage} = Plugins;

@Injectable()
export class UiProvider {

  constructor(private uiStore:UiStore) {

  }
  setSideMenu(value:boolean){  
    this._updateLocalStorageUi().then(()=>{
      this.uiStore.update({
        sidebar:value
      });
    })
    
  }
  setDarkMode(value:boolean){
    this._updateLocalStorageUi().then(()=>{
      this.uiStore.update({
        darkmode:value
      })
    })
    
  }
  private _updateLocalStorageUi():Promise<void>{
    let data = JSON.stringify(this.uiStore._value());
    return Storage.set({key:'ui',value:data});
  }
}
