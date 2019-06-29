import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { UserStore, UserState } from './user.store';
import { User } from '../models/user.model';

@Injectable()
export class UserQuery extends QueryEntity<UserState, User> {
  isActive$=this.selectActiveId();
  constructor(protected store: UserStore) {
    super(store);
  }

}
