import { Profile } from "../profile/profile.model";

export interface Message {
    user: Profile;
    date: Date;
    lastMessage: string;
}