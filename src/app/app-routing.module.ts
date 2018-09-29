import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent,LoginComponent, HomeComponent, NotFoundComponent } from './component/index';
import { FrontLayoutComponent } from './front-layout/front-layout.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
	    path: 'admin',
	    loadChildren: './admin/admin.module#AdminModule'
	},
	{ 
		path: '', 
		component: FrontLayoutComponent,
	    children: [
	      	{ path: 'login', component: LoginComponent },
	      	{ path: 'signup', component: SignupComponent },
	      	{ path: 'home', component: HomeComponent },
	    ]
	},
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
