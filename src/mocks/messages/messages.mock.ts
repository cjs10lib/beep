import { Message } from '../../models/messages/message.model';
import { USERS_LIST } from '../users/users.mock';

const users = USERS_LIST;
const messsageList: Message[] = [];

users.forEach(user => {
    messsageList.push({ user: user, date: new Date(), lastMessage: 'Hey, been a while' });
    messsageList.push({ user: user, date: new Date(), lastMessage: 'Hello, how are you?' });
    messsageList.push({ user: user, date: new Date(), lastMessage: 'Hi, comming home?' });
})

export const MESSAGE_LIST = messsageList;