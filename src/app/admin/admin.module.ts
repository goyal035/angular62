import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BackLayoutComponent } from './back-layout/back-layout.component';
/*import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';*/
import { COMPONENTS } from './component/index';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [BackLayoutComponent, COMPONENTS]
})
export class AdminModule { }
