import { Profile } from '../profile/profile.model';

export interface ChannelMessage {
    channel?: string;
    content?: string;
    user?: Profile;
    created?: Date;
}