import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form';
import { RegisterFormComponent } from './register-form/register-form';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form';
import { ConfirmEqualValidatorDirective } from '../shared/confirm-equal-validator.directive';
import { ProfileViewComponent } from './profile-view/profile-view';
import { ProfileSearchComponent } from './profile-search/profile-search';
import { SendMessageBoxComponent } from './send-message-box/send-message-box';
import { ChatMessageComponent } from './chat-message/chat-message';
import { ChannelListComponent } from './channel-list/channel-list';
import { ChannelChatComponent } from './channel-chat/channel-chat';

@NgModule({
    declarations: [
        LoginFormComponent,
        RegisterFormComponent,
        EditProfileFormComponent,
        ProfileViewComponent,

        
        ConfirmEqualValidatorDirective,
    ProfileSearchComponent,
    SendMessageBoxComponent,
    ChatMessageComponent,
    ChannelListComponent,
    ChannelChatComponent,
    ],
    imports: [
        IonicModule
    ],
    exports: [
        LoginFormComponent,
        RegisterFormComponent,
        EditProfileFormComponent,
        ProfileViewComponent,
    ProfileSearchComponent,
    SendMessageBoxComponent,
    ChatMessageComponent,
    ChannelListComponent,
    ChannelChatComponent
    ]
})
export class ComponentsModule { }
