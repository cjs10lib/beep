import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form';
import { RegisterFormComponent } from './register-form/register-form';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form';
import { ConfirmEqualValidatorDirective } from '../shared/confirm-equal-validator.directive';
import { ProfileViewComponent } from './profile-view/profile-view';

@NgModule({
    declarations: [
        LoginFormComponent,
        RegisterFormComponent,
        EditProfileFormComponent,
        ProfileViewComponent,

        
        ConfirmEqualValidatorDirective,
    ],
    imports: [
        IonicModule
    ],
    exports: [
        LoginFormComponent,
        RegisterFormComponent,
        EditProfileFormComponent,
        ProfileViewComponent
    ]
})
export class ComponentsModule { }
