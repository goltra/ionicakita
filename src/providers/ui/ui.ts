import { Injectable } from '@angular/core';
import { UiStore} from '../../state/ui.store';

@Injectable()
export class UiProvider {

  constructor(private uiStore:UiStore) {

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
