import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { User } from '../models/user';
import 'rxjs/Rx';

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  getAll() {
    return this.http.get('/users').map((response: Response) => response.json());
  }

  getById(_id: string) {
    return this.http.get('/users/' + _id).map((response: Response) => response.json());
  }

  create(user: User) {
    return this.http.post('/users/register', user);
  }

  login(user: User) {
    return this.http.post('/users/login', user);
  }
  update(user: User) {
    return this.http.put('/users/' + user._id, user);
  }

  delete(_id: string) {
    return this.http.delete('/users/' + _id);
  }
}
