import { User } from './../user/user.model';

export interface Message {
    user: User;
    date: Date;
}