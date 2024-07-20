import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class DbContextService<T> {

  protected storeName: string = '';

  constructor(private dbService: NgxIndexedDBService) { }

  add(item: T) {
    return this.dbService.add(this.storeName, item);
  }

  getById(id: number): Observable<T> {
    return this.dbService.getByKey(this.storeName, id);
  }

  update(item: T): Observable<T> {
    return this.dbService.update(this.storeName, item);
  }

  delete(id: number) {
    return this.dbService.delete(this.storeName, id);
  }

  getAll() {
    return this.dbService.getAll(this.storeName);
  }

  query(property: string, value: any) {
    return this.dbService.getAllByIndex(this.storeName, property, IDBKeyRange.only(value));
  }
}
