import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeViewComponent } from './welcome-view/welcome-view.component';

@NgModule({
  imports: [
    WelcomeRoutingModule,
    CommonModule
  ],
  declarations: [
    WelcomeViewComponent
  ]
})
export class WelcomeModule {
}
