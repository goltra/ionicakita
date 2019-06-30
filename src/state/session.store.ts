import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface User {
  username?:string,
  lastLogin?:number, //timestamp
  token?:string,
  name?:string,
  language?:string,
}
export interface SessionState{
  user:User | null
}

export function initialState(){
  return {
    user:null
  }
}

@Injectable()
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(initialState());
  }
  
}
