import { DBConfig } from 'ngx-indexed-db';

export const SchemeConfig: DBConfig = {
    name: 'indexedDB',
    version: 3,
    objectStoresMeta: [
        {
            store: 'users',
            storeConfig: {keyPath: 'id', autoIncrement: true},
            storeSchema: [
                { name: 'name', keypath: 'name', options: {unique: false} },
                { name: 'email', keypath: 'email', options: {unique: true} },
                { name: 'phoneNumber', keypath: 'phoneNumber', options: {unique: true} }
            ]
        },
        {
            store: 'books',
            storeConfig: {keyPath: 'id', autoIncrement: true},
            storeSchema: [
                { name: 'title', keypath: 'title', options: {unique: false} },
                { name: 'author', keypath: 'author', options: {unique: false} },
                { name: 'userId', keypath: 'userId', options: {unique: false} }
            ]
        },
        {
            store: 'addresses',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
              { name: 'userId', keypath: 'userId', options: { unique: false } },
              { name: 'street', keypath: 'street', options: { unique: false } },
              { name: 'city', keypath: 'city', options: { unique: false } },
              { name: 'state', keypath: 'state', options: { unique: false } },
              { name: 'zip', keypath: 'zip', options: { unique: false } }
            ]
          },
          {
            store: 'notifications',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
              { name: 'message', keypath: 'message', options: { unique: false } },
              { name: 'userId', keypath: 'userId', options: { unique: false } },
              { name: 'timestamp', keypath: 'timestamp', options: { unique: false } }
            ]
          }
    ]
}