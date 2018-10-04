import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form';
import { RegisterFormComponent } from './register-form/register-form';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form';
import { ConfirmEqualValidatorDirective } from '../shared/confirm-equal-validator.directive';
import { ProfileViewComponent } from './profile-view/profile-view';
import { ProfileSearchComponent } from './profile-search/profile-search';
import { SendMessageBoxComponent } from './send-message-box/send-message-box';

@NgModule({
    declarations: [
        LoginFormComponent,
        RegisterFormComponent,
        EditProfileFormComponent,
        ProfileViewComponent,

        
        ConfirmEqualValidatorDirective,
    ProfileSearchComponent,
    SendMessageBoxComponent,
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
    SendMessageBoxComponent
    ]
})
export class ComponentsModule { }
