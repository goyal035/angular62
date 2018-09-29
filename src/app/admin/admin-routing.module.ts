import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent,LoginComponent } from './component/index';
import { BackLayoutComponent } from './back-layout/back-layout.component';

const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{
		path: '',
		component: BackLayoutComponent,
	    children: [
	      	{ path: 'login', component: LoginComponent },
	      	{ path: 'dashboard', component: DashboardComponent }
	    ]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
