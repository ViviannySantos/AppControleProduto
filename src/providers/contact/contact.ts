import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the ContactProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactProvider {

  // private PATH = 'agenda/';
  private PATH = 'produto/';

  constructor(private db: AngularFireDatabase) {
    console.log('Hello ContactProvider Provider');
  }

  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('name'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }

  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }
 
  // save(contact: any) {
  //   return new Promise((resolve, reject) => {
  //     if (contact.key) {
  //       this.db.list(this.PATH)
  //         .update(contact.key, { name: contact.name, tel: contact.tel })
  //         .then(() => resolve())
  //         .catch((e) => reject(e));
  //     } else {
  //       this.db.list(this.PATH)
  //         .push({ name: contact.name, tel: contact.tel })
  //         .then(() => resolve());
  //     }
  //   })
  // }

  save(contact: any) {
    return new Promise((resolve, reject) => {
      if (contact.key) {
        this.db.list(this.PATH)
          .update(contact.key, { nameProduto: contact.nameProduto, codProturo: contact.codProturo, qtdProturo: contact.qtdProturo, dataVencimento: contact.dataVencimento })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ nameProduto: contact.nameProduto, codProturo: contact.codProturo, qtdProturo: contact.qtdProturo, dataVencimento: contact.dataVencimento })
          .then(() => resolve());
      }
    })
  }
 
  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }
 
}
