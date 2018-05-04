import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { GooglePlus } from '@ionic-native/google-plus';
//import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
// import { TwitterConnect } from '@ionic-native/twitter-connect';
//import { User } from '../user';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient, public googlePlus: GooglePlus, public angularFireAuth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  signInWithGoogle() {
    return this.googlePlus.login({
      'webClientId': '638933829742-i0av628updkc723cb3gnirhh3b0829up.apps.googleusercontent.com',
      'offline': true
    })
      .then(res => {
        //return this.angularFireAuth.auth.signInWithCredential
        return firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
          .then((user: firebase.User) => {
            // atualizando o profile do usuario
            return user.updateProfile({ displayName: res.displayName, photoURL: res.imageUrl });
          });
      });
  }

  private signOutFirebase() {
    return this.angularFireAuth.auth.signOut();
  }
}
