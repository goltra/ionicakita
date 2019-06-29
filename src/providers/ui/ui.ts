import { Injectable } from '@angular/core';
import { UiStore} from '../../state/ui.store';

/*
  Generated class for the UiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UiProvider {

  constructor(private uiStore:UiStore) {
    console.log('Hello UiProvider Provider');
  }
  setSideMenu(value:boolean){  
    this.uiStore.update({
      sidebar:value
    });
  }
  setDarkMode(value:boolean){
    this.uiStore.update({
      darkmode:value
    })
  }
}
