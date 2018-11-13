import { NgModule, ModuleWithProviders } from '@angular/core';
import { CartService } from '../services/cart-service.service';

@NgModule({})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [CartService]
    };
  }
}