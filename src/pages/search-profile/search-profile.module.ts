import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchProfilePage } from './search-profile';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SearchProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(SearchProfilePage),

    ComponentsModule
  ],
})
export class SearchProfilePageModule {}
