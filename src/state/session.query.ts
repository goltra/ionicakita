import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { SessionStore, SessionState } from './session.store';


@Injectable()
export class SessionQuery extends Query<SessionState> {
  isLogged$ = this.select(({ user }) => toBoolean(user));
  lastLoginTimeStamp$ = this.select(state => state.user.lastLogin);
  completeName$ =this.select(state=>state.user.name);
  language$=this.select(state=>state.user.language);
  
  constructor(protected store: SessionStore) {
    super(store);
  }

}
