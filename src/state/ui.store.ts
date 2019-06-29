import {Store, StoreConfig} from '@datorama/akita';

export interface UiState{
    sidebar:boolean,
    darkmode:boolean
}

export function initialStatus(): UiState{
    return {
        sidebar:false,
        darkmode:false
    }
}

@StoreConfig({name: 'ui'})
export class UiStore extends Store<UiState>{
    constructor(){
        super(initialStatus());
    }
}