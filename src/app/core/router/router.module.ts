import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CustomSerializer } from 'core/router/store/reducers';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { effects } from './store';
import * as fromRouter from '@ngrx/router-store';

@NgModule({
  imports: [
    StoreRouterConnectingModule,
    StoreModule.forFeature('router', fromRouter.routerReducer),
    EffectsModule.forFeature(effects)
  ],
  declarations: []
})
export class RouterModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RouterModule,
      providers: [{provide: RouterStateSerializer, useClass: CustomSerializer}]
    }
  }
}
