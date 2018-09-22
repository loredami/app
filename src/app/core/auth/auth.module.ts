import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects, reducer } from './store';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature(effects)
  ]
})
export class AuthModule {
}
