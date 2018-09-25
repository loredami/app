import { RouterModule } from './router.module';

describe('RouterModule', () => {
  let routerModule: RouterModule;

  beforeEach(() => {
    routerModule = RouterModule.forRoot();
  });

  it('should create an instance', () => {
    expect(routerModule).toBeTruthy();
  });
});
