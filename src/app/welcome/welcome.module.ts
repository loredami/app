import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { containers } from './containers';

@NgModule({
  imports: [
    WelcomeRoutingModule,
    CommonModule
  ],
  declarations: [...containers]
})
export class WelcomeModule {
}
