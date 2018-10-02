import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Account } from '../../models/account/account.model';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  account = {} as Account;

  constructor(private navCtrl: NavController, private auth: AngularFireAuth) { }

  async navigateToPage(pageName: string) {
    try {
      const result = await this.auth.auth.signInWithEmailAndPassword(this.account.email, this.account.password);
      console.log(result);
      
      pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
    } catch (e) {
      console.error(e);
    }
  }

}
