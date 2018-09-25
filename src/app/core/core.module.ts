import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthModule } from 'core/auth';
import { RouterModule } from 'core/router';

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forRoot(),
  ],
  declarations: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
