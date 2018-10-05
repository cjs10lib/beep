import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: 'chat-message.html'
})
export class ChatMessageComponent {

  @Input() chatIndex: number;

  constructor() { }

}
