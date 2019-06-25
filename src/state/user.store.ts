import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { createUser, User } from '../models/user.model';
// import {  User } from '../models/user.model';

export interface UserState extends EntityState<User> {}

@Injectable()
@StoreConfig({ name: 'user' })
export class UserStore extends EntityStore<UserState, User> {
  constructor() {
    let user = createUser()
    super(user);
    this.setActive(user);
  }
}
