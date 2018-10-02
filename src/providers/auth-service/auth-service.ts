import { LoginResponse } from './../../models/login/login-response.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Account } from '../../models/account/account.model';

@Injectable()
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  async signInWithEmailAndPassword(account: Account) {
    try {
      return <LoginResponse> {
        result: await this.auth.auth.signInWithEmailAndPassword(account.email, account.password)
      }
    } catch (e) {
      return <LoginResponse> {
        error: e
      }
    }
  }

}
