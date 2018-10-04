import { Message } from './../../models/messages/message.model';
import { MESSAGE_LIST } from '../../mocks/messages/messages.mock';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  messageList: Message[] = MESSAGE_LIST;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  navigateToSearchProfilePage() {
    this.navCtrl.push('SearchProfilePage');
  }

}
