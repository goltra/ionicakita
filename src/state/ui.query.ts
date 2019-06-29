import { Query } from '@datorama/akita';
import { UiState, UiStore } from '../state/ui.store';
import { Injectable } from '@angular/core';

@Injectable()
export class UiQuery extends Query<UiState>{
    sidebarIsOpen$=this.select(state=>state.sidebar);
    isDarkMode$ = this.select(state=>state.darkmode);
    
    constructor(protected store: UiStore) {
        super(store);
    }
}