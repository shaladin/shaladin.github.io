import { Injectable } from '@angular/core';
import { DbContextService } from './db-context.service';
import { User } from './entities/user';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Injectable({
  providedIn: 'root'
})
export class UserDaoService extends DbContextService<User> {

  override storeName = 'users';

  constructor(dbService: NgxIndexedDBService) { 
    super(dbService);
  }


}
